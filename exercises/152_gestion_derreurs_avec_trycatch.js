/*
 * Exercise 152: Gestion d'erreurs avec try/catch
 * Exercice 51 / 61
 * ============================================================
 */

/*
 * Gérez correctement les erreurs dans du code asynchrone.
 */

/*
 * - ✅ Utiliser try/catch pour gérer les erreurs
 * - ✅ Utiliser finally pour le nettoyage
 * - ✅ Lancer des erreurs avec throw
 * - ✅ Distinguer différents types d'erreurs
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const maFonction = async () => {
 *     try {
 *         // Code qui peut échouer
 *         const resultat = await operationAsynchrone();
 *         return resultat;
 *     } catch (erreur) {
 *         // Gérer l'erreur
 *         console.error('Erreur:', erreur);
 *     } finally {
 *         // Toujours exécuté (nettoyage)
 *         console.log('Terminé');
 *     }
 * };
 */

// ==================== SOLUTION ====================

// Fonction simulant une opération asynchrone qui peut échouer
function operationRisquee(success = true) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (success) {
                resolve('Opération réussie !');
            } else {
                reject(new Error('Opération échouée'));
            }
        }, 1000);
    });
}

// Fonction avec gestion d'erreurs complète
async function executerOperation(shouldSucceed) {
    try {
        // Code qui peut échouer
        const resultat = await operationRisquee(shouldSucceed);
        return resultat;
        
    } catch (erreur) {
        // Gérer l'erreur
        return { error: erreur.message };
    } finally {
        // Toujours exécuté (nettoyage)
    }
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.runAsync('Exercise 152: Gestion d\'erreurs', [
        {
            input: true,
            expected: 'Opération réussie !',
            description: 'Success case'
        },
        {
            input: false,
            expected: { error: 'Opération échouée' },
            description: 'Error case'
        }
    ], async (shouldSucceed) => {
        return await executerOperation(shouldSucceed);
    });
}

