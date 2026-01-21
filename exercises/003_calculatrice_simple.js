/*
 * Exercise 003: Calculatrice simple
 * Exercice 3 / 61
 * ============================================================
 */

/*
 * Créez une fonction calculator qui effectue des opérations mathématiques de base.
 * La fonction doit accepter 3 paramètres :
 * La fonction doit retourner le résultat du calcul.
 * Si l'opérateur est invalide, retournez le message : "Opérateur invalide"
 */

/*
 * - num1 : premier nombre
 * - operator : opérateur (+, -, *, /)
 * - num2 : deuxième nombre
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * calculator(10, '+', 5)  // 15
 * calculator(10, '-', 5)  // 5
 * calculator(10, '*', 5)  // 50
 * calculator(10, '/', 5)  // 2
 * calculator(10, '%', 3)  // "Opérateur invalide"
 */

// ==================== SOLUTION ====================

// TODO: Write your solution below

// Your code here

function calculator(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            return num1 / num2;
        default:
            return "Opérateur invalide";
    }
}

console.log(calculator(10, '+', 5));
console.log(calculator(10, '-', 5));
console.log(calculator(10, '*', 5));
console.log(calculator(10, '/', 5));
console.log(calculator(10, '%', 3));

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 003: Calculatrice simple', [
        { input: [10, '+', 5], expected: 15, description: 'Addition' },
        { input: [10, '-', 5], expected: 5, description: 'Subtraction' },
        { input: [10, '*', 5], expected: 50, description: 'Multiplication' },
        { input: [10, '/', 5], expected: 2, description: 'Division' },
        { input: [10, '%', 3], expected: 'Opérateur invalide', description: 'Invalid operator' }
    ], calculator);
}
