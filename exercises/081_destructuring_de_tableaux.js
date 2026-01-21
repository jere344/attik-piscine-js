/*
 * Exercise 081: Destructuring de tableaux
 * Exercice 30 / 61
 * ============================================================
 */

/*
 * Utilisez la déstructuration pour extraire des valeurs d'un tableau de manière élégante.
 * Utiliser la syntaxe de destructuration pour extraire les valeurs en une seule ligne.
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * let couleurs = ["rouge", "vert", "bleu"];
 * let premiere = couleurs[0];
 * let deuxieme = couleurs[1];
 * let troisieme = couleurs[2];
 * ------------------------------------------------------------
 * console.log(premiere);   // "rouge"
 * console.log(deuxieme);   // "vert"
 * console.log(troisieme);  // "bleu"
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

let couleurs = ["rouge", "vert", "bleu"];
let [premiere, deuxieme, troisieme] = couleurs;
console.log(premiere);   
console.log(deuxieme);
console.log(troisieme);  

