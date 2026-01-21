/*
 * Exercise 200.4: Compter les voyelles
 * Exercice 65 / 105
 * ============================================================
 */

/*
 * Implémentez une fonction qui compte le nombre de voyelles (a, e, i, o, u) dans une chaîne, en gérant les majuscules et minuscules.
 */

/*
 * - ✅ Utiliser la méthode includes() pour vérifier la présence
 * - ✅ Parcourir une chaîne avec for...of
 * - ✅ Découvrir les approches alternatives (filter, regex, reduce)
 * - ✅ Gérer la casse (majuscules/minuscules)
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * countVowels("hello")      // 2 (e, o)
 * countVowels("JavaScript") // 3 (a, a, i)
 * countVowels("xyz")        // 0
 * countVowels("AEIOU")      // 5
 */

// ==================== SOLUTION ====================

function countVowels(str) {
    const vowels = 'aeiouAEIOU';
    let count = 0;
    
    for (const char of str) {
        if (vowels.includes(char)) {
            count++;
        }
    }
    
    return count;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 200.4: Count Vowels', [
        { input: "hello", expected: 2, description: 'countVowels("hello") = 2' },
        { input: "JavaScript", expected: 3, description: 'countVowels("JavaScript") = 3' },
        { input: "xyz", expected: 0, description: 'countVowels("xyz") = 0' },
        { input: "AEIOU", expected: 5, description: 'countVowels("AEIOU") = 5' },
        { input: "", expected: 0, description: 'countVowels("") = 0' }
    ], countVowels);
}
