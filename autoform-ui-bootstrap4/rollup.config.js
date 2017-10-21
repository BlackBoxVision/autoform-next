import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
    {
        entry: 'src/index.js',
        dest: pkg.browser,
        format: 'umd',
        plugins: [resolve(), babel({ runtimeHelpers: true }), commonjs()]
    },
    {
        entry: 'src/index.js',
        external: Object.keys(pkg.dependencies),
        targets: [
            {
                dest: pkg.main,
                format: 'cjs'
            },
            {
                dest: pkg.module,
                format: 'es'
            }
        ],
        plugins: [babel({ runtimeHelpers: true })]
    }
];
