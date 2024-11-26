const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions:{
      overwrite: true,
      reportFilename: 'reporte-tes',
      //timestamp: 'shorDate',//Agrega fecha
      inlineAssets:true //Independiza el reporte HTML

  },
  

    e2e: {
    screenshotOnRunFailure:true,
    screenshotsFolder:"cypress/screenshosts,",
    downloadsFolder: "cypress/this.downloads/test",

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});
