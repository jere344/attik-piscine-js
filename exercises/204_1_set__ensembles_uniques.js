/*
 * Exercise 204.1: Set - Ensembles uniques
 * Exercice 81 / 105
 * ============================================================
 */

/*
 * Utilisez un Set pour gérer des collections d'éléments uniques et effectuer des opérations ensemblistes.
 * Créez des fonctions qui utilisent un Set pour :
 * Retourne un nouveau tableau sans doublons en utilisant un Set.
 * Gère les utilisateurs en ligne avec les méthodes :
 */

/*
 * - Supprimer les doublons d'un tableau
 * - Gérer une liste d'utilisateurs en ligne (connexion/déconnexion)
 * - Trouver l'intersection et l'union de deux ensembles
 * - connexion(userId) : Ajoute un utilisateur en ligne
 * - deconnexion(userId) : Retire un utilisateur
 * - estEnLigne(userId) : Vérifie si un utilisateur est connecté
 * - obtenirTous() : Retourne la liste de tous les utilisateurs en ligne
 * - union(setA, setB) : Retourne l'union de deux Sets
 * - intersection(setA, setB) : Retourne l'intersection de deux Sets
 * - difference(setA, setB) : Retourne la différence (éléments dans A mais pas dans B)
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Suppression de doublons
 * supprimerDoublons([1, 2, 2, 3, 3, 3, 4, 5, 5])  // [1, 2, 3, 4, 5]
 * supprimerDoublons(['a', 'b', 'a', 'c', 'b'])    // ['a', 'b', 'c']
 * 
 * // Gestion utilisateurs
 * const manager = new GestionnaireUtilisateurs();
 * manager.connexion("alice");
 * manager.connexion("bob");
 * manager.estEnLigne("alice")   // true
 * manager.estEnLigne("charlie") // false
 * manager.obtenirTous()         // ["alice", "bob"]
 * 
 * // Opérations sur ensembles
 * const setA = new Set([1, 2, 3, 4]);
 * const setB = new Set([3, 4, 5, 6]);
 * union(setA, setB)         // Set {1, 2, 3, 4, 5, 6}
 * intersection(setA, setB)  // Set {3, 4}
 * difference(setA, setB)    // Set {1, 2}
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
