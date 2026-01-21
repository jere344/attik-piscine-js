/*
 * Exercise 071: Défi : Palindrome
 * Exercice 26 / 61
 * ============================================================
 */

/*
 * Créez une fonction isPalindrome qui vérifie si un mot est un palindrome (se lit de la même manière dans les deux sens).
 * Un palindrome est un mot qui se lit identiquement de gauche à droite et de droite à gauche.
 * Astuce : Pensez à gérer les majuscules/minuscules !
 */

/*
 * - "radar" ✓
 * - "kayak" ✓
 * - "level" ✓
 * - "noon" ✓
 * - "civic" ✓
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * isPalindrome("radar")   // true
 * isPalindrome("hello")   // false
 * isPalindrome("Kayak")   // true (insensible à la casse)
 * isPalindrome("Level")   // true
 * isPalindrome("abc")     // false
 */

// ==================== SOLUTION ====================

function isPalindrome(str) {
    const lowerStr = str.toLowerCase();
    const len = lowerStr.length;
    for (let i = 0; i < len / 2; i++) {
        if (lowerStr[i] !== lowerStr[len - 1 - i]) {
             console.log("Not palindrome");
            return false;
        }
    }
    console.log("Is palindrome");
    return true;
}

isPalindrome("radar")

// TODO: Write your solution below

// Your code here

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 071: Défi - Palindrome', [
        { input: 'radar', expected: true, description: 'Simple palindrome' },
        { input: 'hello', expected: false, description: 'Not a palindrome' },
        { input: 'Kayak', expected: true, description: 'Case insensitive palindrome' },
        { input: 'Level', expected: true, description: 'Another case insensitive' },
        { input: 'abc', expected: false, description: 'Not palindrome' }
    ], isPalindrome);
}



