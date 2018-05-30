export default [
    {
        input: './index.js',
        output: [
            {
                file: 'bin/bundle.js',
                format: 'cjs'
            }
        ],
        plugins: [],
        external: ['fs', 'path', 'jsonfile']
    }
];
