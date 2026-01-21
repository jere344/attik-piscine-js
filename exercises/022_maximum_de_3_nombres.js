/*
 * Exercise 022: Maximum de 3 nombres
 * Exercice 6 / 61
 * ============================================================
 */

/*
 * Créez une fonction max3 qui trouve le plus grand parmi trois nombres.
 * Vous devez utiliser l'opérateur logique ET (&&) pour vérifier qu'un nombre est plus grand que les deux autres.
 * Astuce : Pensez au cas où deux ou trois nombres sont égaux !
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * max3(1, 2, 3)      // 3
 * max3(10, 5, 8)     // 10
 * max3(-1, -5, -3)   // -1
 * max3(7, 7, 7)      // 7
 */

// ==================== SOLUTION ====================

function max3(a, b, c) {
    if (a >= b && a >= c) {
        return a;
    } else if (b >= a && b >= c) {
        return b;
    } else {
        return c;
    }
}

// ==================== TESTS ====================

if (typeof module !== 'undefined' && module.exports) {
    const test = require('../test-framework');
    
    test.run('Exercise 022: Maximum de 3 nombres', [
        { input: [1, 2, 3], expected: 3 },
        { input: [10, 5, 8], expected: 10 },
        { input: [-1, -5, -3], expected: -1 },
        { input: [7, 7, 7], expected: 7 }
    ], max3);
}
