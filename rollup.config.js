import nodeResolve from 'rollup-plugin-node-resolve';
import minify from 'rollup-plugin-babel-minify';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import babel from 'rollup-plugin-babel';

// browser-friendly UMD build
export function buildUMD({ file, name, external, globals }) {
    return {
        name: name,
        output: {
            file: file,
            format: 'umd'
        },
        external: external,
        globals: globals, 
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
}

// CommonJS (for Node) build
export function buildCJS({ file, name, external, globals }) {
    return {
        input: 'src/index.js',
        output: {
            file: file,
            format: 'cjs'
        },
        external: external,
        globals: globals, 
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
}

// ES module (for bundlers) build.
export function buildES({ file, name, external, globals }) {
    return {
        input: 'src/index.js',
        output: {
            file: file,
            format: 'es'
        },
        external: external,
        globals: globals, 
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
}