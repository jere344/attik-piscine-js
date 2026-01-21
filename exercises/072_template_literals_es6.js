/*
 * Exercise 072: Template literals (ES6)
 * Exercice 27 / 61
 * ============================================================
 */

/*
 * Réécrivez ces concaténations de chaînes en utilisant les template literals (backticks `).
 * Objectif : Utiliser la syntaxe moderne ${variable} avec des backticks.
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * let nom = "Marie";
 * let age = 25;
 * let ville = "Paris";
 * 
 * let phrase = "Je m'appelle " + nom + ", j'ai " + age + " ans et j'habite à " + ville + ".";
 * console.log(phrase);
 * ------------------------------------------------------------
 * Je m'appelle Marie, j'ai 25 ans et j'habite à Paris.
 */

// ==================== SOLUTION ====================

function creerPhrase(nom, age, ville) {
    // Using template literals instead of concatenation
    return `Je m'appelle ${nom}, j'ai ${age} ans et j'habite à ${ville}.`;
}

// Example usage
// Example usage (commented out)
// let nom = "Marie";
// let age = 25;
// let ville = "Paris";
// let phrase = creerPhrase(nom, age, ville);
// console.log(phrase);

// ==================== TESTS ====================

if (typeof module !== 'undefined' && module.exports) {
    const test = require('../test-framework');
    
    test.run('Exercise 072: Template literals', [
        { 
            input: ["Marie", 25, "Paris"], 
            expected: "Je m'appelle Marie, j'ai 25 ans et j'habite à Paris." 
        },
        { 
            input: ["Jean", 30, "Lyon"], 
            expected: "Je m'appelle Jean, j'ai 30 ans et j'habite à Lyon." 
        }
    ], creerPhrase);
}
