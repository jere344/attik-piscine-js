/*
 * Exercise 144: Promise.all()
 * Exercice 49 / 61
 * ============================================================
 */

/*
 * Exécutez plusieurs promesses en parallèle et attendez qu'elles soient toutes terminées.
 */

/*
 * - ✅ Comprendre Promise.all() pour exécuter des Promesses en parallèle
 * - ✅ Récupérer tous les résultats une fois terminés
 * - ✅ Gérer le cas où une Promesse échoue
 * - ✅ Découvrir Promise.race() et Promise.allSettled()
 * - Exécuter 3 Promesses en parallèle
 * - Attendre que toutes soient terminées
 * - Récupérer les résultats dans un tableau
 * - Si une échoue, tout échoue
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * Promise.all([
 *     promesse1(),
 *     promesse2(),
 *     promesse3()
 * ])
 * .then(resultats => {
 *     // Tableau des résultats dans le même ordre
 *     const [res1, res2, res3] = resultats;
 * })
 * .catch(erreur => {
 *     // Si UNE seule promesse échoue
 * });
 */

// ==================== SOLUTION ====================

// Fonction utilitaire pour simuler des requêtes asynchrones
function chargerUtilisateur() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nom: 'Dupont' });
        }, 1000);
    });
}

function chargerPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, titre: 'Post 1' }, { id: 2, titre: 'Post 2' }]);
        }, 1500);
    });
}

function chargerComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, texte: 'Commentaire 1' }]);
        }, 800);
    });
}

function chargerAvecErreur() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Échec du chargement'));
        }, 500);
    });
}

// Exemple 1: Promise.all() - Toutes doivent réussir
async function exemplePromiseAll() {
    console.log('=== Promise.all() ===');
    try {
        const resultats = await Promise.all([
            chargerUtilisateur(),
            chargerPosts(),
            chargerComments()
        ]);
        console.log('Tous les résultats:', resultats);
    } catch (erreur) {
        console.error('Une promesse a échoué:', erreur.message);
    }
}

// Exemple 2: Promise.race() - La première qui termine
async function exemplePromiseRace() {
    console.log('\n=== Promise.race() ===');
    const premierResultat = await Promise.race([
        chargerUtilisateur(),    // 1000ms
        chargerPosts(),          // 1500ms
        chargerComments()        // 800ms - la plus rapide
    ]);
    console.log('Premier résultat:', premierResultat);
}

// Exemple 3: Promise.allSettled() - Attend toutes, même en cas d'échec
async function exemplePromiseAllSettled() {
    console.log('\n=== Promise.allSettled() ===');
    const resultats = await Promise.allSettled([
        chargerUtilisateur(),
        chargerAvecErreur(),     // Va échouer
        chargerComments()
    ]);
    
    resultats.forEach((resultat, index) => {
        if (resultat.status === 'fulfilled') {
            console.log(`Promesse ${index}: Réussie`, resultat.value);
        } else {
            console.log(`Promesse ${index}: Échouée`, resultat.reason.message);
        }
    });
}

// Exécution des exemples
if (typeof document === 'undefined' && typeof module !== 'undefined') {
    (async () => {
        await exemplePromiseAll();
        await exemplePromiseRace();
        await exemplePromiseAllSettled();
    })();
}

// ==================== NON_TESTABLE ====================
// This exercise demonstrates Promise.all(), Promise.race(), and Promise.allSettled().
// Run the file to see the examples: node 144_promiseall.js

if (typeof module !== 'undefined' && module.exports) {
    module.exports.NON_TESTABLE = 'Promise demonstration - run node 144_promiseall.js to see examples';
}
