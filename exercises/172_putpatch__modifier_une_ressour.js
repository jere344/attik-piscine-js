/*
 * Exercise 172: PUT/PATCH - Modifier une ressource
 * Exercice 59 / 61
 * ============================================================
 */

/*
 * Modifiez une ressource existante avec PUT ou PATCH.
 */

/*
 * - ✅ Comprendre PUT (remplacement complet)
 * - ✅ Comprendre PATCH (modification partielle)
 * - ✅ Utiliser l'ID de la ressource
 * - ✅ Gérer la réponse modifiée
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // PUT : remplace TOUTE la ressource
 * fetch(`/users/${id}`, {
 *     method: 'PUT',
 *     body: JSON.stringify({
 *         name: 'Nouveau',
 *         email: 'nouveau@mail.com',
 *         // ... tous les champs
 *     })
 * });
 * 
 * // PATCH : modifie PARTIELLEMENT
 * fetch(`/users/${id}`, {
 *     method: 'PATCH',
 *     body: JSON.stringify({
 *         email: 'nouveau@mail.com'  // juste l'email
 *     })
 * });
 */

// ==================== SOLUTION ====================

// PUT : Remplacement complet de la ressource
const updateUserPUT = async (id, userData) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        });
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('PUT - Utilisateur remplacé:', data);
        return data;
        
    } catch (erreur) {
        console.error('Erreur PUT:', erreur.message);
        throw erreur;
    }
};

// PATCH : Modification partielle de la ressource
const updateUserPATCH = async (id, partialData) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(partialData)
        });
        
        if (!response.ok) {
            throw new Error(`Erreur HTTP: ${response.status}`);
        }
        
        const data = await response.json();
        console.log('PATCH - Utilisateur modifié:', data);
        return data;
        
    } catch (erreur) {
        console.error('Erreur PATCH:', erreur.message);
        throw erreur;
    }
};

// Exemples d'utilisation
(async () => {
    console.log('=== PUT - Remplacement complet ===');
    await updateUserPUT(1, {
        id: 1,
        name: 'Jean Dupont',
        username: 'jdupont',
        email: 'jean.dupont@exemple.com',
        phone: '01 23 45 67 89',
        website: 'jeandupont.fr'
    });
    
    console.log('\n=== PATCH - Modification partielle ===');
    await updateUserPATCH(1, {
        email: 'nouveau.email@exemple.com',
        phone: '06 12 34 56 78'
    });
})();

// ==================== NON_TESTABLE ====================
// This exercise requires network access (fetch API with PUT/PATCH methods).
// Please test manually by running the file or using an API testing tool.

if (typeof module !== 'undefined' && module.exports) {
    module.exports.NON_TESTABLE = 'Network-dependent PUT/PATCH operations - test manually';
}
