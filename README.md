# Attik Piscine JS - JavaScript Exercises

61 JavaScript exercises with automated testing framework.

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
Total exercises scanned: 28
Exercises with automated tests: 22
Non-testable exercises (manual): 6
Total tests passed: 69
Pass rate: 100.0%
```

## Structure

- `exercises/` - 61 JavaScript exercises
- `test-framework.js` - Reusable test utility
- `run-tests.js` - Automated test runner


## Adding Tests

```javascript
// ==================== TESTS ====================

if (typeof module !== 'undefined' && module.exports) {
    const test = require('../test-framework');
    
    test.run('Exercise Name', [
        { input: value, expected: result, description: 'desc' }
    ], functionToTest);
}
```

For non-testable exercises:
```javascript
if (typeof module !== 'undefined' && module.exports) {
    module.exports.NON_TESTABLE = 'Reason';
}
```

