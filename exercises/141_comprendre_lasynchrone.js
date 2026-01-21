/*
 * Exercise 141: Comprendre l'asynchrone
 * Exercice 46 / 61
 * ============================================================
 */

/*
 * Observez la différence entre code synchrone et asynchrone.
 */

/*
 * - ✅ Comprendre la différence entre synchrone et asynchrone
 * - ✅ Utiliser setTimeout() pour simuler du code asynchrone
 * - ✅ Observer l'ordre d'exécution du code
 * - ✅ Comprendre l'Event Loop de JavaScript
 * - Le code synchrone s'exécute ligne par ligne, dans l'ordre
 * - Le code asynchrone ne bloque pas l'exécution
 * - setTimeout planifie une exécution future, le code continue immédiatement
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * console.log("1. Début");
 * console.log("2. Milieu");
 * console.log("3. Fin");
 * // Affiche : 1, 2, 3 dans l'ordre
 * ------------------------------------------------------------
 * console.log("1. Début");
 * 
 * setTimeout(() => {
 *     console.log("2. Milieu (après 2 secondes)");
 * }, 2000);
 * 
 * console.log("3. Fin");
 * // Affiche : 1, 3, puis 2 après 2 secondes
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
console.log("1. Début");

setTimeout(() => {
    console.log("2. Milieu (après 2 secondes)");
}, 2000);

console.log("3. Fin");

