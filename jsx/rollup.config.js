import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import replace from 'rollup-plugin-replace';


export default {
  input: 'index.jsx',
  output: {
    file: '../app/public/js/index.min.js',
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
  ]
};
