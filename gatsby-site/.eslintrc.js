const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        'prettier',
        'prettier/react'
    ],
    plugins: ['prettier', 'react', 'jsx-a11y', 'import'],
    env: {
        browser: true,
        node: true,
        jquery: true,
        jest: true,
    },
    globals: {
        __DEV__: true,
        __PROD__: true,
        $: true,
        jQuery: true,
        Foundation: true,
    },
    rules: {
        'jsx-a11y/anchor-is-valid': [ERROR, {
            'components': ['Link'],
            'specialLink': ['to']
        }],
        'react/jsx-filename-extension': OFF,
        'prettier/prettier': ERROR,
    },
};

/*
    References:
    =>  jsx-a11y/anchor-is-valid
        https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/121600b0db686e34756394bb79d9c06481803287/docs/rules/anchor-is-valid.md#rule-details
 */