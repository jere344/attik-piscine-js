/*
 * Exercise 201.2: Gestion d'erreurs avec try/catch
 * Exercice 67 / 105
 * ============================================================
 */

/*
 * Gérez les erreurs dans du code asynchrone avec try/catch.
 */

/*
 * - ✅ Utiliser try/catch avec async/await
 * - ✅ Créer des erreurs personnalisées
 * - ✅ Utiliser le bloc finally
 * - ✅ Gérer les échecs proprement
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * async function maFonction() {
 *     try {
 *         const resultat = await operationAsynchrone();
 *         console.log(resultat);
 *     } catch (erreur) {
 *         console.error('Erreur:', erreur.message);
 *     } finally {
 *         console.log('Terminé');
 *     }
 * }
 */

// ==================== SOLUTION ====================

async function diviserAsync(a, b) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (b === 0) {
                reject(new Error('Division par zéro'));
            } else {
                resolve(a / b);
            }
        }, 100);
    });
}

async function executerAvecGestionErreurs(a, b) {
    try {
        const resultat = await diviserAsync(a, b);
        return { success: true, result: resultat };
    } catch (erreur) {
        return { success: false, error: erreur.message };
    } finally {
        // Bloc finally exécuté dans tous les cas
    }
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.runAsync('Exercise 201.2: Error Handling with Try/Catch', [
        { input: [10, 2], expected: { success: true, result: 5 }, description: 'Division normale 10/2' },
        { input: [10, 0], expected: { success: false, error: 'Division par zéro' }, description: 'Division par zéro' },
        { input: [20, 4], expected: { success: true, result: 5 }, description: 'Division normale 20/4' }
    ], executerAvecGestionErreurs);
}

