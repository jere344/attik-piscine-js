/*
 * Exercise 164: Loading states
 * Exercice 57 / 61
 * ============================================================
 */

/*
 * Gérez les états de chargement dans l'interface.
 */

/*
 * - ✅ Définir les états (IDLE, LOADING, SUCCESS, ERROR)
 * - ✅ Afficher un loader pendant le chargement
 * - ✅ Désactiver les boutons pendant le chargement
 * - ✅ Permettre de réessayer en cas d'erreur
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const STATES = {
 *     IDLE: 'idle',
 *     LOADING: 'loading',
 *     SUCCESS: 'success',
 *     ERROR: 'error'
 * };
 */

// ==================== SOLUTION ====================

const STATES = {
    IDLE: 'idle',
    LOADING: 'loading',
    SUCCESS: 'success',
    ERROR: 'error'
};

class DataLoader {
    constructor() {
        this.state = STATES.IDLE;
        this.data = null;
        this.error = null;
    }
    
    setState(newState, payload = null) {
        this.state = newState;
        
        switch(newState) {
            case STATES.LOADING:
                console.log('⏳ Chargement en cours...');
                break;
            case STATES.SUCCESS:
                this.data = payload;
                this.error = null;
                console.log('✅ Succès:', payload);
                break;
            case STATES.ERROR:
                this.error = payload;
                this.data = null;
                console.error('❌ Erreur:', payload);
                break;
            case STATES.IDLE:
                console.log('💤 En attente');
                break;
        }
    }
    
    async chargerDonnees(url, shouldFail = false) {
        this.setState(STATES.LOADING);
        
        try {
            // Simuler un délai
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            if (shouldFail) {
                throw new Error('Erreur de chargement simulée');
            }
            
            const response = await fetch(url);
            
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
            
            const data = await response.json();
            this.setState(STATES.SUCCESS, data);
            return data;
            
        } catch (erreur) {
            this.setState(STATES.ERROR, erreur.message);
            throw erreur;
        }
    }
    
    retry(url) {
        console.log('\n🔄 Nouvelle tentative...');
        return this.chargerDonnees(url);
    }
}

// Exemple d'utilisation
(async () => {
    const loader = new DataLoader();
    
    console.log('=== Test avec succès ===');
    try {
        await loader.chargerDonnees('https://jsonplaceholder.typicode.com/users/1');
    } catch (erreur) {
        console.log('Possibilité de réessayer');
    }
    
    console.log('\n=== Test avec échec ===');
    try {
        await loader.chargerDonnees('https://jsonplaceholder.typicode.com/users/1', true);
    } catch (erreur) {
        // Réessayer
        await loader.retry('https://jsonplaceholder.typicode.com/users/1');
    }
})();

// ==================== NON_TESTABLE ====================
// This exercise requires network access (fetch API) and uses loading states.
// Please test manually by running the file and observing the state transitions.

module.exports.NON_TESTABLE = 'Network-dependent with async state management - test manually';
