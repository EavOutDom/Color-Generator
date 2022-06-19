/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx}"],
    theme: {
        extend: {
            gridTemplateColumns: {
                "fill-column": "repeat(auto-fit, minmax(223.33px, 1fr))",
            },
            gridTemplateRows: {
                "fill-row": "repeat(auto-fit, minmax(96px, 1fr))",
            },
        },
    },
    plugins: [],
};
