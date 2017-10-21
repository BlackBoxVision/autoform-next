import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
	// browser-friendly UMD build
    {
        name: 'autoFormBootstrap',
        input: 'src/index.js',
        output: {
            file: pkg.browser,
            format: 'umd',
        },
        external: ['react'],
        globals: {
            react: 'React',
            css: 'classnames',
            PropTypes: 'prop-types',
            reactstrap: 'reactstrap',
            _extends: 'babel-runtime/helpers/extends',
            _inherits: 'babel-runtime/helpers/inherits',
            _createClass: 'babel-runtime/helpers/createClass',
            _defineProperty: 'babel-runtime/helpers/defineProperty',
            _classCallCheck: 'babel-runtime/helpers/classCallCheck',
            _Object$getPrototypeOf: 'babel-runtime/core-js/object/get-prototype-of',
            _objectWithoutProperties: 'babel-runtime/helpers/objectWithoutProperties',
            _possibleConstructorReturn: 'babel-runtime/helpers/possibleConstructorReturn',
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
