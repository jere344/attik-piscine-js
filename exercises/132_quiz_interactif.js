/*
 * Exercise 132: Quiz interactif
 * Exercice 44 / 105
 * ============================================================
 */

/*
 * Créez un quiz à choix multiples avec système de score.
 */

/*
 * - ✅ Afficher les questions et leurs options de réponse
 * - ✅ Vérifier si la réponse est correcte
 * - ✅ Calculer et afficher le score
 * - ✅ Naviguer entre les questions
 * - ✅ Afficher le résultat final avec possibilité de recommencer
 * - Affichage : "Question 1/3 : Quelle est la capitale de la France ?"
 * - 4 boutons : Paris, Londres, Berlin, Madrid
 * - Clic sur "Paris" → Message "Bonne réponse !" + passage à la question suivante
 * - Après la dernière question → "Quiz terminé ! Votre score: 2/3"
 */

/*
 * Examples:
 * ------------------------------------------------------------
 * const questions = [
 *     {
 *         question: "Quelle est la capitale de la France ?",
 *         options: ["Paris", "Londres", "Berlin", "Madrid"],
 *         reponse: 0  // Index de la bonne réponse
 *     },
 *     {
 *         question: "Combien font 2 + 2 ?",
 *         options: ["3", "4", "5", "6"],
 *         reponse: 1
 *     }
 * ];
 */

// ==================== SOLUTION ====================

const questions = [
    {
        question: "Quelle est la capitale de la France ?",
        options: ["Paris", "Londres", "Berlin", "Madrid"],
        reponse: 0
    },
    {
        question: "Combien font 2 + 2 ?",
        options: ["3", "4", "5", "6"],
        reponse: 1
    },
    {
        question: "Quel est le langage utilisé pour ce quiz ?",
        options: ["Python", "Java", "JavaScript", "C++"],
        reponse: 2
    }
];

if (typeof document !== 'undefined') {
    let currentQuestion = 0;
    let score = 0;
    
    const questionElement = document.getElementById('question');
    const optionsElement = document.getElementById('options');
    const resultElement = document.getElementById('result');
    const nextButton = document.getElementById('next');
    const restartButton = document.getElementById('restart');
    const scoreElement = document.getElementById('score');
    
    function afficherQuestion() {
        const q = questions[currentQuestion];
        questionElement.textContent = `Question ${currentQuestion + 1}/${questions.length} : ${q.question}`;
        optionsElement.innerHTML = '';
        resultElement.textContent = '';
        nextButton.style.display = 'none';
        
        q.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.textContent = option;
            button.className = 'option';
            button.addEventListener('click', () => verifierReponse(index));
            optionsElement.appendChild(button);
        });
    }
    
    function verifierReponse(index) {
        const q = questions[currentQuestion];
        const buttons = optionsElement.querySelectorAll('.option');
        
        buttons.forEach(btn => btn.disabled = true);
        
        if (index === q.reponse) {
            resultElement.textContent = '✅ Bonne réponse !';
            resultElement.style.color = 'green';
            score++;
            buttons[index].style.background = '#4CAF50';
        } else {
            resultElement.textContent = `❌ Mauvaise réponse ! La bonne réponse était : ${q.options[q.reponse]}`;
            resultElement.style.color = 'red';
            buttons[index].style.background = '#f44336';
            buttons[q.reponse].style.background = '#4CAF50';
        }
        
        currentQuestion++;
        
        if (currentQuestion < questions.length) {
            nextButton.style.display = 'block';
        } else {
            afficherResultatFinal();
        }
    }
    
    function afficherResultatFinal() {
        questionElement.textContent = 'Quiz terminé !';
        optionsElement.innerHTML = '';
        scoreElement.textContent = `Votre score : ${score}/${questions.length}`;
        scoreElement.style.display = 'block';
        
        const percentage = (score / questions.length * 100).toFixed(0);
        if (percentage >= 80) {
            resultElement.textContent = `Excellent ! Vous avez ${percentage}% de bonnes réponses !`;
            resultElement.style.color = 'green';
        } else if (percentage >= 50) {
            resultElement.textContent = `Pas mal ! ${percentage}% de bonnes réponses.`;
            resultElement.style.color = 'orange';
        } else {
            resultElement.textContent = `Vous pouvez mieux faire... ${percentage}%`;
            resultElement.style.color = 'red';
        }
        
        restartButton.style.display = 'block';
    }
    
    nextButton.addEventListener('click', () => {
        afficherQuestion();
    });
    
    restartButton.addEventListener('click', () => {
        currentQuestion = 0;
        score = 0;
        scoreElement.style.display = 'none';
        restartButton.style.display = 'none';
        afficherQuestion();
    });
    
    // Démarrer le quiz
    afficherQuestion();
}

// ==================== NON_TESTABLE ====================
// This exercise requires DOM interaction and cannot be tested automatically.
// Please open: 132_quiz_interactif.html

module.exports.NON_TESTABLE = 'Interactive quiz - open 132_quiz_interactif.html in browser';
