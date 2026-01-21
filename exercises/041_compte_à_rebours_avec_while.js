/*
 * Exercise 041: Compte à rebours avec while
 * Exercice 13 / 105
 * ============================================================
 */

/*
 * Affichez un compte à rebours de 10 à 0 en utilisant une boucle while.
 * Attention : N'oubliez pas de décrémenter le compteur, sinon vous créez une boucle infinie !
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * 10
 * 9
 * 8
 * 7
 * 6
 * 5
 * 4
 * 3
 * 2
 * 1
 * 0
 * Décollage !
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
let count = 10;
while (count >= 0) {
    console.log(count);
    count--;
}
console.log('Décollage !');

module.exports.NON_TESTABLE = 'Console output only, no return value';
