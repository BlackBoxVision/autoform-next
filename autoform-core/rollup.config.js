import nodeResolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import uglify from 'rollup-plugin-uglify';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
    // browser-friendly UMD build
    {
        name: 'AutoFormCore',
        input: 'src/index.js',
        output: {
            file: pkg.browser,
            format: 'umd'
        },
        external: ['react', 'react-dom', 'i18next', 'react-i18next', 'redux-form'],
        globals: {
            react: 'React',
            'i18next': 'i18next',
            'react-dom': 'ReactDOM',
            'redux-form': 'reduxForm',
            'react-i18next': 'reactI18next'
        },
        plugins: [
            nodeResolve(),
            babel({ 
                exclude: ['node_modules/**']
            }),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            minify(),
            uglify()
        ]
    },
    // CommonJS (for Node) and ES module (for bundlers) build.
    // (We could have three entries in the configuration array
    // instead of two, but it's quicker to generate multiple
    // builds from a single configuration where possible, using
    // the `output` option which can specify `file` and `format`)
    {
        input: 'src/index.js',
        output: {
            file: pkg.main,
            format: 'cjs'
        },
        external: ['react', 'react-dom', 'i18next', 'react-i18next', 'redux-form'],
        plugins: [
            nodeResolve(),
            babel({ 
                exclude: ['node_modules/**']
            }),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            minify(),
            uglify()
        ]
    },
    {
        input: 'src/index.js',
        output: {
            file: pkg.module,
            format: 'es'
        },
        external: ['react', 'react-dom', 'i18next', 'react-i18next', 'redux-form'],
        plugins: [
            nodeResolve(),
            babel({ 
                exclude: ['node_modules/**']
            }),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            minify()
        ]
    }
];
