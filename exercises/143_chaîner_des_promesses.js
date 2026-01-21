/*
 * Exercise 143: Chaîner des Promesses
 * Exercice 48 / 61
 * ============================================================
 */

/*
 * Créez une séquence d'opérations asynchrones enchaînées.
 */

/*
 * - ✅ Comprendre le chaînage de Promesses avec .then()
 * - ✅ Passer des valeurs d'une étape à l'autre
 * - ✅ Gérer les erreurs dans une chaîne
 * - ✅ Utiliser .finally() pour le nettoyage
 * - Créer 3 fonctions qui retournent des Promesses
 * - Chaque étape utilise le résultat de la précédente
 * - Une seule erreur dans la chaîne est capturée par .catch()
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * etape1()
 *     .then(resultat1 => {
 *         // Traiter resultat1
 *         return etape2(resultat1);
 *     })
 *     .then(resultat2 => {
 *         // Traiter resultat2
 *         return etape3(resultat2);
 *     })
 *     .then(resultatFinal => {
 *         console.log('Terminé:', resultatFinal);
 *     })
 *     .catch(erreur => {
 *         console.error('Erreur:', erreur);
 *     });
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
function etape1() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Étape 1 terminée");
            resolve(1);
        }, 1000);
    });
}

function etape2(valeur) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Étape 2 terminée");
            resolve(valeur + 2);
        }, 1000);
    });
}
function etape3(valeur) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("Étape 3 terminée");
            resolve(valeur + 3);
        }, 1000);
    });
}

etape1()
    .then(resultat1 => {
        return etape2(resultat1);
    })
    .then(resultat2 => {
        return etape3(resultat2);
    })
    .then(resultatFinal => {
        console.log('Terminé:', resultatFinal);
    })
    .catch(erreur => {
        console.error('Erreur:', erreur);
    })
    .finally(() => {
        console.log('Chaîne de Promesses terminée');
    });

// ==================== NON_TESTABLE ====================
// This exercise demonstrates promise chaining with async operations.
// Testing requires waiting for promises and capturing console output.

module.exports.NON_TESTABLE = 'Demonstrates promise chaining with timeouts';
