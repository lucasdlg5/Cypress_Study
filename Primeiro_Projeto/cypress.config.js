const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'mochawesome',
  "reporterOptions": {
    "reportDir": "cypress/report/mochawesome-report",
    "overwrite": true,
    "html": true,
    "json": false,
    "timestamp": "mmddyyyy_HHMMss"
    },
    projectId: "o2s4x8",

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
