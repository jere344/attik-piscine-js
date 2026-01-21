/*
 * Exercise 092: Modifier le contenu du DOM
 * Exercice 35 / 61
 * ============================================================
 */

/*
 * Apprenez à modifier le texte, le HTML, les attributs et les styles des éléments.
 */

/*
 * - ✅ Modifier le texte du titre
 * - ✅ Modifier le HTML du div #contenu
 * - ✅ Ajouter/enlever des classes CSS
 * - ✅ Modifier les styles inline
 * - ✅ Modifier les attributs
 * - textContent / innerHTML
 * - classList.add() / classList.remove() / classList.toggle()
 * - style.property
 * - setAttribute() / getAttribute() / removeAttribute()
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * <!DOCTYPE html>
 * <html lang="fr">
 * <head>
 *     <meta charset="UTF-8">
 *     <title>DOM - Modification</title>
 *     <style>
 *         .highlight { background-color: yellow; }
 *         .large { font-size: 24px; }
 *     </style>
 * </head>
 * <body>
 *     <h1 id="titre">Titre original</h1>
 *     <p id="description" class="normal">Description originale</p>
 *     <button id="monBouton" class="btn">Bouton</button>
 *     <div id="contenu"></div>
 * 
 *     <script src="092_A.js"></script>
 * </body>
 * </html>
 */

// ==================== SOLUTION ====================

// Functions that can be tested
function modifierTexte(element, texte) {
    if (element) element.textContent = texte;
    return texte;
}

function modifierHTML(element, html) {
    if (element) element.innerHTML = html;
    return html;
}

function ajouterClasse(element, classe) {
    if (element && element.classList) {
        element.classList.add(classe);
        return true;
    }
    return false;
}

// Browser-only code
if (typeof document !== 'undefined') {
    // 1. Modifier le texte du titre
    const titre = document.getElementById('titre');
    modifierTexte(titre, "Nouveau titre modifié");

    // 2. Modifier le HTML du div #contenu
    const contenu = document.getElementById('contenu');
    modifierHTML(contenu, "<p>Contenu <strong>HTML</strong> ajouté dynamiquement</p>");

    // 3. Ajouter/enlever des classes CSS
    const description = document.getElementById('description');
    ajouterClasse(description, 'highlight');
    ajouterClasse(description, 'large');

    // 4. Modifier les styles inline
    if (description) {
        description.style.color = 'blue';
        description.style.fontWeight = 'bold';
    }

    // 5. Modifier les attributs
    const bouton = document.getElementById('monBouton');
    if (bouton) {
        bouton.setAttribute('disabled', 'true');
        bouton.setAttribute('title', 'Ce bouton est désactivé');
    }

    console.log('DOM modifié avec succès!');
}

// ==================== NON_TESTABLE ====================
// This exercise requires DOM interaction in a browser.
// Please open: 092_modifier_le_contenu_du_dom.html

module.exports.NON_TESTABLE = 'DOM manipulation - open 092_modifier_le_contenu_du_dom.html in browser';
