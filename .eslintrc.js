export default {
    'env': {
        'browser': true,
        'es2021': true,
        'node': true
    },
    'extends': 'eslint:recommended',
    'overrides': [],
    'parserOptions': {
        'ecmaVersion': 'latest',
        'sourceType': 'module'
    },
    'rules': {},
    'ignorePatterns': [
        'node_modules/',
        '**/node_modules/',
        '/**/node_modules/*',
        'out/',
        'dist/',
        'build/',
        './coverage',
        './src/__test__'
    ]
}
