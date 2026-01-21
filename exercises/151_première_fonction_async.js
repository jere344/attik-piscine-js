/*
 * Exercise 151: Première fonction async
 * Exercice 50 / 61
 * ============================================================
 */

/*
 * Convertissez du code avec Promesses en async/await.
 */

/*
 * - ✅ Créer une fonction async
 * - ✅ Utiliser await pour attendre une Promesse
 * - ✅ Comprendre que async retourne toujours une Promesse
 * - ✅ Simplifier le code asynchrone
 * - Une fonction async retourne toujours une Promesse
 * - await attend que la Promesse se résolve
 * - Le code est plus lisible (style synchrone)
 * - await ne fonctionne QUE dans une fonction async
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // ❌ Avec Promesses (ancien style)
 * const chargerDonnees = () => {
 *     return fetch('/api/data')
 *         .then(response => response.json())
 *         .then(data => {
 *             console.log(data);
 *             return data;
 *         })
 *         .catch(erreur => console.error(erreur));
 * };
 * 
 * // ✅ Avec async/await (style moderne)
 * const chargerDonnees = async () => {
 *     try {
 *         const response = await fetch('/api/data');
 *         const data = await response.json();
 *         console.log(data);
 *         return data;
 *     } catch (erreur) {
 *         console.error(erreur);
 *     }
 * };
 */

// ==================== SOLUTION ====================

// TODO: Implement the function below

async function chargerDonnees() {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        console.log(data);
        return data;
    } catch (erreur) {
        console.error(erreur);
    }
}


chargerDonnees();

