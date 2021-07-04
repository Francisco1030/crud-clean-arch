module.exports = {
  coverageDirectory: "coverage",
  testEnvironment: "node",
  collectCoverageFrom: ["**/test/**/*.js"],
  coverageReporters: ['text', 'lcov', 'html'],
  collectCoverageFrom: [
    '**/*.{js,jsx}',
    '!**/.*.{js,jsx}',
    '!jest.config.js',
    '!prettier.config.js',
    '!**/coverage/**',
    '!**/node_modules/**',
    '!**/test/**',
  ],
};
