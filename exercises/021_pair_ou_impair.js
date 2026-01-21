/*
 * Exercise 021: Pair ou impair
 * Exercice 5 / 61
 * ============================================================
 */

/*
 * Créez une fonction evenOrOdd qui détermine si un nombre est pair ou impair.
 * La fonction doit retourner :
 * Rappel : Un nombre est pair si le reste de sa division par 2 est égal à 0.
 */

/*
 * - La chaîne "pair" si le nombre est pair
 * - La chaîne "impair" si le nombre est impair
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * evenOrOdd(4)   // "pair"
 * evenOrOdd(7)   // "impair"
 * evenOrOdd(0)   // "pair"
 * evenOrOdd(-2)  // "pair"
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function evenOrOdd(number) {
    if (number % 2 === 0) {
        return "pair";
    } else {
        return "impair";
    }
}

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 021: Pair ou impair', [
        { input: 4, expected: 'pair', description: 'Even positive number' },
        { input: 7, expected: 'impair', description: 'Odd positive number' },
        { input: 0, expected: 'pair', description: 'Zero is even' },
        { input: -2, expected: 'pair', description: 'Even negative number' }
    ], evenOrOdd);
}
