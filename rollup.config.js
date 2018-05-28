export default [
    {
        input: './index.js',
        output: [
            {
                file: 'bin/bundle.js',
                format: 'umd'
            }
        ],
        plugins: [],
        external: ['fs', 'path', 'jsonfile']
    }
];
