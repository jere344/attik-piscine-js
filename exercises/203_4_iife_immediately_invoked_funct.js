/*
 * Exercise 203.4: IIFE (Immediately Invoked Function Expression)
 * Exercice 78 / 105
 * ============================================================
 */

/*
 * Utilisez les IIFE pour créer des modules isolés.
 */

/*
 * - ✅ Comprendre les IIFE
 * - ✅ Créer un scope isolé
 * - ✅ Implémenter le pattern Module
 * - ✅ Éviter la pollution globale
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // IIFE classique
 * (function() {
 *     // Code isolé
 *     const prive = "secret";
 * })();
 * 
 * // IIFE avec return
 * const module = (function() {
 *     const prive = "secret";
 * 
 *     return {
 *         public: "visible"
 *     };
 * })();
 */

// ==================== SOLUTION ====================

const moduleCompteur = (function() {
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
        valeur: function() {
            return compteur;
        }
    };
})();

const moduleCalculatrice = (function() {
    const prive = "Module privé";

    function additionPrivee(a, b) {
        return a + b;
    }

    return {
        addition: function(a, b) {
            return additionPrivee(a, b);
        },
        multiplication: function(a, b) {
            return a * b;
        }
    };
})();

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 203.4: IIFE (Immediately Invoked Function Expression)', [
        { input: 0, expected: 1, description: 'Module compteur incrémente' },
        { input: [5, 3], expected: 8, description: 'Module calculatrice addition' },
        { input: [4, 6], expected: 24, description: 'Module calculatrice multiplication' }
    ], (...args) => {
        if (typeof args[0] === 'number' && args.length === 1) return moduleCompteur.incrementer();
        if (args.length === 2 && args[0] === 5) return moduleCalculatrice.addition(...args);
        if (args.length === 2 && args[0] === 4) return moduleCalculatrice.multiplication(...args);
    });
}
