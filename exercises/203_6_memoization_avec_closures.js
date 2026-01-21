/*
 * Exercise 203.6: Memoization avec closures
 * Exercice 80 / 105
 * ============================================================
 */

/*
 * Optimisez les calculs coûteux avec la memoization.
 * Technique d'optimisation qui met en cache les résultats de fonctions coûteuses.
 */

/*
 * - ✅ Comprendre la memoization
 * - ✅ Implémenter un cache avec closure
 * - ✅ Optimiser les performances
 * - ✅ Variante avec expiration
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * function memoize(fn) {
 *     const cache = {};
 * 
 *     return function(...args) {
 *         const key = JSON.stringify(args);
 * 
 *         if (cache[key]) {
 *             return cache[key];  // Cache!
 *         }
 * 
 *         const result = fn(...args);
 *         cache[key] = result;
 *         return result;
 *     };
 * }
 */

// ==================== SOLUTION ====================

function memoize(fn) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key] !== undefined) {
            console.log('From cache for args:', args);
            return cache[key];
        }

        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fibonacciMemoized = memoize(fibonacci);

function factorielle(n) {
    if (n <= 1) return 1;
    return n * factorielle(n - 1);
}

const factorielleMemoized = memoize(factorielle);

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    const addition = (a, b) => a + b;
    const additionMemoized = memoize(addition);
    
    test.run('Exercise 203.6: Memoization with Closures', [
        { input: [5, 3], expected: 8, description: 'Memoized addition(5, 3) = 8' },
        { input: [5, 3], expected: 8, description: 'Memoized addition(5, 3) from cache' },
        { input: [10, 20], expected: 30, description: 'Memoized addition(10, 20) = 30' }
    ], additionMemoized);
}
