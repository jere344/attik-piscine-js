/*
 * Exercise 204: Projet - Système de tags
 * Exercice 84 / 105
 * ============================================================
 */

/*
 * Créez un système complet de gestion de tags pour des articles en utilisant Map et Set.
 * Implémentez une classe SystemeTags qui permet de :
 * Utilisez :
 */

/*
 * - Gérer des articles avec des tags uniques
 * - Rechercher par tags (mode OR et AND)
 * - Obtenir des statistiques sur les tags
 * - ajouterArticle(id, titre, contenu, tags) : Ajoute un article avec ses tags
 * - ajouterTag(articleId, tag) : Ajoute un tag à un article existant
 * - retirerTag(articleId, tag) : Retire un tag d'un article
 * - rechercherParTag(tag) : Trouve tous les articles ayant un tag spécifique
 * - rechercherParTags(tags, mode) : Recherche avec plusieurs tags (mode 'OR' ou 'AND')
 * - obtenirTousLesTags() : Liste tous les tags utilisés
 * - obtenirStatsTags() : Statistiques des tags triées par fréquence
 * - afficherArticle(id) : Affiche les détails d'un article
 * - Map pour stocker les articles (clé = id, valeur = objet article)
 * - Set pour les tags de chaque article (unicité garantie)
 * - Map pour l'index inversé (clé = tag, valeur = Set d'IDs d'articles)
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const systeme = new SystemeTags();
 * 
 * // Ajouter des articles
 * systeme.ajouterArticle(
 *     1,
 *     "Introduction à JavaScript",
 *     "JavaScript est un langage de programmation...",
 *     ['javascript', 'programmation', 'web']
 * );
 * 
 * systeme.ajouterArticle(
 *     2,
 *     "Guide des Promesses",
 *     "Les promesses permettent de gérer l'asynchrone...",
 *     ['javascript', 'async', 'promesses']
 * );
 * 
 * systeme.ajouterArticle(
 *     3,
 *     "CSS Grid Layout",
 *     "Grid est un système de mise en page...",
 *     ['css', 'web', 'design']
 * );
 * 
 * // Recherche par tag
 * systeme.rechercherParTag('javascript')  // Articles 1 et 2
 * 
 * // Recherche avec plusieurs tags (OR)
 * systeme.rechercherParTags(['javascript', 'css'], 'OR')  // Articles 1, 2 et 3
 * 
 * // Recherche avec plusieurs tags (AND)
 * systeme.rechercherParTags(['javascript', 'web'], 'AND')  // Article 1 uniquement
 * 
 * // Statistiques
 * systeme.obtenirStatsTags()
 * // [
 * //   { tag: 'javascript', count: 2 },
 * //   { tag: 'web', count: 2 },
 * //   { tag: 'programmation', count: 1 },
 * //   ...
 * // ]
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
