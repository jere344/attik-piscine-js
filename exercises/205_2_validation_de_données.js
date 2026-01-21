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

function validerEmail(email) {
    // NE JAMAIS UTILISER UN REGEX POUR LES MAIL COMPLETS EN PRODUCTION

    // voir ex http://ex-parrot.com/%7Epdw/Mail-RFC822-Address.html
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
}

function validerTelephoneFR(telephone) {
    const regex = /^(\+33|0)[1-9](\s?\.?\d{2}){4}$/;
    return regex.test(telephone);
}

function validerCodePostal(codePostal) {
    const regex = /^\d{5}$/;
    return regex.test(codePostal);
}

function validerMotDePasse(motDePasse) {
    const details = {
        longueur: motDePasse.length >= 8,
        majuscule: /[A-Z]/.test(motDePasse),
        minuscule: /[a-z]/.test(motDePasse),
        chiffre: /\d/.test(motDePasse),
        special: /[!@#$%^&*(),.?":{}|<>]/.test(motDePasse)
    };
    
    const valide = Object.values(details).every(v => v === true);
    
    return { valide, details };
}

function validerURL(url) {
    const regex = /^https?:\/\/.+/;
    return regex.test(url);
}

function validerCouleurHex(couleur) {
    const regex = /^#([A-Fa-f0-9]{6}|[A-Fa-f0-9]{3})$/;
    return regex.test(couleur);
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    // Tests pour validerEmail
    test.run('Exercise 205.2: Email Validation', [
        { input: 'test@example.com', expected: true, description: 'Email valide' },
        { input: 'user.name@domain.co.uk', expected: true, description: 'Email avec sous-domaine' },
        { input: 'invalide', expected: false, description: 'Email sans @' },
        { input: 'test @example.com', expected: false, description: 'Email avec espace' },
        { input: '@example.com', expected: false, description: 'Email sans nom' }
    ], validerEmail);
    
    // Tests pour validerTelephoneFR
    test.run('Exercise 205.2: Phone Validation', [
        { input: '0123456789', expected: true, description: 'Téléphone sans espaces' },
        { input: '01 23 45 67 89', expected: true, description: 'Téléphone avec espaces' },
        { input: '01.23.45.67.89', expected: true, description: 'Téléphone avec points' },
        { input: '+33123456789', expected: true, description: 'Téléphone international' },
        { input: '123456', expected: false, description: 'Téléphone trop court' },
        { input: '0023456789', expected: false, description: 'Téléphone commençant par 00' }
    ], validerTelephoneFR);
    
    // Tests pour validerCodePostal
    test.run('Exercise 205.2: Postal Code Validation', [
        { input: '75001', expected: true, description: 'Code postal valide' },
        { input: '13000', expected: true, description: 'Code postal Marseille' },
        { input: '1234', expected: false, description: 'Code postal trop court' },
        { input: '123456', expected: false, description: 'Code postal trop long' },
        { input: 'ABCDE', expected: false, description: 'Code postal avec lettres' }
    ], validerCodePostal);
    
    // Tests pour validerMotDePasse
    test.run('Exercise 205.2: Password Validation', [
        { 
            input: 'Abc123!@', 
            expected: { 
                valide: true, 
                details: { longueur: true, majuscule: true, minuscule: true, chiffre: true, special: true }
            }, 
            description: 'Mot de passe fort valide' 
        },
        { 
            input: 'faible', 
            expected: { 
                valide: false, 
                details: { longueur: false, majuscule: false, minuscule: true, chiffre: false, special: false }
            }, 
            description: 'Mot de passe faible' 
        },
        { 
            input: 'SansChiffre!', 
            expected: { 
                valide: false, 
                details: { longueur: true, majuscule: true, minuscule: true, chiffre: false, special: true }
            }, 
            description: 'Mot de passe sans chiffre' 
        },
        { 
            input: 'SansSpecial123', 
            expected: { 
                valide: false, 
                details: { longueur: true, majuscule: true, minuscule: true, chiffre: true, special: false }
            }, 
            description: 'Mot de passe sans caractère spécial' 
        }
    ], validerMotDePasse);
    
    // Tests pour validerURL
    test.run('Exercise 205.2: URL Validation', [
        { input: 'https://example.com', expected: true, description: 'URL HTTPS valide' },
        { input: 'http://example.com', expected: true, description: 'URL HTTP valide' },
        { input: 'https://sub.example.com/path', expected: true, description: 'URL avec sous-domaine et chemin' },
        { input: 'invalide', expected: false, description: 'URL sans protocole' },
        { input: 'ftp://example.com', expected: false, description: 'URL avec protocole FTP' }
    ], validerURL);
    
    // Tests pour validerCouleurHex
    test.run('Exercise 205.2: Hex Color Validation', [
        { input: '#FF5733', expected: true, description: 'Couleur hex 6 caractères' },
        { input: '#F57', expected: true, description: 'Couleur hex 3 caractères' },
        { input: '#000000', expected: true, description: 'Couleur noire' },
        { input: '#FFF', expected: true, description: 'Couleur blanche courte' },
        { input: 'FF5733', expected: false, description: 'Couleur sans #' },
        { input: '#GG5733', expected: false, description: 'Couleur avec caractères invalides' },
        { input: '#FF57', expected: false, description: 'Couleur avec longueur invalide' }
    ], validerCouleurHex);
}
