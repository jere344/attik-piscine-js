/*
 * Exercise 024: Année bissextile
 * Exercice 8 / 61
 * ============================================================
 */

/*
 * Créez une fonction isLeapYear qui détermine si une année est bissextile.
 * Une année est bissextile si :
 * En résumé :
 */

/*
 * - Elle est divisible par 4 ET non divisible par 100
 * - OU elle est divisible par 400
 * - Tous les 4 ans → bissextile
 * - SAUF tous les 100 ans → PAS bissextile
 * - SAUF tous les 400 ans → bissextile
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * isLeapYear(2024)  // true (divisible par 4, pas par 100)
 * isLeapYear(2023)  // false (pas divisible par 4)
 * isLeapYear(2000)  // true (divisible par 400)
 * isLeapYear(1900)  // false (divisible par 100 mais pas par 400)
 */

// ==================== SOLUTION ====================

function isLeapYear(year) {
    // Divisible par 400 -> bissextile
    if (year % 400 === 0) {
        return true;
    }
    // Divisible par 100 mais pas par 400 -> pas bissextile
    if (year % 100 === 0) {
        return false;
    }
    // Divisible par 4 -> bissextile
    if (year % 4 === 0) {
        return true;
    }
    // Sinon pas bissextile
    return false;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 024: Année bissextile', [
        { input: 2024, expected: true, description: 'Divisible par 4, pas par 100' },
        { input: 2023, expected: false, description: 'Pas divisible par 4' },
        { input: 2000, expected: true, description: 'Divisible par 400' },
        { input: 1900, expected: false, description: 'Divisible par 100 mais pas 400' }
    ], isLeapYear);
}
