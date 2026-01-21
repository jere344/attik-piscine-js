/*
 * Exercise 063: Filtrer les nombres pairs
 * Exercice 24 / 105
 * ============================================================
 */

/*
 * Créez une fonction filterEven qui retourne un nouveau tableau contenant uniquement les nombres pairs.
 * Un nombre est pair si nombre % 2 === 0
 */

/*
 * - filterEven([1, 2, 3, 4, 5, 6]) → [2, 4, 6]
 * - filterEven([1, 3, 5, 7]) → []
 * - filterEven([10, 15, 20, 25]) → [10, 20]
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * filterEven([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])  // [2, 4, 6, 8, 10]
 * filterEven([1, 3, 5, 7])                      // []
 * filterEven([2, 4, 6, 8])                      // [2, 4, 6, 8]
 * filterEven([])                                 // []
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function filterEven(arr) {
    let evenNumbers = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenNumbers.push(arr[i]);
        }
    }
    return evenNumbers;
}

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 063: Filtrer les nombres pairs', [
        { input: [[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]], expected: [2, 4, 6, 8, 10], description: 'Mixed odd and even' },
        { input: [[1, 3, 5, 7]], expected: [], description: 'All odd numbers' },
        { input: [[2, 4, 6, 8]], expected: [2, 4, 6, 8], description: 'All even numbers' },
        { input: [[]], expected: [], description: 'Empty array' }
    ], filterEven);
}

