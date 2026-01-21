/*
 * Exercise 033: Factorielle
 * Exercice 11 / 105
 * ============================================================
 */

/*
 * Créez une fonction factorial qui calcule la factorielle d'un nombre.
 * n! = n × (n-1) × (n-2) × ... × 2 × 1
 * Par convention : 0! = 1 et 1! = 1
 */

/*
 * - factorial(5) = 5 × 4 × 3 × 2 × 1 = 120
 * - factorial(0) = 1
 * - factorial(1) = 1
 * - factorial(7) = 7 × 6 × 5 × 4 × 3 × 2 × 1 = 5040
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * factorial(5)   // 120
 * factorial(0)   // 1
 * factorial(7)   // 5040
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}

console.log(factorial(5));
console.log(factorial(0));
console.log(factorial(7));

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 033: Factorielle', [
        { input: 5, expected: 120, description: '5! = 120' },
        { input: 0, expected: 1, description: '0! = 1' },
        { input: 1, expected: 1, description: '1! = 1' },
        { input: 7, expected: 5040, description: '7! = 5040' }
    ], factorial);
}
