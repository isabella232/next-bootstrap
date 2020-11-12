module.exports = {
  extends: ['wolox-react', '@wolox/eslint-config-typescript'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react-hooks'],
  settings: {
    react: {
      version: 'detect'
    },
    'import/resolver': {
      // extensions: ['.js', '.jsx', '.ts', '.tsx'],
      alias: [
        ['~components', './components'],
        ['~config', './config'],
        ['~constants', './constants/'],
        ['~services', './services'],
        ['~utils', './utils']
      ]
    }
  },
  parserOptions: {
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  env: {
    browser: true,
    es2020: true,
    node: true,
    jest: true
  },
  ignorePatterns: ['node_modules/', '.next/'],
  rules: {
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'no-console': 1,
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn'
  }
};
