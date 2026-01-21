/*
 * Exercise 153: Async/await avec Promise.all()
 * Exercice 52 / 105
 * ============================================================
 */

/*
 * Combinez async/await avec Promise.all() pour exécuter des requêtes en parallèle.
 */

/*
 * - ✅ Comprendre la différence entre séquence et parallèle
 * - ✅ Utiliser Promise.all() avec await
 * - ✅ Optimiser les performances
 * - ✅ Gérer les erreurs avec Promise.allSettled()
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // ❌ Séquence (lent - 3s)
 * const user = await chargerUtilisateur();    // 1s
 * const posts = await chargerPosts();         // 1s  
 * const comments = await chargerComments();   // 1s
 * // Total: 3s
 * 
 * // ✅ Parallèle (rapide - 1s)
 * const [user, posts, comments] = await Promise.all([
 *     chargerUtilisateur(),
 *     chargerPosts(),
 *     chargerComments()
 * ]);
 * // Total: 1s (le temps de la plus longue)
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

async function chargerUtilisateur() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({ id: 1, nom: 'Alice' });
        }, 1000);
    });
}

async function chargerPosts() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, titre: 'Post 1' }, { id: 2, titre: 'Post 2' }]);
        }, 1000);
    });
}

async function chargerComments() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([{ id: 1, contenu: 'Commentaire 1' }, { id: 2, contenu: 'Commentaire 2' }]);
        }, 1000);
    });
}

async function chargerDonneesEnParallele() {
    try {
        const [user, posts, comments] = await Promise.all([
            chargerUtilisateur(),
            chargerPosts(),
            chargerComments()
        ]);
        console.log('Utilisateur:', user);
        console.log('Posts:', posts);
        console.log('Commentaires:', comments);
    } catch (erreur) {
        console.error('Erreur lors du chargement des données:', erreur);
    }
}

chargerDonneesEnParallele();

// ==================== NON_TESTABLE ====================
// This exercise demonstrates async/await with Promise.all() and timeouts.
// Testing requires waiting for async operations.

module.exports.NON_TESTABLE = 'Demonstrates async/await with Promise.all() and timeouts';
