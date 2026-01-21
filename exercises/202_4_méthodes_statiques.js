/*
 * Exercise 202.4: Méthodes statiques
 * Exercice 74 / 105
 * ============================================================
 */

/*
 * Créez des méthodes qui appartiennent à la classe, pas aux instances.
 */

/*
 * - ✅ Utiliser le mot-clé static
 * - ✅ Créer des méthodes de classe
 * - ✅ Appeler sans créer d'instance
 * - ✅ Créer des utilitaires
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * class Calculatrice {
 *     static addition(a, b) {
 *         return a + b;
 *     }
 * 
 *     static multiplication(a, b) {
 *         return a * b;
 *     }
 * }
 * 
 * // Appel direct sur la classe
 * Calculatrice.addition(5, 3);  // 8
 */

// ==================== SOLUTION ====================

class Calculatrice {
    static addition(a, b) {
        return a + b;
    }

    static soustraction(a, b) {
        return a - b;
    }

    static multiplication(a, b) {
        return a * b;
    }

    static division(a, b) {
        if (b === 0) {
            throw new Error('Division par zéro');
        }
        return a / b;
    }

    static puissance(a, b) {
        return Math.pow(a, b);
    }
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    // });
    test.run('Exercise 202.4: Static Methods addition', [
        { input: [5, 3], expected: 8, description: 'Calculatrice.addition(5, 3) = 8' }
    ], (a, b) => Calculatrice.addition(a, b));

    test.run('Exercise 202.4: Static Methods soustraction', [
        { input: [10, 4], expected: 6, description: 'Calculatrice.soustraction(10, 4) = 6' }
    ], (a, b) => Calculatrice.soustraction(a, b));

    test.run('Exercise 202.4: Static Methods multiplication', [
        { input: [6, 7], expected: 42, description: 'Calculatrice.multiplication(6, 7) = 42' }
    ], (a, b) => Calculatrice.multiplication(a, b));
}
