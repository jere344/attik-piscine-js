/*
 * Exercise 174: Headers et authentification
 * Exercice 61 / 61
 * ============================================================
 */

/*
 * Gérez les headers HTTP et l'authentification.
 */

/*
 * - ✅ Ajouter des headers personnalisés
 * - ✅ Gérer l'authentification (Bearer token)
 * - ✅ Comprendre les headers communs
 * - ✅ Créer une fonction wrapper réutilisable
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const headers = {
 *     'Content-Type': 'application/json',
 *     'Authorization': 'Bearer token123',
 *     'Accept': 'application/json',
 *     'Accept-Language': 'fr-FR'
 * };
 */

// ==================== SOLUTION ====================

// Fonction wrapper réutilisable pour les requêtes authentifiées
class ApiClient {
    constructor(baseUrl, token = null) {
        this.baseUrl = baseUrl;
        this.token = token;
    }
    
    // Méthode pour définir/mettre à jour le token
    setToken(token) {
        this.token = token;
    }
    
    // Générer les headers par défaut
    getHeaders(customHeaders = {}) {
        const headers = {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Accept-Language': 'fr-FR',
            ...customHeaders
        };
        
        // Ajouter l'authentification si le token est disponible
        if (this.token) {
            headers['Authorization'] = `Bearer ${this.token}`;
        }
        
        return headers;
    }
    
    // Méthode GET
    async get(endpoint, customHeaders = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'GET',
                headers: this.getHeaders(customHeaders)
            });
            console.log('Running GET request to:', `${this.baseUrl}${endpoint}`, 'with headers:', this.getHeaders(customHeaders));
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (erreur) {
            console.error('Erreur GET:', erreur.message);
            throw erreur;
        }
    }
    
    // Méthode POST
    async post(endpoint, data, customHeaders = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'POST',
                headers: this.getHeaders(customHeaders),
                body: JSON.stringify(data)
            });
            console.log('Running POST request to:', `${this.baseUrl}${endpoint}`, 'with headers:', this.getHeaders(customHeaders));
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return await response.json();
        } catch (erreur) {
            console.error('Erreur POST:', erreur.message);
            throw erreur;
        }
    }
    
    // Méthode DELETE
    async delete(endpoint, customHeaders = {}) {
        try {
            const response = await fetch(`${this.baseUrl}${endpoint}`, {
                method: 'DELETE',
                headers: this.getHeaders(customHeaders)
            });
            console.log('Running DELETE request to:', `${this.baseUrl}${endpoint}`, 'with headers:', this.getHeaders(customHeaders));
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            return response.status === 204 ? null : await response.json();
        } catch (erreur) {
            console.error('Erreur DELETE:', erreur.message);
            throw erreur;
        }
    }
}

// Exemples d'utilisation
(async () => {
    // Créer un client API
    const api = new ApiClient('https://jsonplaceholder.typicode.com');
    
    console.log('=== Requête sans authentification ===');
    const users = await api.get('/users/1');
    console.log('Utilisateur:', users.name);
    
    console.log('\n=== Ajout du token d\'authentification ===');
    api.setToken('mon_token_secret_123');
    
    console.log('\n=== Requête POST avec authentification ===');
    const newPost = await api.post('/posts', {
        title: 'Mon nouveau post',
        body: 'Contenu du post',
        userId: 1
    });
    console.log('Post créé:', newPost);
    
    console.log('\n=== Headers personnalisés ===');
    const customData = await api.get('/users/1', {
        'X-Custom-Header': 'valeur-personnalisée',
        'X-Request-ID': '12345'
    });
    console.log('Données récupérées avec headers personnalisés');
})();

// ==================== NON_TESTABLE ====================
// This exercise requires network access and authentication tokens.
// Please test manually with a real API that supports authentication.

if (typeof module !== 'undefined' && module.exports) {
    module.exports.NON_TESTABLE = 'Network-dependent with authentication - test manually';
}
