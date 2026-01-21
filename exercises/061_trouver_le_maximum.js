/*
 * Exercise 061: Trouver le maximum
 * Exercice 22 / 105
 * ============================================================
 */

/*
 * Créez une fonction findMax qui trouve et retourne le plus grand nombre dans un tableau.
 * Contrainte : Ne pas utiliser Math.max() !
 */

/*
 * - findMax([3, 45, 12, 78, 23, 9]) → 78
 * - findMax([1, 2, 3, 4, 5]) → 5
 * - findMax([-5, -2, -10, -1]) → -1
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * findMax([3, 45, 12, 78, 23, 9])  // 78
 * findMax([1, 2, 3, 4, 5])         // 5
 * findMax([-5, -2, -10, -1])       // -1
 * findMax([100])                    // 100
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 061: Trouver le maximum', [
        { input: [[3, 45, 12, 78, 23, 9]], expected: 78, description: 'Mixed numbers' },
        { input: [[1, 2, 3, 4, 5]], expected: 5, description: 'Sequential numbers' },
        { input: [[-5, -2, -10, -1]], expected: -1, description: 'All negative' },
        { input: [[100]], expected: 100, description: 'Single element' }
    ], findMax);
}

