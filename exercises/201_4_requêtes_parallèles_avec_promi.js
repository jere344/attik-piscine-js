/*
 * Exercise 201.4: Requêtes parallèles avec Promise.all
 * Exercice 69 / 105
 * ============================================================
 */

/*
 * Exécutez plusieurs opérations en parallèle pour optimiser les performances.
 */

/*
 * - ✅ Comprendre le parallélisme
 * - ✅ Utiliser Promise.all() avec await
 * - ✅ Comparer avec l'exécution séquentielle
 * - ✅ Optimiser les performances
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Séquentiel (lent)
 * const a = await op1(); // 1s
 * const b = await op2(); // 1s
 * const c = await op3(); // 1s
 * // Total: 3s
 * 
 * // Parallèle (rapide)
 * const [a, b, c] = await Promise.all([
 *     op1(),
 *     op2(),
 *     op3()
 * ]);
 * // Total: 1s (le plus long)
 */

// ==================== SOLUTION ====================

function operation1() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Résultat 1'), 100);
    });
}

function operation2() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Résultat 2'), 150);
    });
}

function operation3() {
    return new Promise(resolve => {
        setTimeout(() => resolve('Résultat 3'), 80);
    });
}

async function executerEnParallele() {
    const [a, b, c] = await Promise.all([
        operation1(),
        operation2(),
        operation3()
    ]);
    
    return { a, b, c };
}

async function executerEnSequentiel() {
    const a = await operation1();
    const b = await operation2();
    const c = await operation3();
    
    return { a, b, c };
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.runAsync('Exercise 201.4: Parallel Promises with Promise.all', [
        { 
            input: [], 
            expected: { a: 'Résultat 1', b: 'Résultat 2', c: 'Résultat 3' }, 
            description: 'Exécution parallèle avec Promise.all' 
        }
    ], executerEnParallele);
}
