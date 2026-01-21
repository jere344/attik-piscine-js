/*
 * Exercise 171: POST - Créer une ressource
 * Exercice 58 / 61
 * ============================================================
 */

/*
 * Envoyez des données au serveur avec la méthode POST.
 */

/*
 * - ✅ Utiliser method: 'POST'
 * - ✅ Définir les headers correctement
 * - ✅ Convertir les données avec JSON.stringify()
 * - ✅ Récupérer la réponse créée
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const creer = async (data) => {
 *     const response = await fetch(url, {
 *         method: 'POST',
 *         headers: {
 *             'Content-Type': 'application/json'
 *         },
 *         body: JSON.stringify(data)
 *     });
 * 
 *     return await response.json();
 * };
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

const creerRessource = async (data) => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        const nouvelleRessource = await response.json();
        console.log('Ressource créée:', nouvelleRessource);
        return nouvelleRessource;
    } catch (erreur) {
        console.error('Erreur lors de la création de la ressource:', erreur);
    }
};

const nouvelleDonnee = {
    title: 'foo',
    body: 'bar',
    userId: 1
};

creerRessource(nouvelleDonnee);

// ==================== NON_TESTABLE ====================
// This exercise requires the fetch API and network POST requests.
// Must be tested in a browser or with fetch polyfill.

module.exports.NON_TESTABLE = 'Requires fetch API and network - browser only';
