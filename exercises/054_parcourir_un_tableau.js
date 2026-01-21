/*
 * Exercise 054: Parcourir un tableau
 * Exercice 20 / 105
 * ============================================================
 */

/*
 * Affichez chaque langage du tableau avec sa position (numérotée à partir de 1).
 * Pour chaque élément, affichez : "numéro. langage"
 * Astuce : Utilisez i + 1 pour afficher la numérotation à partir de 1.
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
 * ------------------------------------------------------------
 * 1. JavaScript
 * 2. Python
 * 3. Java
 * 4. C++
 * 5. Ruby
 */

// ==================== SOLUTION ====================

// Testable function
function parcourirTableau(tableau) {
    const result = [];
    for (let i = 0; i < tableau.length; i++) {
        result.push(`${i + 1}. ${tableau[i]}`);
    }
    return result;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Parcourir un tableau', [
        { 
            input: [["JavaScript", "Python", "Java", "C++", "Ruby"]],
            expected: ["1. JavaScript", "2. Python", "3. Java", "4. C++", "5. Ruby"],
            description: '5 languages'
        },
        { 
            input: [["A", "B"]],
            expected: ["1. A", "2. B"],
            description: '2 elements'
        },
        { 
            input: [["X"]],
            expected: ["1. X"],
            description: 'Single element'
        }
    ], parcourirTableau);
}
