import pluginJs from '@eslint/js'
// const react = require('eslint-plugin-react')
import eslintReact from 'eslint-plugin-react'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import prettierPlugin from 'eslint-config-prettier'
import perfectionist from 'eslint-plugin-perfectionist'
import eslintConfigPrettier from 'eslint-config-prettier'
import tseslint from 'typescript-eslint'
import unusedImports from 'eslint-plugin-unused-imports'

export default tseslint.config(
    // globalIgnores(['./webpack.config.js', './vite.config.ts']),
    pluginJs.configs.recommended,
    {
        ignores: [
            'build',
            'node_modules',
            'cypress',
            'config',
            'scripts',
            'vite.config.ts',
            'webpack.config.ts',
            'cypress.config.ts',
        ],
    },
    tseslint.configs.recommended,
    {
        files: ['**/*.{ts,tsx}'],
        plugins: {
            '@typescript-eslint': tseslint.plugin,
            react: eslintReact,
            'react-hooks': reactHooks,
            'react-refresh': reactRefresh,
            prettier: prettierPlugin,
            perfectionist,
            'unused-imports': unusedImports,
        },
        languageOptions: {
            parserOptions: { project: ['tsconfig.json'] },
            globals: {
                ...globals.browser,
            },
        },
        rules: {
            ...eslintConfigPrettier.rules,
            'no-unused-vars': 'off',
            '@typescript-eslint/no-unused-vars': 'off',
            '@typescript-eslint/ban-ts-comment': 'off',
            '@typescript-eslint/no-explicit-any': 'warn',
            'no-undef': 'warn',
            'perfectionist/sort-imports': 'error',
            'unused-imports/no-unused-imports': 'error',
            'unused-imports/no-unused-vars': [
                'warn',
                {
                    vars: 'all',
                    varsIgnorePattern: '^_',
                    args: 'after-used',
                    argsIgnorePattern: '^_',
                },
            ],
        },
    }
)
