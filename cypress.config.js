const { defineConfig } = require("cypress");

module.exports = defineConfig({
<<<<<<< HEAD
  viewportHeight: 1080,
  viewportWidth: 1920,
  watchForFileChanges: false,
  e2e: {
=======
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    watchForFileChanges: false,
>>>>>>> main
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
