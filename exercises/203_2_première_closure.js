/*
 * Exercise 203.2: Première closure
 * Exercice 76 / 105
 * ============================================================
 */

/*
 * Créez votre première closure pour encapsuler des données privées.
 * Une fonction qui conserve l'accès aux variables de son environnement parent, même après que la fonction parent ait terminé son exécution.
 */

/*
 * - ✅ Comprendre le concept de closure
 * - ✅ Créer des variables privées
 * - ✅ Retourner des fonctions
 * - ✅ Maintenir l'état entre appels
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * function creerCompteur() {
 *     let compteur = 0;  // Variable privée
 * 
 *     return function() {
 *         compteur++;
 *         return compteur;
 *     };
 * }
 * 
 * const counter = creerCompteur();
 * counter();  // 1
 * counter();  // 2
 */

// ==================== SOLUTION ====================

function creerCompteur() {
    let compteur = 0;

    return function() {
        compteur++;
        return compteur;
    };
}

function creerCompteurAvecReset() {
    let compteur = 0;

    return {
        incrementer: function() {
            compteur++;
            return compteur;
        },
        decrementer: function() {
            compteur--;
            return compteur;
        },
        reset: function() {
            compteur = 0;
            return compteur;
        },
        valeur: function() {
            return compteur;
        }
    };
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 203.2: First Closure - Counter Increment', [
        { input: 0, expected: 1, description: 'First call returns 1' },
        { input: 0, expected: 2, description: 'Second call returns 2' },
        { input: 0, expected: 3, description: 'Third call returns 3' }
    ], (() => {
        const counter = creerCompteur();
        return () => counter();
    })());

    test.run('Exercise 203.2: First Closure - Counter with Reset', [
        { input: 0, expected: [1, 2, 0, 1], description: 'Increment, Increment, Reset, Increment' }
    ], (() => {
        const counter = creerCompteurAvecReset();
        return () => [
            counter.incrementer(),
            counter.incrementer(),
            counter.reset(),
            counter.incrementer()
        ];
    })());
}
