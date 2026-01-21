/*
 * Exercise 154: Top-level await
 * Exercice 53 / 61
 * ============================================================
 */

/*
 * Utilisez await au niveau racine d'un module (ES modules).
 */

/*
 * - ✅ Comprendre le top-level await
 * - ✅ Charger des données au démarrage du module
 * - ✅ Connaître les prérequis (ES modules)
 * - ES6 modules : <script type="module">
 * - Ou Node.js avec "type": "module" dans package.json
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Dans un fichier .js avec type="module"
 * 
 * // ✅ Top-level await (sans fonction async)
 * const response = await fetch('/api/data');
 * const data = await response.json();
 * console.log(data);
 */

// ==================== SOLUTION ====================

// NOTE: Ce code nécessite d'être exécuté en tant que module ES6
// Dans un navigateur: <script type="module" src="154_toplevel_await.js"></script>
// Dans Node.js: ajouter "type": "module" dans package.json

// Fonction simulant un fetch
function simulerFetch(url) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                json: () => Promise.resolve({ 
                    data: `Données de ${url}`,
                    timestamp: Date.now()
                })
            });
        }, 5000);
    });
}

// ✅ Top-level await (sans fonction async)
// Cela fonctionne uniquement dans un module ES6
console.log('Chargement des données au démarrage du module...');

const response = await simulerFetch('/api/data');
const data = await response.json();
console.log('Données chargées:', data);


// ==================== NON_TESTABLE ====================
// This exercise requires ES module setup (type: "module") which conflicts with CommonJS test framework.
// Please test manually by running as an ES module.

if (typeof module !== 'undefined' && module.exports) {
    module.exports.NON_TESTABLE = 'Requires ES module setup - test manually with Node.js --experimental-modules or browser';
}
