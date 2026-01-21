/*
 * Exercise 203.1: Comprendre le scope
 * Exercice 75 / 105
 * ============================================================
 */

/*
 * Analysez et comprenez la portée des variables en JavaScript.
 * var : Scope de fonction + hoisting let : Scope de bloc const : Scope de bloc + immutable
 */

/*
 * - ✅ Comprendre le scope global vs local
 * - ✅ Différencier var, let et const
 * - ✅ Comprendre le hoisting
 * - ✅ Maîtriser le scope de bloc
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Avec var
 * for (var i = 0; i < 3; i++) {
 *     setTimeout(() => console.log(i), 100);
 * }
 * // Affiche: 3, 3, 3
 * 
 * // Avec let
 * for (let j = 0; j < 3; j++) {
 *     setTimeout(() => console.log(j), 100);
 * }
 * // Affiche: 0, 1, 2
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
