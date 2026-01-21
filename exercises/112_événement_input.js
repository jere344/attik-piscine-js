/*
 * Exercise 112: Événement input
 * Exercice 38 / 61
 * ============================================================
 */

/*
 * Créez un champ texte qui affiche en temps réel ce que l'utilisateur tape.
 */

/*
 * - ✅ Afficher le texte tapé en temps réel
 * - ✅ Afficher le nombre de caractères
 * - ✅ Gérer le cas où le champ est vide
 * - addEventListener('input', callback)
 * - event.target.value pour récupérer la valeur
 * - .length pour compter les caractères
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * <!DOCTYPE html>
 * <html lang="fr">
 * <head>
 *     <meta charset="UTF-8">
 *     <title>Input Live</title>
 *     <style>
 *         #monInput {
 *             width: 100%;
 *             padding: 10px;
 *             font-size: 16px;
 *             margin-bottom: 20px;
 *         }
 *         #resultat {
 *             font-weight: bold;
 *             color: #007bff;
 *         }
 *     </style>
 * </head>
 * <body>
 *     <h1>Saisie en temps réel</h1>
 *     <input type="text" id="monInput" placeholder="Tapez quelque chose...">
 *     <p>Vous avez tapé : <span id="resultat"></span></p>
 *     <p>Nombre de caractères : <span id="longueur">0</span></p>
 * 
 *     <script src="112_A.js"></script>
 * </body>
 * </html>
 */

// ==================== SOLUTION ====================

// Testable function
function traiterInput(valeur) {
    const resultat = valeur === '' ? '' : valeur;
    const longueur = valeur.length;
    return { resultat, longueur };
}

// Browser-only code
if (typeof document !== 'undefined') {
    const monInput = document.getElementById('monInput');
    const resultat = document.getElementById('resultat');
    const longueur = document.getElementById('longueur');

    monInput.addEventListener('input', (event) => {
        const valeur = event.target.value;
        const traitement = traiterInput(valeur);
        
        // Afficher le texte tapé
        resultat.textContent = traitement.resultat;
        
        // Afficher le nombre de caractères
        longueur.textContent = traitement.longueur;
    });
}

// ==================== NON_TESTABLE ====================
// This exercise requires DOM interaction and input events in a browser.
// Please open: 112_événement_input.html

module.exports.NON_TESTABLE = 'Input events - open 112_événement_input.html in browser';
