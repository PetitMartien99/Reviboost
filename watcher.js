console.log("No more ideas (watcher)");


import { createClient } from "https://esm.sh/@supabase/supabase-js@2?bundle";

const supabaseUrl = 'https://bwjdnnnbcctgnegixujz.supabase.co';
const supabaseAnonKey = 'sb_publishable_TIz-tI0AQgFr5Xa2EgpCjg_50ZlIKre';

const supabase = createClient(supabaseUrl, supabaseAnonKey);


/* ------- ACHIEVEMENTS STORAGE-------- */
const ACHIEVEMENTS = {
    candidat: {
        name: "Candidat",
        description: "Participer au classement",
        emoji: "🗳️"
    },
    curieux: {
        name: "Curieux",
        description: "Ouvrir la page des succès",
        emoji: "👀"
    },
    premier_pas: {
        name: "Premier pas",
        description: "Créer une leçon",
        emoji: "🐣"
    },
    eleve_applique: {
        name: "Élève appliqué",
        description: "Créer 10 leçons",
        emoji: "📚"
    },
    bientot_professeur: {
        name: "Bientôt professeur",
        description: "Créer 50 leçons",
        emoji: "🧑‍🏫"
    },
    premiere_def: {
        name: "Première définition",
        description: "Ajouter une définition",
        emoji: "🪶"
    },
    prise_en_main: {
        name: "Prise en main",
        description: "Ajouter 10 fois",
        emoji: "🧩"
    },
    collection_naissante: {
        name: "Collection naissante",
        description: "Ajouter 50 fois",
        emoji: "📦"
    },
    bibliotheque_locale: {
        name: "Bibliothèque locale",
        description: "Ajouter 100 fois",
        emoji: "📑"
    },
    archive_professionelle: {
        name: "Archive professionelle",
        description: "Ajouter 250 fois",
        emoji: "🗄️"
    },
    maitre_des_defs: {
        name: "Maître des définitions",
        description: "Ajouter 500 fois",
        emoji: "🧿"
    },
    debut_revision: {
        name: "Première révision",
        description: "Terminer une leçon",
        emoji: "✏️"
    },
    quinze_sur_vingt: {
        name: "15/20 garantit",
        description: "Terminer 10 leçons",
        emoji: "📝"
    },
    vingt_et_un_sur_vingt: {
        name: "21/20 garantit",
        description: "Terminer 50 leçons",
        emoji: "🚀"
    },
    monstre_revisions: {
        name: "Monstre des révisions",
        description: "Terminer 100 leçons",
        emoji: "🧠"
    },
    a1: {
        name: "Niveau A1",
        description: "Terminer une leçon de verbes",
        emoji: "📕"
    },
    a2: {
        name: "Niveau A2",
        description: "Terminer 10 leçons de verbes",
        emoji: "📗"
    },
    b1: {
        name: "Niveau B1",
        description: "Terminer 25 leçons de verbes",
        emoji: "📘"
    },
    b2: {
        name: "Niveau B2",
        description: "Terminer 50 leçons de verbes",
        emoji: "📙"
    },
    c1: {
        name: "Niveau C1",
        description: "Terminer 100 leçons de verbes",
        emoji: "📄"
    },
    bilingue: {
        name: "Bilingue",
        description: "Terminer 250 leçons de verbes",
        emoji: "🌍"
    },
    etincelle: {
        name: "Étincelle",
        description: "Démarrer une série",
        emoji: "✨"
    },
    briquet: {
        name: "Briquet",
        description: "Atteindre 7 jours de série",
        emoji: "🔥"
    },
    feu_de_camp: {
        name: "Feu de camp",
        description: "Atteindre 25 jours de série",
        emoji: "🏕️"
    },
    incendie: {
        name: "Incendie",
        description: "Atteindre 50 jours de série",
        emoji: "🌋"
    },
    brasier: {
        name: "Brasier",
        description: "Atteindre 75 jours de série",
        emoji: "🎇"
    },
    soleil: {
        name: "soleil",
        description: "Atteindre 100 jours de série",
        emoji: "☀️"
    },
    sans_faute: {
        name: "Sans faute",
        description: "Avoir 100% à une leçon d'au moins 10 questions",
        emoji: "💯"
    },
    tireur_elite: {
        name: "Tireur d'élite",
        description: "Faire 10 bonnes réponses d'affilée",
        emoji: "🎯"
    },
    tireur_dans_le_pied: {
        name: "Tireur dans le pied",
        description: "Faire 10 mauvaises réponses d'affilée",
        emoji: "🦶"
    },
    score_moyen: {
        name: "Score moyen",
        description: "Obtenir 50% à une leçon",
        emoji: "⚖️"
    },
    speedrunner: {
        name: "Speedrunner",
        description: "Finir une leçon d'au moins 5 questions en moins de 10 secondes",
        emoji: "⚡"
    },
    premiers_points: {
        name: "Premiers points",
        description: "Gagner ses premiers points",
        emoji: "🪙"
    },
    bon_debut: {
        name: "Bon début",
        description: "Gagner 100 points",
        emoji: "📈"
    },
    collectionneur_savoir: {
        name: "Collectionneur de savoir",
        description: "Gagner 250 points",
        emoji: "📖"
    },
    en_route: {
        name: "En route",
        description: "Gagner 500 points",
        emoji: "🛣️"
    },
    inarretable: {
        name: "Inarrêtable",
        description: "Gagner 1000 points",
        emoji: "🚄"
    },
    cresus: {
        name: "Crésus",
        description: "Gagner 5000 points",
        emoji: "💰"
    },
    picsou: {
        name: "Picsou",
        description: "Gagner 10000 points",
        emoji: "🦆"
    },
    champion: {
        name: "Champion",
        description: "Atteindre le podium du classement",
        emoji: "🏅"
    },
    legende: {
        name: "Légende",
        description: "Atteindre la première place du classement",
        emoji: "👑"
    },
    insomniaque: {
        name: "Insomniaque",
        description: "Faire une leçon entre 23 heures et 4 heures",
        emoji: "🌙"
    },
    leve_tot: {
        name: "Lève-tôt",
        description: "Faire une leçon entre 5 et 7 heures",
        emoji: "🌅"
    },
    coeur_brise: {
        name: "Cœur brisé",
        description: "Perdre sa série",
        emoji: "💔"
    },
    sauvetage_in_extremis: {
        name: "Sauvetage in-extremis",
        description: "Utiliser un gel",
        emoji: "🧊"
    },
    toi_je_taime_bien: {
        name: "Toi je t'aime bien",
        description: "Avoir son compte béni par le dev",
        emoji: "😎"
    },
    amateur: {
        name: "Amateur",
        description: "Débloquer 5 succès",
        emoji: "📘"
    },
    collectionneur: {
        name: "Collectionneur",
        description: "Débloquer 10 succès",
        emoji: "🗃️"
    },
    completioniste: {
        name: "Complétioniste",
        description: "Obtenir tous(...?) les succès",
        emoji: "🏆"
    },
    the_end: {
        name: "La Fin",
        description: "Bien joué. C'était sympa, hein ?",
        emoji: "🏁"
    }
};

let user_let;
let user_data = null;
let lessons_created_local = null;

const notification = new Audio("notification.mp3");
let sonor_effects = document.getElementById("toggle_sound") ? document.getElementById("toggle_sound").checked : null;

function playSound(name) {
    if (!name) return;
    name.currentTime = 0; 
    name.play();
}

["pointerdown", "keydown", "touchstart"].forEach(eventType => {

    document.addEventListener(eventType, unlockAudio, {
        once: true
    });

});

function unlockAudio() {

    const audio = new Audio("notification.mp3");

    audio.volume = 0;

    audio.play();

    console.log("Audio unlocked");
}


let renderer = document.createElement("div");
renderer.id = "renderer"
document.querySelector("body").appendChild(renderer);


const { data: { user } } = await supabase.auth.getUser()
if (user) {
    user_let = user;

    const { data, error } = await supabase
    .from('leaderboard_data')
    .select('*') 
    .eq('user_id', user_let.id);

    if (error) console.log(error.code);

    if (!(data.length === 0)) {
        if (data[0].is_participating === true) {
            user_data = structuredClone(data[0]);

            if (!window.location.pathname.endsWith("secret.html")) {
                lessons_created_local = user_data.Informations.lessons_created;

                update_streak_state(data[0]);
            }    

            if (user_data.Informations.achievements >= 5) {
               await give_achievement("amateur", ACHIEVEMENTS.amateur);
            }
            if (user_data.Informations.achievements >= 10) {
                await give_achievement("collectionneur", ACHIEVEMENTS.collectionneur);
            }
            if (user_data.Informations.achievements === 48) {
                await give_achievement("completioniste", ACHIEVEMENTS.completioniste);
            }

            if (!window.location.pathname.endsWith("secret.html")) {

                display_achievements(user_data.Informations.all_achievements);

                document.addEventListener("lesson_end", (event) => {
                    lesson_ending(data[0], event.detail);
                });
            }
        } 
    }
}

async function lesson_ending(data, details) {

    console.log("===== WE GOT ACTIVATED =====");

    let new_one = structuredClone(data.Informations);

    console.log("Informations AVANT :", structuredClone(new_one));

    new_one.points += details.points_number;
    user_data.Informations.points += details.points_number;

    console.log(user_data)

    if (user_data.Informations.points >= 10000) {
        console.log(10);
        if (!new_one.all_achievements["picsou"]) {
            new_one.achievements += 1;
            new_one.all_achievements["picsou"] = ACHIEVEMENTS.picsou;
        }
        await give_achievement("picsou", ACHIEVEMENTS.picsou);
    }
    if (user_data.Informations.points >= 5000) {
        console.log(0);
        if (!new_one.all_achievements["cresus"]) {
            new_one.achievements += 1;
            new_one.all_achievements["cresus"] = ACHIEVEMENTS.cresus;
        }
        await give_achievement("cresus", ACHIEVEMENTS.cresus);
    }
    if (user_data.Informations.points >= 1000) {
        console.log(1);
        if (!new_one.all_achievements["inarretable"]) {
            new_one.achievements += 1;
            new_one.all_achievements["inarretable"] = ACHIEVEMENTS.inarretable;
        }
        await give_achievement("innaretable", ACHIEVEMENTS.inarretable);
    }
    if (user_data.Informations.points >= 500) {
        console.log(2);
        if (!new_one.all_achievements["en_route"]) {
            new_one.achievements += 1;
            new_one.all_achievements["en_route"] = ACHIEVEMENTS.en_route;
        }
        await give_achievement("en_route", ACHIEVEMENTS.en_route);
    } 
    if (user_data.Informations.points >= 250) {
        console.log(3);
        if (!new_one.all_achievements["collectionneur_savoir"]) {
            new_one.achievements += 1;
            new_one.all_achievements["collectionneur_savoir"] = ACHIEVEMENTS.collectionneur_savoir;
        }
        await give_achievement("collectionneur_savoir", ACHIEVEMENTS.collectionneur_savoir);
    } 
    if (user_data.Informations.points >= 100) {
        console.log(4);
        if (!new_one.all_achievements["bon_debut"]) {
            new_one.achievements += 1;
            new_one.all_achievements["bon_debut"] = ACHIEVEMENTS.bon_debut;
        }
        await give_achievement("bon_debut", ACHIEVEMENTS.bon_debut);
    } 
    if (user_data.Informations.points >= 10) {
        console.log(5);
        if (!new_one.all_achievements["premiers_points"]) {
            new_one.achievements += 1;
            new_one.all_achievements["premiers_points"] = ACHIEVEMENTS.premiers_points;
        }
        await give_achievement("premiers_points", ACHIEVEMENTS.premiers_points);
    } 

    new_one.lessons_done += 1;
    user_data.Informations.lessons_done += 1;

    if (user_data.Informations.lessons_done >= 100) {
        if (!new_one.all_achievements["monstre_revisions"]) {
            new_one.achievements += 1;
            new_one.all_achievements["monstre_revisions"] = ACHIEVEMENTS.monstre_revisions;
        }
        await give_achievement("monstre_revisions", ACHIEVEMENTS.monstre_revisions);
    } else if (user_data.Informations.lessons_done >= 50) {
        if (!new_one.all_achievements["vingt_et_un_sur_vingt"]) {
            new_one.achievements += 1;
            new_one.all_achievements["vingt_et_un_sur_vingt"] = ACHIEVEMENTS.vingt_et_un_sur_vingt;
        }
        await give_achievement("vingt_et_un_sur_vingt", ACHIEVEMENTS.vingt_et_un_sur_vingt);
    } else if (user_data.Informations.lessons_done >= 10) {
        if (!new_one.all_achievements["quinze_sur_vingt"]) {
            new_one.achievements += 1;
            new_one.all_achievements["quinze_sur_vingt"] = ACHIEVEMENTS.quinze_sur_vingt;
        }
        await give_achievement("quinze_sur_vingt", ACHIEVEMENTS.quinze_sur_vingt);
    } else if (user_data.Informations.lessons_done >= 1) {
        if (!new_one.all_achievements["debut_revision"]) {
            new_one.achievements += 1;
            new_one.all_achievements["debut_revision"] = ACHIEVEMENTS.debut_revision;
        }
        await give_achievement("debut_revision", ACHIEVEMENTS.debut_revision);
    }  
 

    if (details.percentage === 50) {
        if (!new_one.all_achievements["score_moyen"]) {
            new_one.achievements += 1;
            new_one.all_achievements["score_moyen"] = ACHIEVEMENTS.score_moyen;
        }
        await give_achievement("score_moyen", ACHIEVEMENTS.score_moyen);
    }

    if (details.percentage === 100 && details.questions_length > 9) {
        if (!new_one.all_achievements["sans_faute"]) {
            new_one.achievements += 1;
            new_one.all_achievements["sans_faute"] = ACHIEVEMENTS.sans_faute;
        }
        await give_achievement("sans_faute", ACHIEVEMENTS.sans_faute);
    }

    if (details.time < 15 && details.questions_length > 4) {
        if (!new_one.all_achievements["speedrunner"]) {
            new_one.achievements += 1;
            new_one.all_achievements["speedrunner"] = ACHIEVEMENTS.speedrunner;
        }
        await give_achievement("speedrunner", ACHIEVEMENTS.speedrunner);
    }

    console.log("Points ajoutés :", details.points_number);
    console.log("Total points :", new_one.points);

    const info = structuredClone(data.Informations);

    const today = new Date();

    console.log("Today RAW :", today);
    console.log("Today ISO :", today.toISOString());

    // --- INIT SAFE ---
    let streak = info.streak ?? 0;
    let skips = info.skips ?? 0;

    console.log("Streak initiale :", streak);
    console.log("Skips initiaux :", skips);

    let lastAction = info.last_action_date
        ? new Date(info.last_action_date)
        : null;

    let lastSkipReward = info.last_skip_reward
        ? new Date(info.last_skip_reward)
        : null;

    console.log("last_action_date DB :", info.last_action_date);
    console.log("lastAction parsed :", lastAction);

    console.log("last_skip_reward DB :", info.last_skip_reward);
    console.log("lastSkipReward parsed :", lastSkipReward);

    // --- WEEKLY SKIP ---
    if (lastSkipReward) {

        const diffWeeks = Math.floor(
            (today - lastSkipReward) / (1000 * 60 * 60 * 24 * 7)
        );

        console.log("Diff semaines :", diffWeeks);

        if (diffWeeks > 0) {

            console.log("Ajout de skips :", diffWeeks);

            skips += diffWeeks;
            lastSkipReward = today;

        } else {

            console.log("Pas de skip ajouté");
        }

    } else {

        console.log("Première initialisation des skips");

        lastSkipReward = today;
    }

    // --- FIRST ACTION EVER ---
    if (!lastAction) {

        console.log("Première action EVER");

        streak = 1;
        lastAction = today;

    } else {

        const todayDate = new Date(today);
        todayDate.setHours(0, 0, 0, 0);

        const lastDate = new Date(lastAction);
        lastDate.setHours(0, 0, 0, 0);

        const diffMs = todayDate - lastDate;

        const diffDays = Math.floor(
            diffMs / (1000 * 60 * 60 * 24)
        );

        console.log("Diff ms :", diffMs);
        console.log("Diff jours :", diffDays);

        // même jour
        if (diffDays === 0) {

            console.log("Déjà fait aujourd’hui");

        }

        // jour suivant normal
        else if (diffDays === 1) {

            console.log("Jour suivant normal");

            streak += 1;

        } else {

            console.log("Plusieurs jours d’écart");

            const missed = diffDays - 1;

            console.log("Jours manqués :", missed);

            if (skips >= missed) {

                console.log("Skips consommés");

                skips -= missed;
                streak += 1;

                if (!new_one.all_achievements["sauvetage_in_extremis"]) {
                    new_one.achievements += 1;
                    new_one.all_achievements["sauvetage_in_extremis"] = ACHIEVEMENTS.sauvetage_in_extremis;
                    give_achievement("sauvetage_in_extremis", ACHIEVEMENTS.sauvetage_in_extremis);
                }

            } else {

                console.log("Pas assez de skips → reset");

                streak = 1;
                skips = 0;
                
                if (!new_one.all_achievements["coeur_brise"]) {
                    new_one.achievements += 1;
                    new_one.all_achievements["coeur_brise"] = ACHIEVEMENTS.coeur_brise;
                    give_achievement("coeur_brise", ACHIEVEMENTS.coeur_brise);
                }
            }

            const fixedDate = new Date(today);
            fixedDate.setDate(fixedDate.getDate() - 1);

            lastAction = fixedDate;
        }
    }

    console.log("Streak finale :", streak);
    console.log("Skips finaux :", skips);

    // --- SAVE ---
    new_one.streak = streak;
    new_one.skips = skips;
    new_one.last_action_date = today.toISOString();
    new_one.last_skip_reward = lastSkipReward.toISOString();

    console.log("OBJET FINAL ENVOYÉ :", structuredClone(new_one));

    const hour = new Date().getHours();

    if (hour >= 23 || hour < 4) {
        if (!new_one.all_achievements["insomniaque"]) {
            new_one.achievements += 1;
            new_one.all_achievements["insomniaque"] = ACHIEVEMENTS.insomniaque;
            give_achievement("insomniaque", ACHIEVEMENTS.insomniaque);
        }
    }

    if (hour >= 5 && hour < 7) {
        if (!new_one.all_achievements["insomniaque"]) {
            new_one.achievements += 1;
            new_one.all_achievements["insomniaque"] = ACHIEVEMENTS.insomniaque;
            give_achievement("insomniaque", ACHIEVEMENTS.insomniaque);
        }
    }



    user_data.Informations.streak = streak;

    if (streak >= 100) {
        if (!new_one.all_achievements["soleil"]) {
            new_one.achievements += 1;
            new_one.all_achievements["soleil"] = ACHIEVEMENTS.soleil;
        }
        await give_achievement("brasier", ACHIEVEMENTS.brasier);
    } else if (streak >= 75) {
        if (!new_one.all_achievements["brasier"]) {
            new_one.achievements += 1;
            new_one.all_achievements["brasier"] = ACHIEVEMENTS.brasier;
        }
        await give_achievement("brasier", ACHIEVEMENTS.brasier);
    } else if (streak >= 50) {
        if (!new_one.all_achievements["incendie"]) {
            new_one.achievements += 1;
            new_one.all_achievements["incendie"] = ACHIEVEMENTS.incendie;
        }
        await give_achievement("incendie", ACHIEVEMENTS.incendie);
    } else if (streak >= 25) {
        if (!new_one.all_achievements["feu_de_camp"]) {
            new_one.achievements += 1;
            new_one.all_achievements["feu_de_camp"] = ACHIEVEMENTS.feu_de_camp;
        }
        await give_achievement("feu_de_camp", ACHIEVEMENTS.feu_de_camp);
    } else if (streak >= 7) {
        if (!new_one.all_achievements["briquet"]) {
            new_one.achievements += 1;
            new_one.all_achievements["briquet"] = ACHIEVEMENTS.briquet;
        }
        await give_achievement("briquet", ACHIEVEMENTS.briquet);
    }


    const { error: err } = await supabase
        .from("leaderboard_data")
        .update({ Informations: new_one })
        .eq('user_id', user_let.id);

    if (err) {

        console.error("ERREUR SUPABASE :", err);

    } else {

        console.log("Update Supabase réussi");
    }

    console.log("===== FIN =====");
}

/* ------- ACHIEVEMENTS DISPLAY LEADERBOARD -------- */

function display_achievements(data) {
    if (!window.location.pathname.endsWith("leaderboard.html")) {
        return;
    }
    console.log(data);
    document.getElementById("total_achievements_p").innerHTML = Object.keys(data).length === 1 ? "<strong>" + Object.keys(data).length + "</strong> débloqué sur 50" : "<strong>" + Object.keys(data).length + "</strong> débloqués sur 50";

    let total = document.getElementById("total_achievements_div");
    for (const key in ACHIEVEMENTS) {
        if (!data[key]) continue;

        let achievement_div = document.createElement("div");
        achievement_div.className = "achievement";

        let achievement_img = document.createElement("p");
        achievement_img.className = "achievement_img";
        achievement_img.innerText = data[key].emoji;
        achievement_div.appendChild(achievement_img);

        let title_and_description = document.createElement("div");
        title_and_description.className = "title_and_description";
        achievement_div.appendChild(title_and_description);

        let title = document.createElement("div");
        title.className = "title";
        title.innerText = data[key].name;
        title_and_description.appendChild(title);

        let description = document.createElement("div");
        description.className = "description";
        description.innerText = data[key].description;
        title_and_description.appendChild(description);

        total.appendChild(achievement_div);
    }
}

async function give_achievement(key, new_achievement) {

    if (Object.hasOwn(user_data.Informations.all_achievements, key)) {
        return false;
    }

    console.log(user_data.Informations)
    let newObject = structuredClone(user_data.Informations);
    newObject.achievements += 1;
    newObject.all_achievements[key] = new_achievement;
    user_data.Informations.achievements += 1;
    user_data.Informations.all_achievements[key] = new_achievement;

    console.log(newObject)

    const { error: err } = await supabase
    .from("leaderboard_data")
    .update({ Informations: newObject })
    .eq('user_id', user_let.id);

    if (err) console.log(err);

    render_achievement(new_achievement);
}

function render_achievement(achievement) {
    console.log("rendering");
    console.log(achievement);

    let achievement_div = document.createElement("div");
    achievement_div.className = "achievement";

    let achievement_img = document.createElement("p");
    achievement_img.className = "achievement_img";
    achievement_img.innerText = achievement.emoji;
    achievement_div.appendChild(achievement_img);

    let title_and_description = document.createElement("div");
    title_and_description.className = "title_and_description";
    achievement_div.appendChild(title_and_description);

    let title = document.createElement("div");
    title.className = "title";
    title.innerText = achievement.name;
    title_and_description.appendChild(title);

    let description = document.createElement("div");
    description.className = "description";
    description.innerText = achievement.description;
    title_and_description.appendChild(description);

    renderer.appendChild(achievement_div);

    if (sonor_effects === true) {
        playSound(notification);
        console.log("here");
    }

    setTimeout(() => {
        achievement_div.style.opacity = 0;
        setTimeout(() => {
            renderer.removeChild(achievement_div);
        }, 500);
    }, 4000);
}

/* ----- ACHIEVEMENTS LISTENERS ------ */

if (window.location.pathname.endsWith("leaderboard.html")) {
    document.getElementById("achievements_button").addEventListener("click", () => {
        give_achievement("curieux", ACHIEVEMENTS.curieux);
    });
}

document.addEventListener("lesson_create", async (event) => {
    let newObject = structuredClone(user_data);
    console.log(newObject.Informations.lessons_created);
    newObject.Informations.lessons_created = lessons_created_local + 1;
    lessons_created_local += 1;
    user_data.Informations.lessons_created += 1;
    console.log(newObject.Informations.lessons_created);

    console.log("lessons_created");
    console.log(newObject.Informations);

    const { error: err } = await supabase
    .from("leaderboard_data")
    .update({ Informations: newObject.Informations })
    .eq('user_id', user_let.id);

    if (err) console.log(err);

    /*lessons_created_local est pas ultra nécessaire, mais dans le doute je le garde parce qu'il fait pas de mal*/

    if (lessons_created_local === 1) {
        give_achievement("premier_pas", ACHIEVEMENTS.premier_pas);
    } else if (lessons_created_local === 10) {
        give_achievement("eleve_applique", ACHIEVEMENTS.eleve_applique);
    } else if (lessons_created_local === 50) {
        give_achievement("bientot_professeur", ACHIEVEMENTS.bientot_professeur);
    } else if (lessons_created_local === 100) {
        give_achievement("capes_reussi", ACHIEVEMENTS.capes_reussi);
    }
});

document.addEventListener("lesson_add", async (event) => {
    console.log("hhehehehehjjed")

    let newObject = structuredClone(user_data);
    user_data.Informations.lessons_added += 1;
    newObject.Informations.lessons_added += 1;
    
    const { error: err } = await supabase
    .from("leaderboard_data")
    .update({ Informations: newObject.Informations })
    .eq('user_id', user_let.id);

    if (err) console.log(err);

    if (user_data.Informations.lessons_added >= 1) {
        give_achievement("premiere_def", ACHIEVEMENTS.premiere_def);
    }
    if (user_data.Informations.lessons_added >= 10) {
        give_achievement("prise_en_main", ACHIEVEMENTS.prise_en_main);
    }
    if (user_data.Informations.lessons_added >= 50) {
        give_achievement("collection_naissante", ACHIEVEMENTS.collection_naissante);
    } 
    if (user_data.Informations.lessons_added >= 100) {
        give_achievement("bibliotheque_locale", ACHIEVEMENTS.bibliotheque_locale);
    }
    if (user_data.Informations.lessons_added >= 250) {
        give_achievement("archive_professionelle", ACHIEVEMENTS.archive_professionelle);
    }
    if (user_data.Informations.lessons_added >= 500) {
        give_achievement("maitre_des_defs", ACHIEVEMENTS.maitre_des_defs);
    }
});

document.addEventListener("lang_end", async (event) => {
    console.log("hhehehehehjjeefeef454543LANGd")

    let newObject = structuredClone(user_data);
    user_data.Informations.langs_done += 1;
    newObject.Informations.langs_done += 1;
    
    const { error: err } = await supabase
    .from("leaderboard_data")
    .update({ Informations: newObject.Informations })
    .eq('user_id', user_let.id);

    if (err) console.log(err);

    if (user_data.Informations.langs_done >= 1) {
        give_achievement("a1", ACHIEVEMENTS.a1);
    }
    if (user_data.Informations.langs_done >= 10) {
        give_achievement("a2", ACHIEVEMENTS.a2);
    }
    if (user_data.Informations.langs_done >= 25) {
        give_achievement("b1", ACHIEVEMENTS.b1);
    } 
    if (user_data.Informations.langs_done >= 50) {
        give_achievement("b2", ACHIEVEMENTS.b2);
    }
    if (user_data.Informations.langs_done >= 100) {
        give_achievement("c1", ACHIEVEMENTS.c1);
    }
    if (user_data.Informations.langs_done >= 250) {
        give_achievement("bilingue", ACHIEVEMENTS.bilingue);
    }
});

document.addEventListener("1st_place", (event) => {
    give_achievement("legende", ACHIEVEMENTS.legende);
});

document.addEventListener("podium", (event) => {
    give_achievement("champion", ACHIEVEMENTS.champion);
});

document.addEventListener("10_right_in_row", (event) => {
    give_achievement("tireur_elite", ACHIEVEMENTS.tireur_elite);
});

document.addEventListener("10_wrong_in_row", (event) => {
    give_achievement("tireur_dans_le_pied", ACHIEVEMENTS.tireur_dans_le_pied);
});

/* ----- UPDATE DE STREAK ------ */
async function update_streak_state(data) {

    console.log("===== STREAK UPDATE =====");

    let new_one = structuredClone(data.Informations);

    console.log("AVANT :", structuredClone(new_one));

    const info = structuredClone(data.Informations);

    const now = new Date();

    let streak = info.streak ?? 0;
    let skips = info.skips ?? 0;

    let lastAction = info.last_action_date
        ? new Date(info.last_action_date)
        : null;

    let lastSkipReward = info.last_skip_reward
        ? new Date(info.last_skip_reward)
        : null;

    console.log("Streak :", streak);
    console.log("Skips :", skips);

    // --- GAIN SKIPS (hebdo) ---
    if (lastSkipReward) {

        const diffWeeks = Math.floor(
            (now - lastSkipReward) / (1000 * 60 * 60 * 24 * 7)
        );

        console.log("Semaines écoulées :", diffWeeks);

        if (diffWeeks > 0) {
            skips += diffWeeks;
            lastSkipReward = now;
            console.log("Skips ajoutés :", diffWeeks);
        }

    } else {

        console.log("Init skip reward");
        lastSkipReward = now;
    }

    // --- SI JAMAIS UTILISÉ ---
    if (!lastAction) {

        console.log("Pas encore de streak active");
        console.log("Rien à update côté streak");

    } else {

        const today = new Date(now);
        today.setHours(0, 0, 0, 0);

        const last = new Date(lastAction);
        last.setHours(0, 0, 0, 0);

        const diffDays = Math.floor(
            (today - last) / (1000 * 60 * 60 * 24)
        );

        console.log("Diff jours :", diffDays);

        if (diffDays === 0) {

            console.log("OK : streak toujours valide");
            document.getElementById("link_info").innerText = "on";

        } else if (diffDays === 1) {

            console.log("OK : progression naturelle");
            document.getElementById("link_info").innerText = "off";

        } else {

            const missed = diffDays - 1;

            console.log("Jours manqués :", missed);

            if (skips >= missed) {

                skips -= missed;

                console.log("Skips utilisés :", missed);

            } else {

                console.log("Streak cassée");

                streak = 0; // ou 1 si tu préfères reset doux
            }

            const fixedDate = new Date(today);
            fixedDate.setDate(fixedDate.getDate() - 1);

            lastAction = fixedDate;

            document.getElementById("link_info").innerText = "off";
        }
    }

    // --- SAVE ---
    new_one.streak = streak;
    new_one.skips = skips;
    new_one.last_action_date = lastAction;
    new_one.last_skip_reward = lastSkipReward.toISOString();

    // IMPORTANT :
    // on ne touche PAS last_action_date ici

    console.log("FINAL :", structuredClone(new_one));


    user_data.Informations.streak = streak;

    if (streak >= 100) {
        if (!new_one.all_achievements["brasier"]) {
            new_one.achievements += 1;
            new_one.all_achievements["brasier"] = ACHIEVEMENTS.brasier;
        }
        await give_achievement("brasier", ACHIEVEMENTS.brasier);
    } else if (streak >= 50) {
        if (!new_one.all_achievements["incendie"]) {
            new_one.achievements += 1;
            new_one.all_achievements["incendie"] = ACHIEVEMENTS.incendie;
        }
        await give_achievement("incendie", ACHIEVEMENTS.incendie);
    } else if (streak >= 20) {
        if (!new_one.all_achievements["feu_de_camp"]) {
            new_one.achievements += 1;
            new_one.all_achievements["feu_de_camp"] = ACHIEVEMENTS.feu_de_camp;
        }
        await give_achievement("feu_de_camp", ACHIEVEMENTS.feu_de_camp);
    } else if (streak >= 7) {
        if (!new_one.all_achievements["briquet"]) {
            new_one.achievements += 1;
            new_one.all_achievements["briquet"] = ACHIEVEMENTS.briquet;
        }
        await give_achievement("briquet", ACHIEVEMENTS.briquet);
    }

    const { error } = await supabase
        .from("leaderboard_data")
        .update({ Informations: new_one })
        .eq("user_id", user_let.id);

    if (error) console.error(error);

    console.log("===== END UPDATE =====");
}



if (window.location.pathname.endsWith("secret.html")) {
    give_achievement("the_end", ACHIEVEMENTS.the_end);
}