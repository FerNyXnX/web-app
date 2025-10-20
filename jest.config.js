module.exports = {
  testEnvironment: 'jsdom',
  setupFilesAfterEnv: ['<rootDir>/src/setupTests.js'],
  moduleNameMapper: {
    '\\.(css|less|scss|sass)$': 'identity-obj-proxy',
  },
  transform: {
    '^.+\\.(js|jsx)$': 'babel-jest',
  },
  coveragePathIgnorePatterns: [
    '/node_modules/',
    'src/index.js',
    'src/reportWebVitals.js',
    'src/setupTests.js',
    '\\.styles\\.js$',
    'src/App\\.jsx',
    'src/pages/',
    'src/styles/',
    'src/hooks/useMovies\\.js',
    'src/redux/store\\.js',
    'src/components/MovieDetail/',
  ],
  coverageThreshold: {
  global: {
    statements: 57,
    branches: 45,
    functions: 59,
    lines: 56,
  },
}
};