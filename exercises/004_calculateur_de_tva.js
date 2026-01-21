/*
 * Exercise 004: Calculateur de TVA
 * Exercice 4 / 61
 * ============================================================
 */

/*
 * Écrivez un programme qui calcule le prix TTC (Toutes Taxes Comprises) à partir d'un prix HT (Hors Taxes).
 * Formule : Prix TTC = Prix HT + (Prix HT × Taux TVA)
 */

/*
 * - TVA : 20%
 * - Prix HT : 100€
 * - Calculez le montant de la TVA
 * - Calculez le prix TTC
 * - Affichez les trois valeurs : Prix HT, Montant TVA, Prix TTC
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * Prix HT: 100€
 * Montant TVA: 20€
 * Prix TTC: 120€
 */

// ==================== SOLUTION ====================

function calculerTVA(prixHT, tauxTVA) {
    const montantTVA = prixHT * tauxTVA;
    const prixTTC = prixHT + montantTVA;
    return { prixHT, montantTVA, prixTTC };
}

// Example usage (commented out)
// const result = calculerTVA(100, 0.20);
// console.log(`Prix HT: ${result.prixHT}€`);
// console.log(`Montant TVA: ${result.montantTVA}€`);
// console.log(`Prix TTC: ${result.prixTTC}€`);

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 004: Calculateur de TVA', [
        { input: [100, 0.20], expected: { prixHT: 100, montantTVA: 20, prixTTC: 120 } },
        { input: [50, 0.20], expected: { prixHT: 50, montantTVA: 10, prixTTC: 60 } },
        { input: [200, 0.10], expected: { prixHT: 200, montantTVA: 20, prixTTC: 220 } }
    ], calculerTVA);
}
