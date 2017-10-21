import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
	// browser-friendly UMD build
    {
        name: 'autoForm',
        input: 'src/index.js',
        output: {
            file: pkg.browser,
            format: 'umd'
        },
        external: ['react'],
        globals: {
            react: 'React'
        },
        plugins: [
            resolve(),
            babel({ 
                runtimeHelpers: true,
                exclude: ['node_modules/**']
            }),
            commonjs({
                exclude: [
                'node_modules/react/**',
                'node_modules/react-dom/**'
                ]
            })
        ]
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
	// (We could have three entries in the configuration array
	// instead of two, but it's quicker to generate multiple
	// builds from a single configuration where possible, using
	// the `output` option which can specify `file` and `format`)
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
        plugins: [
            resolve(),
            babel({ 
                runtimeHelpers: true,
                exclude: ['node_modules/**']
            }),
            commonjs({
                exclude: [
                'node_modules/react/**',
                'node_modules/react-dom/**'
                ]
            })
        ]
    }
];
