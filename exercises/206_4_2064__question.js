/*
 * Exercise 206.4: 206.4 - Question
 * Exercice 92 / 105
 * ============================================================
 */

/*
 * Créer une fonction intervalLength(interval) qui calcule la longueur d'un intervalle.
 * Exemples :
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * intervalLength({start: 1, end: 5}) // 4
 * intervalLength({start: 10, end: 20}) // 10
 * intervalLength({start: -5, end: 5}) // 10
 * intervalLength({start: 0, end: 0}) // 0
 */

// ==================== SOLUTION ====================

function intervalLength(interval) {
    return interval.end - interval.start;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 206.4: Interval Length', [
        { input: {start: 1, end: 5}, expected: 4, description: 'intervalLength({1,5}) = 4' },
        { input: {start: 10, end: 20}, expected: 10, description: 'intervalLength({10,20}) = 10' },
        { input: {start: -5, end: 5}, expected: 10, description: 'intervalLength({-5,5}) = 10' },
        { input: {start: 0, end: 0}, expected: 0, description: 'intervalLength({0,0}) = 0' }
    ], intervalLength);
}
