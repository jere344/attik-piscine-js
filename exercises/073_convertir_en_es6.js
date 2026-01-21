/*
 * Exercise 073: Convertir en ES6
 * Exercice 28 / 61
 * ============================================================
 */

/*
 * Convertissez ce code utilisant la syntaxe classique en syntaxe ES6 moderne (arrow functions + template literals).
 */

/*
 * - ✅ Remplacer function par des arrow functions (=>)
 * - ✅ Remplacer la concaténation par des template literals
 * - ✅ Utiliser const au lieu de let quand approprié
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * function calculerPrixTTC(prixHT, tauxTVA) {
 *     let montantTVA = prixHT * tauxTVA;
 *     let prixTTC = prixHT + montantTVA;
 *     return "Prix HT: " + prixHT + "€, TVA: " + montantTVA + "€, Prix TTC: " + prixTTC + "€";
 * }
 * 
 * function afficherProduit(nom, prix, stock) {
 *     if (stock > 0) {
 *         return "Produit: " + nom + " - Prix: " + prix + "€ - En stock: " + stock;
 *     } else {
 *         return "Produit: " + nom + " - Rupture de stock";
 *     }
 * }
 * ------------------------------------------------------------
 * calculerPrixTTC(100, 0.20)           // "Prix HT: 100€, TVA: 20€, Prix TTC: 120€"
 * afficherProduit("Laptop", 999, 5)    // "Produit: Laptop - Prix: 999€ - En stock: 5"
 * afficherProduit("Clavier", 49, 0)    // "Produit: Clavier - Rupture de stock"
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

const calculerPrixTTC = (prixHT, tauxTVA) => {
    const montantTVA = prixHT * tauxTVA;
    const prixTTC = prixHT + montantTVA;
    return `Prix HT: ${prixHT}€, TVA: ${montantTVA}€, Prix TTC: ${prixTTC}€`;
}

const afficherProduit = (nom, prix, stock) => {
    if (stock > 0) {
        return `Produit: ${nom} - Prix: ${prix}€ - En stock: ${stock}`;
    } else {
        return `Produit: ${nom} - Rupture de stock`;
    }
}
// Tests
console.log(calculerPrixTTC(100, 0.20));
console.log(afficherProduit("Laptop", 999, 5));
console.log(afficherProduit("Clavier", 49, 0));

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 073: Convertir en ES6 - calculerPrixTTC', [
        { input: [100, 0.20], expected: 'Prix HT: 100€, TVA: 20€, Prix TTC: 120€', description: 'Price calculation with 20% tax' }
    ], calculerPrixTTC);
    
    test.run('Exercise 073: Convertir en ES6 - afficherProduit', [
        { input: ['Laptop', 999, 5], expected: 'Produit: Laptop - Prix: 999€ - En stock: 5', description: 'Product in stock' },
        { input: ['Clavier', 49, 0], expected: 'Produit: Clavier - Rupture de stock', description: 'Product out of stock' }
    ], afficherProduit);
}
