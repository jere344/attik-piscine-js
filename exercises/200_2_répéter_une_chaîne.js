/*
 * Exercise 200.2: Répéter une chaîne
 * Exercice 63 / 105
 * ============================================================
 */

/*
 * Implémentez une fonction qui répète une chaîne de caractères un nombre donné de fois.
 */

/*
 * - ✅ Utiliser la méthode native repeat()
 * - ✅ Comprendre les boucles pour la répétition
 * - ✅ Découvrir les approches alternatives (Array.from, récursivité)
 * - ✅ Maîtriser la manipulation de chaînes
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * repeatString("ha", 3)   // "hahaha"
 * repeatString("Go ", 2)  // "Go Go "
 * repeatString("?", 5)    // "?????"
 */

// ==================== SOLUTION ====================

function repeatString(str, times) {
    return str.repeat(times);
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 200.2: Repeat String', [
        { input: ["ha", 3], expected: "hahaha", description: 'repeatString("ha", 3) = "hahaha"' },
        { input: ["Go ", 2], expected: "Go Go ", description: 'repeatString("Go ", 2) = "Go Go "' },
        { input: ["?", 5], expected: "?????", description: 'repeatString("?", 5) = "?????"' },
        { input: ["abc", 0], expected: "", description: 'repeatString("abc", 0) = ""' },
        { input: ["", 10], expected: "", description: 'repeatString("", 10) = ""' }
    ], repeatString);
}
