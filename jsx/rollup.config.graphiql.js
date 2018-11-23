import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';
import json from 'rollup-plugin-json';
import builtins from 'rollup-plugin-node-builtins';
import globals from 'rollup-plugin-node-globals';


export default {
  input: 'graphiql.jsx',
  output: {
    file: '../app/public/js/graphiql.min.js',
    format: 'iife',
    sourcemap: 'inline',
  },
  plugins: [
    babel({
      exclude: "node_modules/**",
      babelrc: false,
      presets: [ "@babel/react" ],
    }),
    replace({
      'process.env.NODE_ENV': JSON.stringify( 'production' )
    }),
    resolve(),
    commonjs(),
    json(),
    builtins(),
    globals()
  ]
};
