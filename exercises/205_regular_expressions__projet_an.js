/*
 * Exercise 205: Regular Expressions - Projet analyseur de logs
 * Exercice 88 / 105
 * ============================================================
 */

/*
 * Créez un analyseur de fichiers de logs capable d'extraire, filtrer et analyser des entrées de logs système.
 * Implémentez une classe AnalyseurLogs qui permet de :
 * Format standard à parser :
 * Niveaux de log supportés : INFO, ERROR, WARN, DEBUG
 * Parse une ligne de log et retourne un objet :
 * Met à jour les statistiques après ajout d'un log.
 * Analyse un fichier complet (chaîne multi-lignes).
 * Retourne tous les logs d'un niveau spécifique.
 * Retourne tous les logs d'une IP spécifique.
 * Retourne les logs entre deux dates.
 * Recherche un motif (regex) dans les messages.
 * Retourne les IPs les plus actives.
 * Affiche un rapport complet dans la console :
 */

/*
 * - Parser des lignes de logs au format standard
 * - Extraire les informations : timestamp, niveau, IP, message
 * - Générer des statistiques sur les logs
 * - Filtrer et rechercher dans les logs
 * - Générer un rapport d'analyse
 * - logs : tableau des logs parsés
 * - stats : objet contenant les statistiques
total : nombre total de logs
parNiveau : compteur par niveau (INFO, ERROR, etc.)
parIP : compteur par adresse IP
erreurs : tableau des erreurs uniquement
 * - total : nombre total de logs
 * - parNiveau : compteur par niveau (INFO, ERROR, etc.)
 * - parIP : compteur par adresse IP
 * - erreurs : tableau des erreurs uniquement
 * - Split par lignes
 * - Parse chaque ligne
 * - Retourne les statistiques finales
 * - Paramètres : objets Date
 * - Recherche insensible à la casse
 * - Format : [{ ip: string, count: number }, ...]
 * - Trié par ordre décroissant
 * - Total d'entrées
 * - Répartition par niveau (avec pourcentages)
 * - Top 5 des IPs
 * - Dernières erreurs
 * - Regex pour parser le format complexe avec groupes de capture
 * - Gestion des dates avec new Date()
 * - Agregé des statistiques (compteurs, totaux)
 * - Méthodes de filtrage et recherche
 * - Formatage et présentation des données
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * [2024-01-15 10:30:45] [INFO] 192.168.1.1 - Message du log
 * [YYYY-MM-DD HH:MM:SS] [NIVEAU] IP_ADDRESS - MESSAGE
 * ------------------------------------------------------------
 * {
 *   timestamp: Date,
 *   niveau: string,
 *   ip: string,
 *   message: string
 * }
 * ------------------------------------------------------------
 * const analyseur = new AnalyseurLogs();
 * 
 * const logs = `
 * [2024-01-15 10:30:45] [INFO] 192.168.1.100 - Utilisateur connecté
 * [2024-01-15 10:31:12] [ERROR] 192.168.1.101 - Erreur de connexion BDD
 * [2024-01-15 10:32:00] [WARN] 192.168.1.100 - Tentative échouée
 * [2024-01-15 10:33:15] [INFO] 192.168.1.102 - Requête GET /api/users
 * `;
 * 
 * const stats = analyseur.analyserFichier(logs);
 * // stats.total === 4
 * // stats.parNiveau.INFO === 2
 * // stats.parNiveau.ERROR === 1
 * 
 * analyseur.genererRapport();
 * // Affiche rapport formaté dans la console
 * 
 * // Filtres
 * const erreurs = analyseur.filtrerParNiveau('ERROR');
 * // [{ timestamp: Date(...), niveau: 'ERROR', ... }]
 * 
 * const ip100 = analyseur.filtrerParIP('192.168.1.100');
 * // Tous les logs de cette IP
 * 
 * // Recherche
 * const connexions = analyseur.rechercherMotif('connexion');
 * // Trouve tous les logs mentionnant "connexion"
 * 
 * // Top IPs
 * const topIPs = analyseur.obtenirTopIPs(3);
 * // [{ ip: '192.168.1.100', count: 2 }, ...]
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here
