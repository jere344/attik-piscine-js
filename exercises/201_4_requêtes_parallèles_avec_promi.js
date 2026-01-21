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

// TODO: Write your solution below

// Your code here
