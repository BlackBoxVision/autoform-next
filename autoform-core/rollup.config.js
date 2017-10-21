import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
    {
        name: 'autoform-core',
        input: 'src/index.js',
        output: {
            file: pkg.browser,
            format: 'umd'
        },
        external: ['react'],
        plugins: [babel({ runtimeHelpers: true }), commonjs({
            exclude: [
              'node_modules/react/**',
              'node_modules/react-dom/**'
            ]
        })]
    },
    {
        input: 'src/index.js',
        output: [
            {
                file: pkg.main,
                format: 'cjs'
            },
            {
                file: pkg.module,
                format: 'es'
            }
        ],
        external: ['react'],
        plugins: [babel({ runtimeHelpers: true }), commonjs({
            exclude: [
              'node_modules/react/**',
              'node_modules/react-dom/**'
            ]
        })]
    }
];
