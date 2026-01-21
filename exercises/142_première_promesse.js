/*
 * Exercise 142: Première Promesse
 * Exercice 47 / 61
 * ============================================================
 */

/*
 * Créez une fonction qui retourne une Promesse qui se résout après un délai.
 */

/*
 * - ✅ Créer une Promesse avec new Promise()
 * - ✅ Utiliser resolve() pour indiquer le succès
 * - ✅ Utiliser reject() pour indiquer une erreur
 * - ✅ Consommer la Promesse avec .then() et .catch()
 * - Créer une fonction attendreDelai(ms) qui retourne une Promesse
 * - La Promesse se résout après ms millisecondes
 * - Utiliser .then() pour afficher un message de succès
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const maPromesse = new Promise((resolve, reject) => {
 *     // Opération asynchrone
 *     if ( succès ) {
 *         resolve(resultat);
 *     } else {
 *         reject(erreur);
 *     }
 * });
 * 
 * maPromesse
 *     .then(resultat => console.log(resultat))
 *     .catch(erreur => console.error(erreur));
 */

// ==================== SOLUTION ====================

// Fonction qui retourne une promesse qui se résout après un délai
function attendreDelai(ms) {
    return new Promise((resolve, reject) => {
        if (ms < 0) {
            reject('Le délai doit être positif');
        } else {
            setTimeout(() => {
                resolve(`Attente de ${ms}ms terminée !`);
            }, ms);
        }
    });
}

// Exemple d'utilisation avec .then() et .catch()
if (typeof document === 'undefined' && typeof process !== 'undefined') {
    console.log('Démonstration de Promise avec .then() et .catch():\n');
    
    attendreDelai(100)
        .then(resultat => {
            console.log('✅', resultat);
            return attendreDelai(100);
        })
        .then(resultat => {
            console.log('✅', resultat);
        })
        .catch(erreur => {
            console.error('❌ Erreur:', erreur);
        });
    
    // Test avec erreur
    attendreDelai(-50)
        .then(resultat => {
            console.log('✅', resultat);
        })
        .catch(erreur => {
            console.error('❌ Erreur capturée:', erreur);
        });
}

// ==================== TESTS ====================

if (typeof module !== 'undefined' && module.exports) {
    const test = require('../test-framework');
    
    test.runAsync('Exercise 142: Première Promesse', [
        {
            input: 10,
            expected: 'Attente de 10ms terminée !',
            description: 'Short delay'
        },
        {
            input: 50,
            expected: 'Attente de 50ms terminée !',
            description: 'Medium delay'
        },
        {
            input: -1,
            expected: { error: true, message: 'Le délai doit être positif' },
            description: 'Negative delay should reject'
        }
    ], async (ms) => {
        try {
            return await attendreDelai(ms);
        } catch (error) {
            return { error: true, message: error };
        }
    });
}
