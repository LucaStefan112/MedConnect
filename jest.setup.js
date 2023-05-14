import '@testing-library/jest-dom';
import 'jest-extended';

// Custom setup code goes here

// For example, you can configure any setup or teardown actions for your tests
beforeEach(() => {
    // Custom setup actions before each test
});

afterEach(() => {
    // Custom teardown actions after each test
});

// You can also add custom matchers or other test utilities
expect.extend({
    // Custom matcher example
    toBeWithinRange(received, floor, ceiling) {
        const pass = received >= floor && received <= ceiling;
        if (pass) {
            return {
                message: () =>
                    `expected ${received} not to be within range ${floor} - ${ceiling}`,
                pass: true,
            };
        } else {
            return {
                message: () =>
                    `expected ${received} to be within range ${floor} - ${ceiling}`,
                pass: false,
            };
        }
    },
});

// Any other custom setup code or imports can be added here

// Exporting an empty object to satisfy the CommonJS module syntax
module.exports = {};