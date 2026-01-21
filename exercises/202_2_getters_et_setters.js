/*
 * Exercise 202.2: Getters et Setters
 * Exercice 72 / 105
 * ============================================================
 */

/*
 * Utilisez getters et setters pour contrôler l'accès aux propriétés.
 */

/*
 * - ✅ Définir des getters avec get
 * - ✅ Définir des setters avec set
 * - ✅ Valider les données dans les setters
 * - ✅ Utiliser la convention underscore pour propriétés privées
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * class Personne {
 *     constructor(nom, age) {
 *         this._nom = nom;
 *         this._age = age;
 *     }
 * 
 *     get age() {
 *         return this._age;
 *     }
 * 
 *     set age(nouvelAge) {
 *         if (nouvelAge >= 0) {
 *             this._age = nouvelAge;
 *         }
 *     }
 * }
 */

// ==================== SOLUTION ====================

class Personne {
    constructor(nom, age) {
        this._nom = nom;
        this._age = age;
    }

    get nom() {
        return this._nom;
    }

    set nom(nouveauNom) {
        if (nouveauNom && nouveauNom.length > 0) {
            this._nom = nouveauNom;
        }
    }

    get age() {
        return this._age;
    }

    set age(nouvelAge) {
        if (nouvelAge >= 0 && nouvelAge <= 150) {
            this._age = nouvelAge;
        }
    }

    get info() {
        return `${this._nom}, ${this._age} ans`;
    }
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 202.2: Getters and Setters', [
        { input: ["Alice", 30], expected: "Alice, 30 ans", description: 'Création avec Alice, 30' },
        { input: ["Bob", 25], expected: "Bob, 25 ans", description: 'Création avec Bob, 25' }
    ], (nom, age) => new Personne(nom, age).info);
}
