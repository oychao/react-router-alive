import babel from 'rollup-plugin-babel';

export default [
  {
    input: './index.js',
    output: [
      {
        file: 'bin/bundle.js',
        format: 'cjs'
      }
    ],
    plugins: [
      babel({
        exclude: 'node_modules/**'
      })
    ],
    external: [
      'fs',
      'path',
      'jsonfile',
      'path-to-regexp',
      'react',
      'react-router',
      'tiny-invariant',
      'tiny-warning'
    ]
  }
];
