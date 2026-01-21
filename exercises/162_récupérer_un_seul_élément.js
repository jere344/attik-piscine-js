/*
 * Exercise 162: Récupérer un seul élément
 * Exercice 55 / 105
 * ============================================================
 */

/*
 * Récupérez les détails d'un utilisateur spécifique par son ID.
 */

/*
 * - ✅ Utiliser des URLs dynamiques avec template literals
 * - ✅ Récupérer une ressource spécifique
 * - ✅ Vérifier si la ressource existe
 * - ✅ Combiner plusieurs appels avec Promise.all()
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const recupererUtilisateur = async (id) => {
 *     const response = await fetch(`https://api.example.com/users/${id}`);
 * 
 *     if (!response.ok) {
 *         throw new Error(`Utilisateur ${id} non trouvé`);
 *     }
 * 
 *     return await response.json();
 * };
 */

// ==================== SOLUTION ====================

// Fonction pour récupérer un utilisateur par son ID
const recupererUtilisateur = async (id) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
        
        if (!response.ok) {
            throw new Error(`Utilisateur ${id} non trouvé (HTTP ${response.status})`);
        }
        
        return await response.json();
    } catch (erreur) {
        console.error('Erreur:', erreur.message);
        throw erreur;
    }
};

// Fonction pour récupérer plusieurs ressources en parallèle
const recupererPlusieursUtilisateurs = async (ids) => {
    try {
        const promises = ids.map(id => recupererUtilisateur(id));
        const resultats = await Promise.all(promises);
        return resultats;
    } catch (erreur) {
        console.error('Erreur lors de la récupération multiple:', erreur);
        throw erreur;
    }
};

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.runAsync('Exercise 162: Récupérer un seul élément', [
        {
            input: 1,
            expected: { id: 1, name: 'Leanne Graham', username: 'Bret' },
            description: 'Fetch user by ID 1'
        },
        {
            input: 2,
            expected: { id: 2, name: 'Ervin Howell', username: 'Antonette' },
            description: 'Fetch user by ID 2'
        },
        {
            input: [[1, 2, 3]],
            expected: 3,
            description: 'Fetch multiple users returns 3 users'
        }
    ], async (input) => {
        // When input is a single number
        if (typeof input === 'number') {
            const user = await recupererUtilisateur(input);
            return { id: user.id, name: user.name, username: user.username };
        }
        // When input is an array (wrapped in outer array in test case)
        if (Array.isArray(input)) {
            const users = await recupererPlusieursUtilisateurs(input);
            return users.length;
        }
    });
}
