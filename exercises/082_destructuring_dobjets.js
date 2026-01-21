/*
 * Exercise 082: Destructuring d'objets
 * Exercice 31 / 61
 * ============================================================
 */

/*
 * Utilisez la déstructuration pour extraire des propriétés d'un objet.
 * Utiliser la syntaxe de destructuration pour extraire les propriétés en une seule ligne.
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * let personne = {
 *     nom: "Dupont",
 *     prenom: "Marie",
 *     age: 28,
 *     ville: "Paris"
 * };
 * 
 * let nom = personne.nom;
 * let prenom = personne.prenom;
 * let age = personne.age;
 * let ville = personne.ville;
 * ------------------------------------------------------------
 * console.log(nom);     // "Dupont"
 * console.log(prenom);  // "Marie"
 * console.log(age);     // 28
 * console.log(ville);   // "Paris"
 */

// ==================== SOLUTION ====================

function extraireProprietesPersonne(personne) {
    const { nom, prenom, age, ville } = personne;
    return { nom, prenom, age, ville };
}

let personne = {
    nom: "Dupont",
    prenom: "Marie",
    age: 28,
    ville: "Paris"
};

const { nom, prenom, age, ville } = personne;

// Example usage (commented out)
// console.log(nom);     // "Dupont"
// console.log(prenom);  // "Marie"
// console.log(age);     // 28
// console.log(ville);   // "Paris"

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 082: Destructuring d\'objets', [
        { 
            input: [{ nom: "Dupont", prenom: "Marie", age: 28, ville: "Paris" }], 
            expected: { nom: "Dupont", prenom: "Marie", age: 28, ville: "Paris" } 
        },
        { 
            input: [{ nom: "Martin", prenom: "Jean", age: 35, ville: "Lyon" }], 
            expected: { nom: "Martin", prenom: "Jean", age: 35, ville: "Lyon" } 
        }
    ], extraireProprietesPersonne);
}
