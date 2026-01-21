/*
 * Exercise 206.2: 206.2 - Question
 * Exercice 90 / 105
 * ============================================================
 */

/*
 * Créer une fonction mergeIntervals(interval1, interval2) qui fusionne deux intervalles et retourne le nouvel intervalle englobant.
 * Exemples :
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * mergeIntervals({start: 1, end: 5}, {start: 3, end: 8}) // { start: 1, end: 8 }
 * mergeIntervals({start: 10, end: 15}, {start: 5, end: 12}) // { start: 5, end: 15 }
 * mergeIntervals({start: 0, end: 3}, {start: 7, end: 10}) // { start: 0, end: 10 }
 */

// ==================== SOLUTION ====================

function mergeIntervals(interval1, interval2) {
    return {
        start: Math.min(interval1.start, interval2.start),
        end: Math.max(interval1.end, interval2.end)
    };
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 206.2: Merge Intervals', [
        { input: [{start: 1, end: 5}, {start: 3, end: 8}], expected: {start: 1, end: 8}, description: 'mergeIntervals({1,5}, {3,8})' },
        { input: [{start: 10, end: 15}, {start: 5, end: 12}], expected: {start: 5, end: 15}, description: 'mergeIntervals({10,15}, {5,12})' },
        { input: [{start: 0, end: 3}, {start: 7, end: 10}], expected: {start: 0, end: 10}, description: 'mergeIntervals({0,3}, {7,10})' }
    ], mergeIntervals);
}
