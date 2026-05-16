console.log("Chaaaarrrrrgggggeeeeeezzzzz !!!!!!!! (leaderboard)");

import { createClient } from "https://esm.sh/@supabase/supabase-js@2?bundle";

const supabaseUrl = 'https://bwjdnnnbcctgnegixujz.supabase.co';
const supabaseAnonKey = 'sb_publishable_TIz-tI0AQgFr5Xa2EgpCjg_50ZlIKre';

const supabase = createClient(supabaseUrl, supabaseAnonKey);


let user_let;
let user_data = null;
let message_parti = getID("message_parti");
let leaderboard = [];
let all_data;
let leaderboard_div = getID("leaderboard");
let toggle_streak = true;
let toggle_achievements = true;

function getID(id) {
    return document.getElementById(id);
}


const { data: { user } } = await supabase.auth.getUser()
if (user) {
    user_let = user;

    const { data, error } = await supabase
    .from('leaderboard_data')
    .select('*') 
    .eq('user_id', user_let.id);

    if (error) console.log(error.code);

    if (data.length === 0) {
        const { data: inserted, error: errInsert } = await supabase
            .from('leaderboard_data')
            .insert([{ user_id: user_let.id, is_participating: false, username: null, Informations:
                {
                    "streak": 1,
                    "last_action_date": null,
                    "skips": 1,
                    "last_skip_reward": null,
                    "achievements" : 3,
                    "all_achievements" : {
                        "candidat": {
                            "name": "Candidat",
                            "description": "Participer au classement",
                            "emoji": "🗳️"
                        },
                        "curieux": {
                            "name": "Curieux",
                            "description": "Ouvrir la page des succès",
                            "emoji": "👀"
                        },
                        "etincelle": {
                            "name": "Étincelle",
                            "description": "Démarrer une série",
                            "emoji": "✨"
                        }
                    },
                    "lessons_done" : 0,
                    "lessons_created" : 0,
                    "lessons_added": 0,
                    "langs_done": 0,
                    "points" : 0
                }
            }]);
        if (errInsert) console.error("Erreur :", errInsert);
        else console.log("Ligne insérée :", inserted);
    }

    await getAllData();
    if (data.length === 0) {
        getID("connected_not_participating").style.display = "flex";
    } else {
        if (data[0].is_participating) {
            user_data = structuredClone(data[0]);

            getID("connected_participating").style.display = "flex";
            create_leaderboard(getID("first_row").querySelector("select").value);

            /*INITIALIZE STREAK*/
            document.querySelector(".fill").innerText = data[0].Informations.streak;
            getID("freeze_p").innerHTML = "Gels : <strong>" + data[0].Informations.skips + "</strong>/20";
            getID("streak_p").querySelector("img").src = getID("link_info").innerText === "on" ? "streak.png" : "streak_off.png";
            getID("streak_button").querySelector("img").src = getID("link_info").innerText === "on" ? "streak.png" : "streak_off.png";
            if (getID("link_info").innerText === "off") {
                document.querySelector(".underline").style.background = "#9ba8af";
                document.querySelector(".underline").style.animation = "none";
                document.querySelector(".fill").style.animation = "none";
                document.querySelector(".streak_p").style.animation = "none";
            }
        } else {
            getID("connected_not_participating").style.display = "flex";
        }
    }

} else {
    getID("not_connected").style.display = "flex";
}


async function getAllData() {
    const { data, error } = await supabase
        .from('leaderboard_data')
        .select('*') 
    all_data = data;
}

let all_usernames = [];
if (!(all_data === null || all_data === undefined)) { 
    all_data.forEach(e => {
    if (e.is_participating) {
        all_usernames.push(e.username);
    }
});
}


getID("username_input").addEventListener("input", () => {
    if (all_usernames.includes(getID("username_input").value)) {
        getID("connected_not_participating").querySelector("button").disabled = true;
        message_parti.style.display = "block";
        message_parti.innerHTML = "<span style='color: red'>Pseudo déjà utilisé</span>";
        return;
    }

    if (getID("username_input").value.length > 13) {
        getID("connected_not_participating").querySelector("button").disabled = true;
        message_parti.style.display = "block";
        message_parti.innerHTML = "<span style='color: red'>Pseudo trop long</span>";
        return;
    }

    getID("connected_not_participating").querySelector("button").disabled = false;
    message_parti.style.display = "none";
});

getID("connected_not_participating").querySelector("button").addEventListener("click", participate);
async function participate() {
    if (getID("username_input").value === "") return;

    const { error: err } = await supabase
        .from("leaderboard_data")
        .update({ is_participating: true, username: getID("username_input").value })
        .eq('user_id', user_let.id);

    location.reload();
}


getID("first_row").querySelector("select").addEventListener("change", () => {
    create_leaderboard(getID("first_row").querySelector("select").value);
});

function create_leaderboard(what) {

    leaderboard = all_data;

    leaderboard.sort((a, b) =>
        b.Informations[what] - a.Informations[what]
    );

    let rank = 1;

    for (let i = 0; i < leaderboard.length; i++) {
        if (
            i > 0 &&
            leaderboard[i].Informations[what] < leaderboard[i - 1].Informations[what]
        ) {
            rank++;
        }

        leaderboard[i].rank = rank;
    }

    render_leaderboard();
}

function render_leaderboard() {
    let all_rows = leaderboard_div.querySelectorAll(".row");
    all_rows.forEach((e, i) => {
        if (!(i === 0)) {
            leaderboard_div.removeChild(e);
        }
    })

    leaderboard.forEach(e => {
        let row = document.createElement("div");
        row.className = "row";

        let rank_div = document.createElement("div");
        rank_div.className = "rank_div";
        if (e.rank < 4) {
            rank_div.innerHTML = "<img src='Rank " + e.rank + ".png'>";
            if (e.username === user_data.username) {
                if (e.rank === 1) {
                    document.dispatchEvent(new CustomEvent("1st_place", {
                        detail: {}
                    }));
                }
                
                document.dispatchEvent(new CustomEvent("podium", {
                    detail: {}
                }));
            }
        } else {
            rank_div.innerHTML = "<strong>" + e.rank + ".</strong>";
        }

        let username_div = document.createElement("div");
        username_div.innerHTML = e.username;
        username_div.style.display = "flex";
        username_div.style.alignItems = "center";
        if (user_data.username === e.username) {
            username_div.style.textDecoration = "underline";
        }

        let type_div = document.createElement("div");
        type_div.innerHTML = e.Informations[getID("first_row").querySelector("select").value];
        type_div.style.display = "flex";
        type_div.style.alignItems = "center";

        row.appendChild(rank_div);
        row.appendChild(username_div);
        row.appendChild(type_div);
        leaderboard_div.appendChild(row);
    });
}


getID("streak_button").addEventListener("click", () => {
    streak()
});

getID("close_streak").addEventListener("click", () => {
    streak()
});

function streak() {
    if (toggle_streak === true) {
        toggle_streak = false;
        getID("streak_div").style.opacity = 1;
        getID("streak_div").style.display = "flex";
        getID("parameter_cover").style.display = "block";
        getID("parameter_cover").onclick = () => {streak()};
    } else {
        toggle_streak = true;
        getID("streak_div").style.opacity = 0;
        setTimeout(() => {
            getID("streak_div").style.display = "none";
        }, 300);
        getID("parameter_cover").style.display = "none";
        getID("parameter_cover").onclick = () => {parameter()};
    }
}


getID("achievements_button").addEventListener("click", () => {
    achievements()
});

getID("close_achievements").addEventListener("click", () => {
    achievements()
});

function achievements() {
    if (toggle_achievements === true) {
        toggle_achievements = false;
        getID("achievements_div").style.opacity = 1;
        getID("achievements_div").style.display = "flex";
        getID("parameter_cover").style.display = "block";
        getID("parameter_cover").onclick = () => {achievements()};
    } else {
        toggle_achievements = true;
        getID("achievements_div").style.opacity = 0;
        setTimeout(() => {
            getID("achievements_div").style.display = "none";
        }, 300);
        getID("parameter_cover").style.display = "none";
        getID("parameter_cover").onclick = () => {parameter()};
    }
}

