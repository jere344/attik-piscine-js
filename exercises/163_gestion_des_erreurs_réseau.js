/*
 * Exercise 163: Gestion des erreurs réseau
 * Exercice 56 / 61
 * ============================================================
 */

/*
 * Gérez proprement les différentes erreurs possibles.
 */

/*
 * - ✅ Distinguer erreur réseau vs erreur HTTP
 * - ✅ Implémenter un timeout
 * - ✅ Système de retry intelligent
 * - ✅ Messages d'erreur clairs pour l'utilisateur
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // Erreur réseau (pas de connexion)
 * catch (erreur) {
 *     if (erreur.name === 'TypeError') {
 *         console.log('Pas de connexion');
 *     }
 * }
 * 
 * // Erreur HTTP (404, 500...)
 * if (!response.ok) {
 *     throw new Error(`HTTP ${response.status}`);
 * }
 * 
 * // Timeout
 * if (erreur.name === 'AbortError') {
 *     console.log('Requête trop longue');
 * }
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
