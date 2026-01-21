# Attik Piscine JS - JavaScript Exercises

JavaScript exercises with automated testing framework.

## Quick Start

Run all tests:
```bash
node run-tests.js
```

Run single exercise:
```bash
cd exercices
node 174_headers_et_authentification.js
```

## Test Results

```
📊 SUMMARY

Total exercises scanned: 105
Exercises with automated tests: 42
Non-testable exercises (manual): 23
Total tests passed: 143
Total tests failed: 0

Pass rate: 100.0%

🎉 All automated tests passed!
⚠️  Don't forget to manually test 23 non-testable exercise(s)
```


## Adding Tests

```javascript
// ==================== TESTS ====================

if (module.exports) {
    const test = require('../test-framework');
    
    test.run('Exercise Name', [
        { input: value, expected: result, description: 'desc' }
    ], functionToTest);
}
```

For non-testable exercises:
```javascript
module.exports.NON_TESTABLE = 'Reason';
```

