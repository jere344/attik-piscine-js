/*
 * Exercise 034: FizzBuzz
 * Exercice 12 / 105
 * ============================================================
 */

/*
 * Créez une fonction qui affiche les nombres de 1 à 30 avec les règles suivantes :
 * Astuce importante : L'ordre des conditions est crucial !
 */

/*
 * - Si le nombre est divisible par 3 : affichez "Fizz"
 * - Si le nombre est divisible par 5 : affichez "Buzz"
 * - Si le nombre est divisible par 3 ET 5 : affichez "FizzBuzz"
 * - Sinon : affichez le nombre
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * 1
 * 2
 * Fizz
 * 4
 * Buzz
 * Fizz
 * 7
 * 8
 * Fizz
 * Buzz
 * 11
 * Fizz
 * 13
 * 14
 * FizzBuzz
 * ...
 */

// ==================== SOLUTION ====================

// Testable function that returns the result for a single number
function fizzBuzzValue(n) {
    if (n % 3 === 0 && n % 5 === 0) {
        return "FizzBuzz";
    } else if (n % 3 === 0) {
        return "Fizz";
    } else if (n % 5 === 0) {
        return "Buzz";
    } else {
        return n;
    }
}

function fizzBuzz() {
    for (let i = 1; i <= 30; i++) {
        console.log(fizzBuzzValue(i));
    }
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('FizzBuzz', [
        { input: 1, expected: 1, description: 'Normal number' },
        { input: 3, expected: 'Fizz', description: 'Divisible by 3' },
        { input: 5, expected: 'Buzz', description: 'Divisible by 5' },
        { input: 15, expected: 'FizzBuzz', description: 'Divisible by both 3 and 5' },
        { input: 7, expected: 7, description: 'Another normal number' },
        { input: 9, expected: 'Fizz', description: 'Another multiple of 3' },
        { input: 30, expected: 'FizzBuzz', description: 'Larger multiple of 15' }
    ], fizzBuzzValue);
}

// Test
fizzBuzz();
