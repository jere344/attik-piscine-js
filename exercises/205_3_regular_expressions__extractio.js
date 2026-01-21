/*
 * Exercise 205.3: Regular Expressions - Extraction et manipulation
 * Exercice 87 / 105
 * ============================================================
 */

/*
 * Utilisez les expressions régulières pour extraire et manipuler différents types de données dans des chaînes de caractères.
 * Créez des fonctions qui utilisent des RegExp pour :
 * Extrait tous les hashtags d'un texte.
 * Extrait toutes les mentions @username d'un texte.
 * Extrait toutes les URLs (http et https) d'un texte.
 * Extrait les dates au format DD/MM/YYYY.
 * Extrait les prix avec le symbole €.
 * Parse les coordonnées GPS (latitude, longitude).
 * Masque les adresses email pour l'anonymisation.
 * Formate un numéro de téléphone.
 * Extrait et convertit les couleurs hexadécimales en RGB.
 */

/*
 * - Extraire des hashtags d'un tweet
 * - Extraire des mentions (@username)
 * - Extraire des URLs (http/https)
 * - Extraire des dates (format DD/MM/YYYY)
 * - Extraire des prix (format avec €)
 * - Parser des coordonnées GPS
 * - Masquer des emails (anonymisation)
 * - Formater des numéros de téléphone
 * - Analyser des couleurs CSS (hex vers rgb)
 * - Supporte les caractères accentués
 * - Retourne un tableau vide si aucun hashtag
 * - Retourne un tableau de mentions
 * - Retourne un tableau d'objets avec : { complete, jour, mois, annee }
 * - Supporte les formats : 49,99€ et 15.50€
 * - Retourne un tableau de nombres (float)
 * - Format : 48.8566, 2.3522
 * - Retourne : { latitude: number, longitude: number }
 * - alice@example.com devient a***@example.com
 * - Utilise .replace() avec callback
 * - 0123456789 devient 01 23 45 67 89
 * - Retourne : { hex: string, rgb: string }
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Hashtags
 * extraireHashtags("J'adore #JavaScript et #WebDev ! #code2024")
 * // ['#JavaScript', '#WebDev', '#code2024']
 * 
 * // Mentions
 * extraireMentions("Salut @alice et @bob, regardez ça !")
 * // ['@alice', '@bob']
 * 
 * // URLs
 * extraireURLs("Visitez https://example.com et http://test.fr")
 * // ['https://example.com', 'http://test.fr']
 * 
 * // Dates
 * extraireDates("Réunion le 15/01/2024 et 20/03/2024")
 * // [{ complete: '15/01/2024', jour: '15', mois: '01', annee: '2024' }, ...]
 * 
 * // Prix
 * extrairePrix("Total: 49,99€ + 15.50€ de livraison")
 * // [49.99, 15.50]
 * 
 * // Coordonnées GPS
 * extraireCoordonnees("Paris: 48.8566, 2.3522 | Lyon: 45.7640, 4.8357")
 * // [{ latitude: 48.8566, longitude: 2.3522 }, ...]
 * 
 * // Masquer emails
 * masquerEmails("Contactez alice@example.com ou bob@test.fr")
 * // "Contactez a***@example.com ou b***@test.fr"
 * 
 * // Formater téléphone
 * formaterTelephone('0123456789')
 * // "01 23 45 67 89"
 * 
 * // Analyser CSS
 * analyserCSS("color: #FF5733; background: #3498DB;")
 * // [{ hex: '#FF5733', rgb: 'rgb(255, 87, 51)' }, ...]
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
