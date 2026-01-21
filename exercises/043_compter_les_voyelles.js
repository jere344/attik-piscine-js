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

// Tests
console.log(countVowels("Hello World"));   // 3
console.log(countVowels("JavaScript"));    // 3
console.log(countVowels("Piscine"));       // 4
console.log(countVowels("bcdfg"));         // 0


