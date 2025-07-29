const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
     setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    baseUrl: 'https://practicesoftwaretesting.com',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
    supportFile: 'cypress/support/e2e.js',
  },
  
   env: {
    apiUrl: 'https://dummyjson.com',
  },
});
