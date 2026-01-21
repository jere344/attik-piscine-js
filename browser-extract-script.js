// Browser Console Script to Extract All JavaScript Questions
// Instructions:
// 1. Open https://book-st-pescinejs.onrender.com/Javascript in your browser
// 2. Enter access code: [code donné par le professeur]
// 3. Open browser DevTools (F12) and go to Console tab
// 4. Paste this entire script and press Enter
// 5. Wait for the script to complete (it will click through all 61 exercises)
// 6. The result will be stored in window.allQuestions
// 7. To save: Run this in console: copy(JSON.stringify(window.allQuestions, null, 2))
//    Then paste into a file

(async function extractAllQuestions() {
    const allQuestions = {};
    const totalExercises = 105  ;
    const start_at = 1 ;
    
    console.log('%c🚀 Starting extraction of all JavaScript questions...', 'color: #00ff00; font-size: 16px; font-weight: bold');
    console.log(`Total exercises to extract: ${totalExercises}\n`);
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    
    async function waitForPageChange(previousExerciseNum, maxWaitMs = 10000) {
        const startTime = Date.now();
        while (Date.now() - startTime < maxWaitMs) {
            await sleep(100);
            const currentQuestion = extractCurrentQuestion();
            if (currentQuestion && currentQuestion.exerciseNumber !== previousExerciseNum) {
                return true;
            }
        }
        return false;
    }
    
    function extractCurrentQuestion() {
        try {
            // Get exercise number from H2 title
            const exerciseTitle = document.querySelector('h2[id^="exercice"]');
            if (!exerciseTitle) {
                return null;
            }
            
            // Extract exercise number (can be "123" or "200.3" format)
            // Match pattern: "Exercice" followed by numbers and optional dot+numbers
            const exerciseNumMatch = exerciseTitle.textContent.match(/Exercice\s+([\d.]+)/i);
            const exerciseNum = exerciseNumMatch ? exerciseNumMatch[1] : 'unknown';
            
            // Get the question tab content (should be visible by default)
            const questionTab = document.querySelector('[role="tabpanel"][id*="tabpanel-0"]');
            if (!questionTab || questionTab.hidden) {
                return null;
            }
            
            // Extract the main title (h1)
            const mainTitle = questionTab.querySelector('h1');
            const title = mainTitle ? mainTitle.textContent.trim() : 'No title';
            
            // Get progress indicator
            const progressText = document.querySelector('[data-testid="stCaptionContainer"] p');
            const progress = progressText ? progressText.textContent.trim() : '';
            
            // Extract paragraphs
            const paragraphs = [];
            const pElements = questionTab.querySelectorAll('p');
            pElements.forEach(p => {
                const text = p.innerText || p.textContent;
                if (text && text.trim() && 
                    !text.includes('📝') && 
                    !text.includes('✅') && 
                    !text.includes('🔒') &&
                    !text.includes('💡') &&
                    !text.includes('Paramètres') &&
                    text.length > 3) {
                    paragraphs.push(text.trim());
                }
            });
            
            // Extract list items
            const listItems = [];
            const liElements = questionTab.querySelectorAll('li');
            liElements.forEach(li => {
                const text = li.innerText || li.textContent;
                if (text && text.trim()) {
                    listItems.push(text.trim());
                }
            });
            
            // Extract headings (h2, h3, h4)
            const headings = [];
            questionTab.querySelectorAll('h2, h3, h4').forEach(h => {
                const text = h.innerText || h.textContent;
                if (text && text.trim() && !text.includes('Exercice')) {
                    headings.push({
                        level: h.tagName.toLowerCase(),
                        text: text.trim()
                    });
                }
            });
            
            // Extract code examples
            const codeExamples = [];
            const codeBlocks = questionTab.querySelectorAll('[data-testid="stCode"] pre, pre code');
            codeBlocks.forEach(block => {
                const code = (block.innerText || block.textContent).trim();
                if (code && !codeExamples.includes(code)) {
                    codeExamples.push(code);
                }
            });
            
            return {
                exerciseNumber: exerciseNum,
                title: title,
                paragraphs: paragraphs,
                listItems: listItems,
                headings: headings,
                codeExamples: codeExamples,
                progress: progress
            };
        } catch (error) {
            console.error('Error extracting question:', error);
            return null;
        }
    }
    
    function clickNextButton() {
        const buttons = Array.from(document.querySelectorAll('button'));
        const nextButton = buttons.find(btn => {
            const text = btn.textContent || btn.innerText;
            return text.includes('Suivant') || text.includes('➡️');
        });
        
        if (nextButton && !nextButton.disabled) {
            nextButton.click();
            return true;
        }
        return false;
    }
    
    // Extract all questions
    for (let i = start_at; i <= totalExercises; i++) {
        await sleep(300); // Small initial delay
        
        const questionData = extractCurrentQuestion();
        
        if (questionData) {
            const key = `exercise_${questionData.exerciseNumber.replace('.', '_').padStart(3, '0')}`;
            allQuestions[key] = questionData;
            console.log(`%c✓ ${i}/${totalExercises}: [${questionData.exerciseNumber}] ${questionData.title}`, 'color: #00cc00');
        } else {
            console.error(`%c✗ Failed to extract exercise ${i}`, 'color: #ff0000');
        }
        
        // Click next button (except for last exercise)
        if (i < totalExercises) {
            const clicked = clickNextButton();
            if (!clicked) {
                console.error(`%c⚠ Could not find Next button. Stopping at exercise ${i}.`, 'color: #ff9900');
                break;
            }
            
            // Wait for the page to change to next exercise
            const currentExerciseNum = questionData ? questionData.exerciseNumber : null;
            const pageChanged = await waitForPageChange(currentExerciseNum, 10000);
            
            if (!pageChanged) {
                console.error(`%c⚠ Timeout waiting for next exercise after ${currentExerciseNum}`, 'color: #ff9900');
            }
        }
    }
    
    console.log('\n%c=== EXTRACTION COMPLETE ===', 'color: #00ff00; font-size: 16px; font-weight: bold');
    console.log(`%cTotal exercises extracted: ${Object.keys(allQuestions).length}`, 'color: #00ccff; font-size: 14px');
    
    // Store in window object for easy access
    window.allQuestions = allQuestions;
    
    console.log('\n%c📋 To save the data:', 'color: #ffff00; font-size: 14px; font-weight: bold');
    console.log('%c1. Run: copy(JSON.stringify(window.allQuestions, null, 2))', 'color: #00ccff');
    console.log('%c2. Paste the clipboard content into a file', 'color: #00ccff');
    console.log('\n%cOr access directly via: window.allQuestions', 'color: #888888');
    
    return allQuestions;
})();
