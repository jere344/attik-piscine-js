/*
 * Exercise 044: Inverser une chaîne
 * Exercice 16 / 61
 * ============================================================
 */

/*
 * Créez une fonction reverseString qui inverse l'ordre des caractères d'une chaîne.
 */

/*
 * - "hello" → "olleh"
 * - "JavaScript" → "tpircSavaJ"
 * - "12345" → "54321"
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * reverseString("hello")       // "olleh"
 * reverseString("JavaScript")  // "tpircSavaJ"
 * reverseString("12345")       // "54321"
 */

// ==================== SOLUTION ====================

function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 044: Inverser une chaîne', [
        { input: 'hello', expected: 'olleh' },
        { input: 'JavaScript', expected: 'tpircSavaJ' },
        { input: '12345', expected: '54321' }
    ], reverseString);
}
