module.exports = {
    mode: 'jit',
    content: ["./src/**/*.html"],
    darkTheme: 'media',
    theme: {
        extend: {
            gridTemplateColumns: {
                // Simple 8 row grid
                '18': 'repeat(18, minmax(0, 1fr))',
            },
            gridTemplateRows: {
                // Simple 8 row grid
                '10': 'repeat(10, minmax(0, 1fr))',
            }
        }
    },
    plugins: [],
}