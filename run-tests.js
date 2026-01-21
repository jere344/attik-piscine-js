#!/usr/bin/env node
/**
 * Test Runner for Piscine JS Exercises
 * Runs all test functions in exercise files
 */

const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

// Colors for terminal output
const colors = {
    reset: '\x1b[0m',
    green: '\x1b[32m',
    red: '\x1b[31m',
    yellow: '\x1b[33m',
    blue: '\x1b[34m',
    cyan: '\x1b[36m',
    bold: '\x1b[1m'
};

function colorize(text, color) {
    return `${colors[color]}${text}${colors.reset}`;
}

// Get all exercise files
function getExerciseFiles() {
    const exercisesDir = path.join(__dirname, 'exercises');
    const files = fs.readdirSync(exercisesDir);
    
    return files
        .filter(file => file.endsWith('.js') && !file.includes('.html'))
        .filter(file => {
            const match = file.match(/^(\d+)_/);
            return !!match; // Include all numbered exercises
        })
        .sort((a, b) => {
            const numA = parseInt(a.match(/^(\d+)_/)[1]);
            const numB = parseInt(b.match(/^(\d+)_/)[1]);
            return numA - numB;
        });
}

// Run tests for a specific file
function runTestsForFile(filePath) {
    const fileName = path.basename(filePath);
    
    try {
        // Check if file is marked as non-testable
        const fileContent = fs.readFileSync(filePath, 'utf-8');
        const nonTestableMatch = fileContent.match(/module\.exports\.NON_TESTABLE\s*=\s*['"]([^'"]+)['"]/);
        
        if (nonTestableMatch) {
            return {
                fileName,
                passed: 0,
                failed: 0,
                output: '',
                hasTests: false,
                nonTestable: true,
                reason: nonTestableMatch[1]
            };
        }
        
        // Simply require and run the file
        const output = execSync(`node "${filePath}"`, { 
            encoding: 'utf-8',
            cwd: path.dirname(filePath)
        });
        
        // Parse results from output
        const passedMatch = output.match(/(\d+) passed/);
        const failedMatch = output.match(/(\d+) failed/);
        
        if (passedMatch && failedMatch) {
            return {
                fileName,
                passed: parseInt(passedMatch[1]),
                failed: parseInt(failedMatch[1]),
                output: output,
                hasTests: true,
                nonTestable: false
            };
        }
        
        return {
            fileName,
            passed: 0,
            failed: 0,
            output: output,
            hasTests: false,
            nonTestable: false
        };
        
    } catch (error) {
        return {
            fileName,
            passed: 0,
            failed: 1,
            error: error.message,
            hasTests: false,
            nonTestable: false
        };
    }
}

// Main test runner
function runAllTests() {
    console.log(colorize('🚀 Piscine JS Test Runner - All Exercises', 'cyan'));
    console.log('=' .repeat(80) + '\n');
    
    const exercisesDir = path.join(__dirname, 'exercises');
    const files = getExerciseFiles();
    
    let totalPassed = 0;
    let totalFailed = 0;
    let exercisesWithTests = 0;
    let nonTestableExercises = 0;
    const results = [];
    const nonTestableList = [];
    
    files.forEach(file => {
        const filePath = path.join(exercisesDir, file);
        
        const result = runTestsForFile(filePath);
        
        if (result.nonTestable) {
            nonTestableList.push({ file, reason: result.reason });
            nonTestableExercises++;
        } else if (result.hasTests) {
            console.log(result.output);
            totalPassed += result.passed;
            totalFailed += result.failed;
            exercisesWithTests++;
            results.push(result);
        } else {
            console.log(colorize(`⏭️  ${file}: No tests`, 'yellow'));
        }
    });
    
    // Show non-testable exercises
    if (nonTestableList.length > 0) {
        console.log(colorize('\n📋 NON-TESTABLE EXERCISES (Manual Testing Required)\n', 'yellow'));
        nonTestableList.forEach(({ file, reason }) => {
            console.log(colorize(`⚠️  ${file}`, 'yellow'));
            console.log(colorize(`   Reason: ${reason}`, 'yellow'));
            console.log(colorize('   ➡️  Please test manually\n', 'cyan'));
        });
    }
    
    // Summary
    console.log('='.repeat(80));
    console.log(colorize('\n📊 SUMMARY\n', 'cyan'));
    
    console.log(`Total exercises scanned: ${colorize(files.length, 'blue')}`);
    console.log(`Exercises with automated tests: ${colorize(exercisesWithTests, 'blue')}`);
    console.log(`Non-testable exercises (manual): ${colorize(nonTestableExercises, 'yellow')}`);
    console.log(`Total tests passed: ${colorize(totalPassed, 'green')}`);
    console.log(`Total tests failed: ${colorize(totalFailed, totalFailed > 0 ? 'red' : 'green')}`);
    
    const passRate = totalPassed + totalFailed > 0 
        ? ((totalPassed / (totalPassed + totalFailed)) * 100).toFixed(1)
        : 0;
    
    console.log(`\nPass rate: ${colorize(passRate + '%', passRate >= 80 ? 'green' : passRate >= 50 ? 'yellow' : 'red')}`);
    
    if (totalFailed === 0 && exercisesWithTests > 0) {
        console.log(colorize('\n🎉 All automated tests passed!', 'green'));
        if (nonTestableExercises > 0) {
            console.log(colorize(`⚠️  Don't forget to manually test ${nonTestableExercises} non-testable exercise(s)`, 'yellow'));
        }
    } else if (totalFailed > 0) {
        console.log(colorize('\n⚠️  Some tests failed. Review the output above.', 'yellow'));
    }
    
    console.log('\n' + '='.repeat(80) + '\n');
}

// Run the tests
runAllTests();
