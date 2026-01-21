/*
 * Exercise 074: Arrow functions avec méthodes de tableau
 * Exercice 29 / 105
 * ============================================================
 */

/*
 * Convertissez ces utilisations de fonctions classiques en arrow functions avec les méthodes de tableau.
 */

/*
 * - ✅ Remplacer les fonctions anonymes par des arrow functions
 * - ✅ Utiliser la syntaxe courte quand possible
 * - ✅ Comprendre le chaînage de méthodes
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
 * 
 * // Avec des fonctions classiques
 * let pairs = nombres.filter(function(n) {
 *     return n % 2 === 0;
 * });
 * 
 * let doubles = nombres.map(function(n) {
 *     return n * 2;
 * });
 * ------------------------------------------------------------
 * pairs   // [2, 4, 6, 8, 10]
 * doubles // [2, 4, 6, 8, 10, 12, 14, 16, 18, 20]
 */

// ==================== SOLUTION ====================

function filterEven(nombres) {
    return nombres.filter(n => n % 2 === 0);
}

function doubleValues(nombres) {
    return nombres.map(n => n * 2);
}

// Example usage (commented out)
// let nombres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let pairs = filterEven(nombres);
// let doubles = doubleValues(nombres);
// console.log("Pairs:", pairs);
// console.log("Doubles:", doubles);

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 074: Arrow functions - filter even', [
        { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: [2, 4, 6, 8, 10] },
        { input: [[1, 3, 5]], expected: [] },
        { input: [[2, 4, 6]], expected: [2, 4, 6] }
    ], filterEven);
    
    test.run('Exercise 074: Arrow functions - double values', [
        { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20] },
        { input: [[5, 10]], expected: [10, 20] }
    ], doubleValues);
}
