/*
 * Exercise 043: Compter les voyelles
 * Exercice 15 / 61
 * ============================================================
 */

/*
 * Créez une fonction countVowels qui compte le nombre de voyelles dans une chaîne de caractères.
 * Voyelles : a, e, i, o, u (minuscules et majuscules)
 */

/*
 * - "Hello World" → 3 voyelles (e, o, o)
 * - "JavaScript" → 3 voyelles (a, a, i)
 * - "Piscine" → 4 voyelles (i, i, e)
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * countVowels("Hello World")   // 3
 * countVowels("JavaScript")    // 3
 * countVowels("Piscine")       // 4
 * countVowels("bcdfg")         // 0
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

function countVowels(str) {
    let count = 0;
    const vowels = 'aeiouAEIOU';
    for (let char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    return count;
}

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 043: Compter les voyelles', [
        { input: 'Hello World', expected: 3, description: 'Mixed case with spaces' },
        { input: 'JavaScript', expected: 3, description: 'Programming language' },
        { input: 'Piscine', expected: 3, description: 'French word' },
        { input: 'bcdfg', expected: 0, description: 'No vowels' }
    ], countVowels);
}


