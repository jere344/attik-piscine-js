/*
 * Exercise 062: Inverser un tableau
 * Exercice 23 / 61
 * ============================================================
 */

/*
 * Créez une fonction reverseArray qui inverse l'ordre des éléments d'un tableau.
 * Contrainte : Ne pas utiliser .reverse() !
 */

/*
 * - reverseArray([1, 2, 3]) → [3, 2, 1]
 * - reverseArray(["a", "b", "c"]) → ["c", "b", "a"]
 * - reverseArray([5]) → [5]
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * reverseArray([1, 2, 3, 4, 5])        // [5, 4, 3, 2, 1]
 * reverseArray(["a", "b", "c"])       // ["c", "b", "a"]
 * reverseArray([5])                     // [5]
 * reverseArray([])                      // []
 */

// ==================== SOLUTION ====================

function reverseArray(arr) {
    const reversed = [];
    for (let i = arr.length - 1; i >= 0; i--) {
        reversed.push(arr[i]);
    }
    return reversed;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 062: Inverser un tableau', [
        { input: [[1, 2, 3, 4, 5]], expected: [5, 4, 3, 2, 1] },
        { input: [["a", "b", "c"]], expected: ["c", "b", "a"] },
        { input: [[5]], expected: [5] },
        { input: [[]], expected: [] }
    ], reverseArray);
}
