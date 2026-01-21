/*
 * Exercise 042: Trouver un nombre
 * Exercice 14 / 105
 * ============================================================
 */

/*
 * Simulez un jeu où un programme cherche un nombre secret en incrémentant une tentative jusqu'à le trouver.
 */

/*
 * - Définissez un nombre secret (par exemple 42)
 * - Utilisez une boucle while pour compter les tentatives
 * - Le programme "devine" en incrémentant de 1 à chaque essai
 * - Affichez le nombre d'essais nécessaires pour trouver le nombre
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * Essai 1 : 1
 * Essai 2 : 2
 * Essai 3 : 3
 * ...
 * Essai 42 : 42
 * Trouvé en 42 essais !
 */

// ==================== SOLUTION ====================

// Testable function that returns the number of attempts
function trouverNombre(secret) {
    let tentative = 1;
    let essai = 1;
    
    while (essai !== secret) {
        essai++;
        tentative++;
    }
    
    return tentative;
}

// Original code
const nombreSecret = 42;
let tentative = 1;
let essai = 1;

while (essai !== nombreSecret) {
    essai++;
    tentative++;
}
console.log(`Trouvé en ${tentative} essais !`);

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Trouver un nombre', [
        { input: 1, expected: 1, description: 'Secret is 1' },
        { input: 10, expected: 10, description: 'Secret is 10' },
        { input: 42, expected: 42, description: 'Secret is 42' },
        { input: 100, expected: 100, description: 'Secret is 100' }
    ], trouverNombre);
}
