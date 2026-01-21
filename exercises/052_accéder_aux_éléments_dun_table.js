/*
 * Exercise 052: Accéder aux éléments d'un tableau
 * Exercice 18 / 105
 * ============================================================
 */

/*
 * Affichez le premier, le troisième et le dernier élément du tableau de langages.
 */

/*
 * - Les indices commencent à 0 (pas à 1)
 * - Le premier élément est à l'indice 0
 * - Le dernier élément est à l'indice length - 1
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * let langages = ["JavaScript", "Python", "Java", "C++", "Ruby"];
 * ------------------------------------------------------------
 * Premier: JavaScript
 * Troisième: Java
 * Dernier: Ruby
 */

// ==================== SOLUTION ====================

// Testable function
function accederElements(tableau) {
    return {
        premier: tableau[0],
        troisieme: tableau[2],
        dernier: tableau[tableau.length - 1]
    };
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Accéder aux éléments', [
        { 
            input: [["JavaScript", "Python", "Java", "C++", "Ruby"]],
            expected: { premier: "JavaScript", troisieme: "Java", dernier: "Ruby" },
            description: '5 languages'
        },
        { 
            input: [["A", "B", "C"]],
            expected: { premier: "A", troisieme: "C", dernier: "C" },
            description: '3 elements'
        },
        { 
            input: [[1, 2, 3, 4, 5, 6, 7]],
            expected: { premier: 1, troisieme: 3, dernier: 7 },
            description: 'Number array'
        }
    ], accederElements);
}
