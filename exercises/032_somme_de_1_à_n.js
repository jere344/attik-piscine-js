/*
 * Exercise 032: Somme de 1 à N
 * Exercice 10 / 105
 * ============================================================
 */

/*
 * Créez une fonction sumUpTo qui calcule la somme de tous les nombres entiers de 1 à n.
 * somme(n) = 1 + 2 + 3 + ... + n
 */

/*
 * - sumUpTo(5) = 1 + 2 + 3 + 4 + 5 = 15
 * - sumUpTo(10) = 1 + 2 + 3 + ... + 10 = 55
 * - sumUpTo(100) = 1 + 2 + 3 + ... + 100 = 5050
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * sumUpTo(5)    // 15
 * sumUpTo(10)   // 55
 * sumUpTo(100)  // 5050
 */

// ==================== SOLUTION ====================

function sumUpTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    return sum;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 032: Somme de 1 à N', [
        { input: 5, expected: 15, description: '1+2+3+4+5 = 15' },
        { input: 10, expected: 55, description: '1+2+...+10 = 55' },
        { input: 100, expected: 5050, description: '1+2+...+100 = 5050' }
    ], sumUpTo);
}

// Tests
console.log(sumUpTo(5));    // 15
console.log(sumUpTo(10));   // 55
console.log(sumUpTo(100));  // 5050
