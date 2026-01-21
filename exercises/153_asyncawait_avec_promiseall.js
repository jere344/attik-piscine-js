/*
 * Exercise 153: Async/await avec Promise.all()
 * Exercice 52 / 61
 * ============================================================
 */

/*
 * Combinez async/await avec Promise.all() pour exécuter des requêtes en parallèle.
 */

/*
 * - ✅ Comprendre la différence entre séquence et parallèle
 * - ✅ Utiliser Promise.all() avec await
 * - ✅ Optimiser les performances
 * - ✅ Gérer les erreurs avec Promise.allSettled()
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // ❌ Séquence (lent - 3s)
 * const user = await chargerUtilisateur();    // 1s
 * const posts = await chargerPosts();         // 1s  
 * const comments = await chargerComments();   // 1s
 * // Total: 3s
 * 
 * // ✅ Parallèle (rapide - 1s)
 * const [user, posts, comments] = await Promise.all([
 *     chargerUtilisateur(),
 *     chargerPosts(),
 *     chargerComments()
 * ]);
 * // Total: 1s (le temps de la plus longue)
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
