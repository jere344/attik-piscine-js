/*
 * Exercise 031: Table de multiplication
 * Exercice 9 / 61
 * ============================================================
 */

/*
 * Créez une fonction multiplicationTable qui affiche la table de multiplication d'un nombre de 1 à 10.
 * Pour chaque ligne, affichez : "n x i = résultat"
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * 7 x 1 = 7
 * 7 x 2 = 14
 * 7 x 3 = 21
 * ...
 * 7 x 10 = 70
 * ------------------------------------------------------------
 * multiplicationTable(5)  // Affiche la table de 5
 * multiplicationTable(9)  // Affiche la table de 9
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function multiplicationTable(n) {
    for (let i = 1; i <= 10; i++) {
        let result = n * i;
        console.log(`${n} x ${i} = ${result}`);
    }
}

multiplicationTable(5);
multiplicationTable(9);

// ==================== NON_TESTABLE ====================
// This exercise outputs to console only, testing would require capturing console.log

module.exports.NON_TESTABLE = 'Console output only, no return value';

