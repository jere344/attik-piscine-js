/*
 * Exercise 204.3: WeakMap et WeakSet
 * Exercice 83 / 105
 * ============================================================
 */

/*
 * Utilisez WeakMap et WeakSet pour gérer des données associées à des objets sans empêcher leur garbage collection.
 * Démontrez l'utilisation de WeakMap et WeakSet pour :
 * Utilisez une WeakMap pour stocker des données privées :
 * Note importante : Les WeakMap et WeakSet ne peuvent contenir que des objets comme clés, jamais des valeurs primitives.
 */

/*
 * - Stocker des données privées d'une classe
 * - Gérer des métadonnées d'éléments DOM (simulation)
 * - Marquer des objets avec un WeakSet
 * - constructor(nom, age) : Initialise la personne
 * - getNom() : Retourne le nom
 * - getAge() : Retourne l'âge
 * - ajouterSecret(secret) : Ajoute un secret
 * - getSecrets() : Retourne les secrets
 * - ajouterMetadata(element, meta) : Associe des métadonnées à un objet
 * - obtenirMetadata(element) : Récupère les métadonnées
 * - marquer(obj) : Marque un objet
 * - estMarque(obj) : Vérifie si un objet est marqué
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Données privées
 * const personne = new Personne('Alice', 25);
 * personne.ajouterSecret('J\'aime le chocolat');
 * personne.getNom()       // 'Alice'
 * personne.getSecrets()   // ['J\'aime le chocolat']
 * personne.nom            // undefined (données privées !)
 * 
 * // Métadonnées
 * const element = { id: 1, type: 'button' };
 * ajouterMetadata(element, { clicks: 0, lastClick: null });
 * obtenirMetadata(element)  // { clicks: 0, lastClick: null }
 * 
 * // Marquage
 * const obj = { id: 1 };
 * marquer(obj);
 * estMarque(obj)  // true
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
