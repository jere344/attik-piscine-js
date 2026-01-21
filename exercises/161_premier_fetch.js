/*
 * Exercise 161: Premier fetch
 * Exercice 54 / 105
 * ============================================================
 */

/*
 * Faites votre premier appel API avec fetch().
 */

/*
 * - ✅ Utiliser fetch() pour récupérer des données
 * - ✅ Parser la réponse avec .json()
 * - ✅ Vérifier response.ok
 * - ✅ Gérer les erreurs avec try/catch
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const recupererDonnees = async () => {
 *     try {
 *         const response = await fetch(url);
 * 
 *         if (!response.ok) {
 *             throw new Error(`Erreur HTTP: ${response.status}`);
 *         }
 * 
 *         const data = await response.json();
 *         console.log(data);
 * 
 *     } catch (erreur) {
 *         console.error('Erreur:', erreur);
 *     }
 * };
 * ------------------------------------------------------------
 * const URL = 'https://jsonplaceholder.typicode.com/users';
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

const recupererDonnees = async (url) => {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
    } catch (erreur) {
        console.error('Erreur:', erreur);
    }
};

const URL = 'https://jsonplaceholder.typicode.com/users';
recupererDonnees(URL);

// ==================== NON_TESTABLE ====================
// This exercise requires the fetch API and network requests.
// Must be tested in a browser or with fetch polyfill.

module.exports.NON_TESTABLE = 'Requires fetch API and network - browser only';


