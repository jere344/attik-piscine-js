/*
 * Exercise 133: Jeu "Devinez le nombre"
 * Exercice 45 / 61
 * ============================================================
 */

/*
 * Créez un jeu où l'utilisateur doit deviner un nombre entre 1 et 100.
 */

/*
 * - ✅ Générer un nombre aléatoire entre 1 et 100
 * - ✅ Indiquer si la proposition est trop haute ou trop basse
 * - ✅ Compter le nombre de tentatives
 * - ✅ Afficher un historique des propositions
 * - ✅ Sauvegarder le meilleur score dans localStorage
 * - ✅ Permettre de recommencer une nouvelle partie
 * - L'ordinateur pense au nombre 67
 * - Utilisateur propose 50 → Message : "📈 C'est plus !"
 * - Utilisateur propose 80 → Message : "📉 C'est moins !"
 * - Utilisateur propose 67 → Message : "🎉 Bravo ! C'était bien 67 ! Gagné en 3 tentatives."
 * - Affichage du meilleur score et possibilité de rejouer
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * <!DOCTYPE html>
 * <html lang="fr">
 * <head>
 *     <meta charset="UTF-8">
 *     <title>Devinez le Nombre</title>
 *     <style>
 *         body {
 *             font-family: Arial, sans-serif;
 *             max-width: 600px;
 *             margin: 50px auto;
 *             text-align: center;
 *             background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
 *             color: white;
 *             padding: 20px;
 *             border-radius: 10px;
 *         }
 *         input {
 *             padding: 10px;
 *             font-size: 18px;
 *             width: 200px;
 *             margin: 10px;
 *         }
 *         button {
 *             padding: 10px 20px;
 *             font-size: 18px;
 *             cursor: pointer;
 *             background: white;
 *             border: none;
 *             border-radius: 5px;
 *         }
 *         #message {
 *             font-size: 24px;
 *             margin: 20px 0;
 *             min-height: 30px;
 *         }
 *         #historique {
 *             margin-top: 20px;
 *             text-align: left;
 *         }
 *     </style>
 * </head>
 * <body>
 *     <h1>🎲 Devinez le Nombre</h1>
 *     <p>Je pense à un nombre entre 1 et 100</p>
 * 
 *     <input type="number" id="proposition" min="1" max="100" placeholder="Votre nombre">
 *     <button id="verifier">Vérifier</button>
 *     <button id="nouvelle-partie">Nouvelle partie</button>
 * 
 *     <div id="message"></div>
 *     <div id="stats">
 *         <p>Tentatives : <span id="tentatives">0</span></p>
 *         <p>Meilleur score : <span id="record">-</span></p>
 *     </div>
 *     <div id="historique"></div>
 * 
 *     <script src="script.js"></script>
 * </body>
 * </html>
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
