const nextJest = require('next/jest');

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: './',
});

const customJestConfig = {
  moduleNameMapper: {
    // Handle module aliases (this will be automatically configured for you soon)
    '^@/(.)$': '<rootDir>/src/$1',

    '^@/public/(.)$': '<rootDir>/public/$1',
  },
  setupFilesAfterEnv: ['./jest.setup.js'],
  clearMocks: true,
  collectCoverage: true,

    collectCoverageFrom: [
      './components/**/*.{js,jsx,ts,tsx}', // Include components folder
      './pages/**/*.{js,jsx,ts,tsx}', // Include pages folder
      './__test__/**/*.{js,jsx,ts,tsx}',
      './utils/**/*.{js,jsx,ts,tsx}',
      './services/**/*.{js,jsx,ts,tsx}'
    ],

  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['./jest.setup.js'],
};

module.exports = createJestConfig(customJestConfig);