/*
 * Exercise 173: DELETE - Supprimer une ressource
 * Exercice 60 / 61
 * ============================================================
 */

/*
 * Supprimez une ressource du serveur.
 */

/*
 * - ✅ Utiliser method: 'DELETE'
 * - ✅ Demander confirmation avant suppression
 * - ✅ Mettre à jour l'interface après suppression
 * - ✅ Gérer les échecs de suppression
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const supprimer = async (id) => {
 *     const response = await fetch(`/api/resource/${id}`, {
 *         method: 'DELETE'
 *     });
 * 
 *     return response.ok;
 * };
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

const supprimerRessource = async (id) => {
    const confirmation = confirm('Êtes-vous sûr de vouloir supprimer cette ressource ?');
    if (!confirmation) {
        return;
    }
    try {
        const response = await fetch(`/api/ressource/${id}`, {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Ressource supprimée avec succès');
            // Mettre à jour l'interface utilisateur ici
        } else {
            console.error('Échec de la suppression de la ressource');
        }
    } catch (erreur) {
        console.error('Erreur lors de la suppression:', erreur);
    }
};

supprimerRessource(123);

// ==================== NON_TESTABLE ====================
// This exercise requires the fetch API, network DELETE requests, and browser confirm().
// Must be tested in a browser.

module.exports.NON_TESTABLE = 'Requires fetch API, network, and browser confirm() - browser only';

