const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'jzteuw',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
