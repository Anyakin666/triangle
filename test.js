const assert = require('node:assert');
const solution = require('./solution.js');

let passed = 0;
let total = 0;

function runTest(name, testFn) {
    total++;
    try {
        testFn();
        console.log(`✓ ${name}`);
        passed++;
    } catch (err) {
        console.error(`✗ ${name}`);
        console.error(`  ${err.message}`);
    }
}

runTest('n = 1', () => {
    assert.strictEqual(solution.printNumberTriangle(1), '1\n');
});

runTest('n = 3', () => {
    assert.strictEqual(solution.printNumberTriangle(3), '1\n2 3\n4 5 6\n');
});

runTest('n = 5', () => {
    assert.strictEqual(solution.printNumberTriangle(5), '1\n2 3\n4 5 6\n7 8 9 10\n11 12 13 14 15\n');
});

console.log(`\n✅ Пройдено ${passed}/${total} тестов`);

if (passed !== total) process.exit(1);