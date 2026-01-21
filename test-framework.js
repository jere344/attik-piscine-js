/**
 * Simple Test Framework for Piscine JS Exercises
 * Usage in exercise files:
 * 
 * const test = require('../../test-framework');
 * 
 * test.run('Exercise Name', [
 *   { input: [args], expected: result },
 *   ...
 * ], functionToTest);
 */

class TestFramework {
    constructor() {
        this.totalPassed = 0;
        this.totalFailed = 0;
        this.results = [];
    }

    /**
     * Compare two values for equality (deep comparison for objects/arrays)
     */
    isEqual(actual, expected) {
        if (actual === expected) return true;
        
        if (typeof actual !== typeof expected) return false;
        
        if (Array.isArray(actual) && Array.isArray(expected)) {
            if (actual.length !== expected.length) return false;
            return actual.every((val, idx) => this.isEqual(val, expected[idx]));
        }
        
        if (typeof actual === 'object' && actual !== null && expected !== null) {
            const keysA = Object.keys(actual);
            const keysB = Object.keys(expected);
            if (keysA.length !== keysB.length) return false;
            return keysA.every(key => this.isEqual(actual[key], expected[key]));
        }
        
        return false;
    }

    /**
     * Format value for display
     */
    formatValue(value) {
        if (Array.isArray(value)) {
            return `[${value.join(', ')}]`;
        }
        if (typeof value === 'object' && value !== null) {
            return JSON.stringify(value);
        }
        if (typeof value === 'string') {
            return `"${value}"`;
        }
        return String(value);
    }

    /**
     * Run a single test
     */
    runTest(testCase, fn, index) {
        try {
            // Handle both single input and array of inputs
            const args = Array.isArray(testCase.input) ? testCase.input : [testCase.input];
            const actual = fn(...args);
            const success = this.isEqual(actual, testCase.expected);
            
            return {
                success,
                index: index + 1,
                input: testCase.input,
                expected: testCase.expected,
                actual,
                description: testCase.description
            };
        } catch (error) {
            return {
                success: false,
                index: index + 1,
                input: testCase.input,
                expected: testCase.expected,
                actual: null,
                error: error.message,
                description: testCase.description
            };
        }
    }

    /**
     * Run a single async test
     */
    async runAsyncTest(testCase, fn, index) {
        try {
            const args = Array.isArray(testCase.input) ? testCase.input : [testCase.input];
            const actual = await fn(...args);
            const success = this.isEqual(actual, testCase.expected);
            
            return {
                success,
                index: index + 1,
                input: testCase.input,
                expected: testCase.expected,
                actual,
                description: testCase.description
            };
        } catch (error) {
            return {
                success: false,
                index: index + 1,
                input: testCase.input,
                expected: testCase.expected,
                actual: null,
                error: error.message,
                description: testCase.description
            };
        }
    }

    /**
     * Run all tests for a function
     * @param {string} exerciseName - Name of the exercise
     * @param {Array} testCases - Array of test cases
     * @param {Function} fn - Function to test
     * @param {boolean} silent - If true, don't print output
     */
    run(exerciseName, testCases, fn, silent = false) {
        if (!silent) {
            console.log(`🧪 Running tests for ${exerciseName}\n`);
        }
        
        let passed = 0;
        let failed = 0;
        const testResults = [];
        
        testCases.forEach((testCase, index) => {
            const result = this.runTest(testCase, fn, index);
            testResults.push(result);
            
            if (result.success) {
                passed++;
                if (!silent) {
                    console.log(`✅ Test ${result.index}: PASSED`);
                    if (result.description) {
                        console.log(`   ${result.description}`);
                    }
                }
            } else {
                failed++;
                if (!silent) {
                    console.log(`❌ Test ${result.index}: FAILED`);
                    if (result.description) {
                        console.log(`   ${result.description}`);
                    }
                }
            }
            
            if (!silent) {
                const inputStr = Array.isArray(testCase.input) 
                    ? testCase.input.map(v => this.formatValue(v)).join(', ')
                    : this.formatValue(testCase.input);
                    
                console.log(`   Input: ${inputStr}`);
                console.log(`   Expected: ${this.formatValue(result.expected)}`);
                console.log(`   Actual: ${this.formatValue(result.actual)}`);
                if (result.error) {
                    console.log(`   Error: ${result.error}`);
                }
                console.log('');
            }
        });
        
        if (!silent) {
            console.log(`📊 Results: ${passed} passed, ${failed} failed\n`);
        }
        
        this.totalPassed += passed;
        this.totalFailed += failed;
        this.results.push({
            exerciseName,
            passed,
            failed,
            total: testCases.length,
            testResults
        });
        
        return { passed, failed, total: testCases.length };
    }

    /**
     * Run all tests for an async function
     * @param {string} exerciseName - Name of the exercise
     * @param {Array} testCases - Array of test cases
     * @param {Function} fn - Async function to test
     * @param {boolean} silent - If true, don't print output
     */
    async runAsync(exerciseName, testCases, fn, silent = false) {
        if (!silent) {
            console.log(`\n🧪 Running tests for ${exerciseName}\n`);
        }
        
        let passed = 0;
        let failed = 0;
        const testResults = [];
        
        for (let index = 0; index < testCases.length; index++) {
            const testCase = testCases[index];
            const result = await this.runAsyncTest(testCase, fn, index);
            testResults.push(result);
            
            if (result.success) {
                passed++;
                if (!silent) {
                    console.log(`✅ Test ${result.index}: PASSED`);
                    if (result.description) {
                        console.log(`   ${result.description}`);
                    }
                }
            } else {
                failed++;
                if (!silent) {
                    console.log(`❌ Test ${result.index}: FAILED`);
                    if (result.description) {
                        console.log(`   ${result.description}`);
                    }
                }
            }
            
            if (!silent) {
                const inputStr = Array.isArray(testCase.input) 
                    ? testCase.input.map(v => this.formatValue(v)).join(', ')
                    : this.formatValue(testCase.input);
                    
                console.log(`   Input: ${inputStr}`);
                console.log(`   Expected: ${this.formatValue(result.expected)}`);
                console.log(`   Actual: ${this.formatValue(result.actual)}`);
                if (result.error) {
                    console.log(`   Error: ${result.error}`);
                }
                console.log('');
            }
        }
        
        if (!silent) {
            console.log(`📊 Results: ${passed} passed, ${failed} failed\n`);
        }
        
        this.totalPassed += passed;
        this.totalFailed += failed;
        this.results.push({
            exerciseName,
            passed,
            failed,
            total: testCases.length,
            testResults
        });
        
        return { passed, failed, total: testCases.length };
    }

    /**
     * Get summary of all tests run
     */
    getSummary() {
        return {
            totalPassed: this.totalPassed,
            totalFailed: this.totalFailed,
            total: this.totalPassed + this.totalFailed,
            results: this.results
        };
    }

    /**
     * Reset test counts
     */
    reset() {
        this.totalPassed = 0;
        this.totalFailed = 0;
        this.results = [];
    }
}

// Export singleton instance
const testFramework = new TestFramework();

module.exports = testFramework;
