/*
 * Exercise 163: Gestion des erreurs réseau
 * Exercice 56 / 61
 * ============================================================
 */

/*
 * Gérez proprement les différentes erreurs possibles.
 */

/*
 * - ✅ Distinguer erreur réseau vs erreur HTTP
 * - ✅ Implémenter un timeout
 * - ✅ Système de retry intelligent
 * - ✅ Messages d'erreur clairs pour l'utilisateur
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Erreur réseau (pas de connexion)
 * catch (erreur) {
 *     if (erreur.name === 'TypeError') {
 *         console.log('Pas de connexion');
 *     }
 * }
 * 
 * // Erreur HTTP (404, 500...)
 * if (!response.ok) {
 *     throw new Error(`HTTP ${response.status}`);
 * }
 * 
 * // Timeout
 * if (erreur.name === 'AbortError') {
 *     console.log('Requête trop longue');
 * }
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

const recupererDonnees = async (url, retries = 3, timeout = 5000) => {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, { signal: controller.signal });
        clearTimeout(id);
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const data = await response.json();
        console.log(data);
        return data;
    } catch (erreur) {
        if (erreur.name === 'AbortError') {
            console.error('Erreur: Requête trop longue (timeout)');
        } else if (erreur.name === 'TypeError') {
            console.error('Erreur: Pas de connexion réseau');
        }
        else {
            console.error('Erreur:', erreur);
        }
        if (retries > 0) {
            console.log(`Nouvelle tentative... (${retries} restants)`);
            return recupererDonnees(url, retries - 1, timeout);
        }
    }
};

const URL = 'https://jsonplaceholder.typicode.com/users';
recupererDonnees(URL);

// ==================== NON_TESTABLE ====================
// This exercise requires the fetch API, network requests, and error handling.
// Must be tested in a browser or with fetch polyfill.

module.exports.NON_TESTABLE = 'Requires fetch API and network - browser only';
