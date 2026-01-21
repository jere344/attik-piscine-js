/*
 * Exercise 123: Event delegation
 * Exercice 42 / 61
 * ============================================================
 */

/*
 * Comprenez la délégation d'événements avec une liste dynamique.
 */

/*
 * - ✅ Ajouter des items dynamiquement avec le bouton
 * - ✅ Utiliser event delegation (un seul listener sur le parent)
 * - ✅ Sélectionner un item au clic (changement de style)
 * - ✅ Désélectionner les autres items lors de la sélection
 * - Clic sur "Ajouter un item" → Un nouvel item apparaît dans la liste
 * - Clic sur un item → Il devient vert (classe selected)
 * - Clic sur un autre item → Le précédent redevient gris, le nouveau devient vert
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * <!DOCTYPE html>
 * <html lang="fr">
 * <head>
 *     <meta charset="UTF-8">
 *     <title>Event Delegation</title>
 *     <style>
 *         .item {
 *             padding: 10px;
 *             margin: 5px 0;
 *             background: #e0e0e0;
 *             cursor: pointer;
 *         }
 *         .item.selected {
 *             background: #4caf50;
 *             color: white;
 *         }
 *     </style>
 * </head>
 * <body>
 *     <button id="ajouter">Ajouter un item</button>
 *     <ul id="liste"></ul>
 * 
 *     <script src="script.js"></script>
 * </body>
 * </html>
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
