import nodeResolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';

import pkg from './package.json';

export default [
	// browser-friendly UMD build
    {
        name: 'AutoFormBootstrap4',
        input: 'src/index.js',
        output: {
            file: pkg.browser,
            format: 'umd',
        },
        external: ['react', 'react-dom', 'reactstrap', 'prop-types'],
        globals: {
            react: 'React',
            css: 'classnames',
            'react-dom': 'ReactDOM',
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
            nodeResolve(),
            babel({ 
                runtimeHelpers: true,
                exclude: ['node_modules/**']
            }),
            commonjs(),
            replace({
                'process.env.NODE_ENV': JSON.stringify('production'),
            }),
            minify()
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
        external: ['react', 'react-dom', 'reactstrap', 'prop-types'],
        plugins: [
            nodeResolve(),
            babel({ 
                runtimeHelpers: true,
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
