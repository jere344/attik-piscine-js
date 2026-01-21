/*
 * Exercise 205.2: Validation de données
 * Exercice 86 / 105
 * ============================================================
 */

/*
 * Créez des validateurs pour différents types de données en utilisant des expressions régulières.
 * Créez des fonctions de validation pour :
 * Retourne true si l'email est valide.
 * Accepte les formats : 0123456789, 01 23 45 67 89, 01.23.45.67.89, +33123456789
 * Vérifie que le code postal est composé de 5 chiffres.
 * Vérifie :
 * Retourne un objet avec { valide: boolean, details: {...} }
 * Vérifie que l'URL commence par http:// ou https://
 * Accepte #RGB (3 caractères) ou #RRGGBB (6 caractères).
 */

/*
 * - Adresses email (format standard)
 * - Téléphones français (différents formats)
 * - Codes postaux français (5 chiffres)
 * - Mots de passe forts (avec règles de sécurité)
 * - URLs (http/https)
 * - Couleurs hexadécimales (#RGB ou #RRGGBB)
 * - Au moins 8 caractères
 * - Au moins 1 majuscule
 * - Au moins 1 minuscule
 * - Au moins 1 chiffre
 * - Au moins 1 caractère spécial
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Email
 * validerEmail('test@example.com')     // true
 * validerEmail('invalide')             // false
 * validerEmail('test @example.com')    // false
 * 
 * // Téléphone
 * validerTelephoneFR('0123456789')     // true
 * validerTelephoneFR('01 23 45 67 89') // true
 * validerTelephoneFR('+33123456789')   // true
 * validerTelephoneFR('123456')         // false
 * 
 * // Code postal
 * validerCodePostal('75001')  // true
 * validerCodePostal('1234')   // false
 * 
 * // Mot de passe
 * validerMotDePasse('Abc123!@')
 * // { valide: true, details: { longueur: true, majuscule: true, ... } }
 * 
 * validerMotDePasse('faible')
 * // { valide: false, details: { longueur: false, majuscule: false, ... } }
 * 
 * // URL
 * validerURL('https://example.com')        // true
 * validerURL('http://sub.example.com/path') // true
 * validerURL('invalide')                   // false
 * 
 * // Couleur hexadécimale
 * validerCouleurHex('#FF5733')  // true
 * validerCouleurHex('#F57')     // true
 * validerCouleurHex('FF5733')   // false (manque #)
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
