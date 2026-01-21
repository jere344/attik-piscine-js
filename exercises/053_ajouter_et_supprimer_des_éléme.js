/*
 * Exercise 053: Ajouter et supprimer des éléments
 * Exercice 18 / 61
 * ============================================================
 */

/*
 * Manipulez un tableau de langages en utilisant les méthodes push(), pop() et unshift().
 */

/*
 * - Créez un tableau avec 3 langages
 * - Affichez le tableau initial
 * - Ajoutez un langage à la fin avec push()
 * - Affichez le tableau après push()
 * - Enlevez le dernier élément avec pop()
 * - Affichez le tableau après pop()
 * - Ajoutez un langage au début avec unshift()
 * - Affichez le tableau final
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * Initial: ["JavaScript", "Python", "Java"]
 * Après push: ["JavaScript", "Python", "Java", "Go"]
 * Après pop: ["JavaScript", "Python", "Java"]
 * Après unshift: ["TypeScript", "JavaScript", "Python", "Java"]
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

let languages = ["JavaScript", "Python", "Java"];
console.log("Initial: " + JSON.stringify(languages));
languages.push("Go");
console.log("Après push: " + JSON.stringify(languages));
languages.pop();
console.log("Après pop: " + JSON.stringify(languages));
languages.unshift("TypeScript");
console.log("Après unshift: " + JSON.stringify(languages));
