/*
 * Exercise 002: Conversion Celsius vers Fahrenheit
 * Exercice 2 / 61
 * ============================================================
 */

/*
 * Créez une fonction celsiusToFahrenheit qui convertit une température Celsius en Fahrenheit.
 * Formule : F = C × 9/5 + 32
 * Testez votre fonction avec les valeurs suivantes :
 */

/*
 * - 0°C
 * - 100°C
 * - -40°C
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * 32
 * 212
 * -40
 */

// ==================== SOLUTION ====================

function celsiusToFahrenheit(celsius) {
    return celsius * 9/5 + 32;
}

// ==================== TESTS ====================

if (require.main === module) {
    const test = require('../test-framework');
    
    test.run('Exercise 002: Celsius to Fahrenheit', [
        { input: 0, expected: 32, description: '0°C = 32°F' },
        { input: 100, expected: 212, description: '100°C = 212°F' },
        { input: -40, expected: -40, description: '-40°C = -40°F' }
    ], celsiusToFahrenheit);
}
