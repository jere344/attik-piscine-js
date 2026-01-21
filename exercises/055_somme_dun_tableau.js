/*
 * Exercise 055: Somme d'un tableau
 * Exercice 21 / 61
 * ============================================================
 */

/*
 * Calculez la somme de tous les nombres contenus dans un tableau.
 * Résultat attendu : 75 (5 + 10 + 15 + 20 + 25)
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * let nombres = [5, 10, 15, 20, 25];
 * ------------------------------------------------------------
 * sommeTableau([5, 10, 15, 20, 25])  // 75
 * sommeTableau([1, 2, 3, 4, 5])      // 15
 * sommeTableau([100])                 // 100
 * sommeTableau([])                    // 0
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function sommeTableau(arr) {
    let somme = 0;
    for (let i = 0; i < arr.length; i++) {
        somme += arr[i];
    }
    return somme;
}
// Tests
console.log(sommeTableau([5, 10, 15, 20, 25]));
console.log(sommeTableau([1, 2, 3, 4, 5]));
console.log(sommeTableau([100]));
console.log(sommeTableau([]));

