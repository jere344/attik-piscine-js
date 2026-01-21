/*
 * Exercise 061: Trouver le maximum
 * Exercice 22 / 61
 * ============================================================
 */

/*
 * Créez une fonction findMax qui trouve et retourne le plus grand nombre dans un tableau.
 * Contrainte : Ne pas utiliser Math.max() !
 */

/*
 * - findMax([3, 45, 12, 78, 23, 9]) → 78
 * - findMax([1, 2, 3, 4, 5]) → 5
 * - findMax([-5, -2, -10, -1]) → -1
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * findMax([3, 45, 12, 78, 23, 9])  // 78
 * findMax([1, 2, 3, 4, 5])         // 5
 * findMax([-5, -2, -10, -1])       // -1
 * findMax([100])                    // 100
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function findMax(arr) {
    if (arr.length === 0) {
        return null; 
    }
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
// Tests
console.log(findMax([3, 45, 12, 78, 23, 9]));
console.log(findMax([1, 2, 3, 4, 5]));
console.log(findMax([-5, -2, -10, -1]));
console.log(findMax([100]));

