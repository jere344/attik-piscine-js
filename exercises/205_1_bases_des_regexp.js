/*
 * Exercise 205.1: Bases des RegExp
 * Exercice 85 / 105
 * ============================================================
 */

/*
 * Créez des expressions régulières pour rechercher, tester et extraire des motifs dans du texte.
 * Démontrez l'utilisation des expressions régulières pour :
 * Retourne true si le motif existe dans le texte (insensible à la casse).
 * Extrait tous les mots commençant par un préfixe donné (ex: tous les mots en "ch").
 * Remplace toutes les occurrences d'un motif par un nouveau texte.
 * Divise une chaîne de nombres séparés par des virgules (avec espaces variables) en tableau.
 */

/*
 * - Créer des RegExp avec les deux syntaxes (littéral et constructeur)
 * - Tester la présence d'un motif avec .test()
 * - Extraire des correspondances avec .match() et .exec()
 * - Remplacer du texte avec .replace()
 * - Diviser une chaîne avec .split()
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Test de motif
 * testMotif("Hello World", "hello")  // true (insensible à la casse)
 * testMotif("Bonjour", "hello")      // false
 * 
 * // Extraction
 * extraireMots("Les chats et les chiens jouent", "ch")  // ["chats", "chiens"]
 * extraireMots("Le soleil brille", "br")                // ["brille"]
 * 
 * // Remplacement
 * remplacerMotif("Les pommes et les pommes", "pommes", "oranges")
 * // "Les oranges et les oranges"
 * 
 * // Division
 * diviserProprement("1, 2,  3,4,   5")  // ["1", "2", "3", "4", "5"]
 * 
 * // Métacaractères de base
 * const regex1 = /h.t/;        // . = n'importe quel caractère (hat, hit, hot)
 * const regex2 = /^Hello/;     // ^ = début de chaîne
 * const regex3 = /world$/;     // $ = fin de chaîne
 * const regex4 = /bo*k/;       // * = 0 ou plus (bk, bok, book)
 * const regex5 = /bo+k/;       // + = 1 ou plus (bok, book)
 * const regex6 = /colou?r/;    // ? = 0 ou 1 (color, colour)
 * const regex7 = /\d+/;        // \d = chiffre
 * const regex8 = /\w+/;        // \w = mot (lettre, chiffre, _)
 * const regex9 = /\s/;         // \s = espace blanc
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
