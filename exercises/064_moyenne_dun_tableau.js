/*
 * Exercise 064: Moyenne d'un tableau
 * Exercice 25 / 61
 * ============================================================
 */

/*
 * Créez une fonction calculateAverage qui calcule la moyenne des nombres d'un tableau.
 * Moyenne = Somme des éléments / Nombre d'éléments
 */

/*
 * - calculateAverage([10, 20, 30]) → 20
 * - calculateAverage([12, 15, 18, 14, 16]) → 15
 * - calculateAverage([5, 5, 5, 5]) → 5
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * calculateAverage([10, 20, 30])              // 20
 * calculateAverage([12, 15, 18, 14, 16])      // 15
 * calculateAverage([5, 5, 5, 5])              // 5
 * calculateAverage([100])                      // 100
 */

// ==================== SOLUTION ====================

function calculateAverage(arr) {
    if (arr.length === 0) {
        return 0;
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 064: Moyenne d\'un tableau', [
        { input: [[10, 20, 30]], expected: 20 },
        { input: [[12, 15, 18, 14, 16]], expected: 15 },
        { input: [[5, 5, 5, 5]], expected: 5 },
        { input: [[100]], expected: 100 }
    ], calculateAverage);
}
