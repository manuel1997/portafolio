module.exports = {
    prefix: '',
    purge: {
      enabled: true,
      content: [
        './src/**/*.{html,ts}',
      ]
    },
    darkMode: 'class', // or 'media' or 'class'
    theme: {
      extend: {
        colors: {
          'amarillo': '#ffb95c',
          'rojo': '#ee3c38',
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
};
