/*
 * Exercise 122: Calculatrice interactive
 * Exercice 41 / 105
 * ============================================================
 */

/*
 * Créez une calculatrice simple avec interface utilisateur.
 */

/*
 * - ✅ Gérer les clics sur les chiffres (0-9)
 * - ✅ Gérer les opérateurs (+, -, ×, ÷)
 * - ✅ Calculer le résultat avec le bouton =
 * - ✅ Réinitialiser avec le bouton C
 * - Clic sur "7" → Affichage : 7
 * - Clic sur "+" → Enregistrement de l'opération
 * - Clic sur "3" → Affichage : 3
 * - Clic sur "=" → Affichage : 10
 * - Clic sur "C" → Affichage : 0
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * <!DOCTYPE html>
 * <html lang="fr">
 * <head>
 *     <meta charset="UTF-8">
 *     <title>Calculatrice</title>
 *     <style>
 *         .calculatrice {
 *             width: 300px;
 *             margin: 50px auto;
 *             padding: 20px;
 *             background: #f0f0f0;
 *             border-radius: 10px;
 *         }
 *         #display {
 *             width: 100%;
 *             padding: 10px;
 *             font-size: 24px;
 *             text-align: right;
 *             margin-bottom: 10px;
 *         }
 *         .buttons {
 *             display: grid;
 *             grid-template-columns: repeat(4, 1fr);
 *             gap: 10px;
 *         }
 *         button {
 *             padding: 20px;
 *             font-size: 18px;
 *             cursor: pointer;
 *         }
 *         .operator {
 *             background: #ff9500;
 *             color: white;
 *         }
 *         .equal {
 *             grid-column: span 2;
 *             background: #4cd964;
 *             color: white;
 *         }
 *     </style>
 * </head>
 * <body>
 *     <div class="calculatrice">
 *         <input type="text" id="display" readonly value="0">
 *         <div class="buttons">
 *             <button class="number">7</button>
 *             <button class="number">8</button>
 *             <button class="number">9</button>
 *             <button class="operator">÷</button>
 * 
 *             <button class="number">4</button>
 *             <button class="number">5</button>
 *             <button class="number">6</button>
 *             <button class="operator">×</button>
 * 
 *             <button class="number">1</button>
 *             <button class="number">2</button>
 *             <button class="number">3</button>
 *             <button class="operator">-</button>
 * 
 *             <button class="number">0</button>
 *             <button id="clear">C</button>
 *             <button class="equal">=</button>
 *             <button class="operator">+</button>
 *         </div>
 *     </div>
 * 
 *     <script src="script.js"></script>
 * </body>
 * </html>
 */

// ==================== SOLUTION ====================

// Testable calculation function
function calculer(previous, operator, current) {
    let result;
    
    switch (operator) {
        case '+':
            result = previous + current;
            break;
        case '-':
            result = previous - current;
            break;
        case '×':
            result = previous * current;
            break;
        case '÷':
            result = previous / current;
            break;
        default:
            return null;
    }
    
    return result;
}

// Browser-only code
if (typeof document !== 'undefined') {
    const display = document.getElementById('display');
    const numbers = document.querySelectorAll('.number');
    const operators = document.querySelectorAll('.operator');
    const equal = document.querySelector('.equal');
    const clear = document.getElementById('clear');

    let currentValue = '0';
    let previousValue = null;
    let operator = null;
    let shouldResetDisplay = false;

    function updateDisplay() {
        display.value = currentValue;
    }

    numbers.forEach(button => {
        button.addEventListener('click', () => {
            const number = button.textContent;
            
            if (shouldResetDisplay) {
                currentValue = number;
                shouldResetDisplay = false;
            } else {
                currentValue = currentValue === '0' ? number : currentValue + number;
            }
            
            updateDisplay();
        });
    });

    operators.forEach(button => {
        button.addEventListener('click', () => {
            const op = button.textContent;
            
            if (previousValue !== null && operator !== null && !shouldResetDisplay) {
                const result = calculer(previousValue, operator, parseFloat(currentValue));
                currentValue = result.toString();
                updateDisplay();
            }
            
            previousValue = parseFloat(currentValue);
            operator = op;
            currentValue = op;
            updateDisplay();
            shouldResetDisplay = true;
        });
    });

    equal.addEventListener('click', () => {
        if (operator !== null && previousValue !== null) {
            const result = calculer(previousValue, operator, parseFloat(currentValue));
            currentValue = result.toString();
            operator = null;
            previousValue = null;
            updateDisplay();
            shouldResetDisplay = true;
        }
    });

    clear.addEventListener('click', () => {
        currentValue = '0';
        previousValue = null;
        operator = null;
        shouldResetDisplay = false;
        updateDisplay();
    });
}

// ==================== NON_TESTABLE ====================
// This exercise requires DOM interaction with buttons and display in a browser.
// Please open: 122_calculatrice_interactive.html

module.exports.NON_TESTABLE = 'Interactive calculator - open 122_calculatrice_interactive.html in browser';

// Your code here
