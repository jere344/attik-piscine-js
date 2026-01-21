/*
 * Exercise 084: Spread operator avec objets
 * Exercice 33 / 61
 * ============================================================
 */

/*
 * Utilisez l'opérateur spread ... pour manipuler des objets de manière élégante.
 */

/*
 * - ✅ Copier un objet sans référence
 * - ✅ Fusionner plusieurs objets
 * - ✅ Modifier une propriété sans mutation
 * - ✅ Ajouter de nouvelles propriétés
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * // 1. Copier un objet
 * let personne = { nom: "Dupont", age: 30 };
 * // Créer une copie indépendante
 * 
 * // 2. Fusionner des objets
 * let infos = { nom: "Martin", age: 25 };
 * let contact = { email: "martin@email.com", tel: "0612345678" };
 * // Créer un objet avec toutes les propriétés
 * 
 * // 3. Modifier une propriété
 * let user = { nom: "Dupont", age: 30, ville: "Paris" };
 * // Créer un nouvel objet avec age = 31
 */

// ==================== SOLUTION ====================

function copierObjet(obj) {
    return { ...obj };
}

function fusionnerObjets(obj1, obj2) {
    return { ...obj1, ...obj2 };
}

function modifierPropriete(obj, cle, valeur) {
    return { ...obj, [cle]: valeur };
}

// Example usage (commented out)
// let personne = { nom: "Dupont", age: 30 };
// let personneCopie = copierObjet(personne);
// console.log("Copie:", personneCopie);

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 084: Spread operator - copier', [
        { input: [{ nom: "Dupont", age: 30 }], expected: { nom: "Dupont", age: 30 } }
    ], copierObjet);
    
    test.run('Exercise 084: Spread operator - fusionner', [
        { 
            input: [{ nom: "Martin" }, { email: "martin@email.com" }], 
            expected: { nom: "Martin", email: "martin@email.com" } 
        }
    ], fusionnerObjets);
    
    test.run('Exercise 084: Spread operator - modifier', [
        { 
            input: [{ nom: "Dupont", age: 30 }, "age", 31], 
            expected: { nom: "Dupont", age: 31 } 
        }
    ], modifierPropriete);
}
