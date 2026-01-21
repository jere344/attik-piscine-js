/*
 * Exercise 204.2: Map - Dictionnaires améliorés
 * Exercice 82 / 105
 * ============================================================
 */

/*
 * Utilisez une Map pour gérer des paires clé-valeur avec des fonctionnalités avancées.
 * Créez des fonctions qui utilisent une Map pour :
 * Créez un système de cache avec les méthodes :
 * Retourne une Map avec les mots et leur nombre d'occurrences.
 * Montrez qu'une Map peut utiliser des objets comme clés (contrairement aux objets JavaScript classiques).
 */

/*
 * - Gérer un cache de données avec limite de taille
 * - Compter les occurrences de mots dans un texte
 * - Stocker des configurations avec clés d'objets
 * - constructor(maxSize) : Initialise le cache avec une taille maximale
 * - set(key, value) : Ajoute une valeur (supprime la plus ancienne si plein)
 * - get(key) : Récupère une valeur
 * - has(key) : Vérifie l'existence d'une clé
 * - clear() : Vide le cache
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Cache
 * const cache = new Cache(3);
 * cache.set('user1', { name: 'Alice' });
 * cache.set('user2', { name: 'Bob' });
 * cache.set('user3', { name: 'Charlie' });
 * cache.set('user4', { name: 'David' });  // user1 est supprimé (FIFO)
 * cache.has('user1')  // false
 * cache.get('user2')  // { name: 'Bob' }
 * 
 * // Compteur de mots
 * const texte = "le chat et le chien jouent. Le chat dort";
 * const occurrences = compterMots(texte);
 * occurrences.get('le')    // 3
 * occurrences.get('chat')  // 2
 * 
 * // Map avec objets comme clés
 * const objetA = { id: 1 };
 * const objetB = { id: 2 };
 * const metadata = new Map();
 * metadata.set(objetA, { created: '2024-01-01' });
 * metadata.set(objetB, { created: '2024-01-02' });
 * metadata.get(objetA)  // { created: '2024-01-01' }
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
