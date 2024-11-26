const { defineConfig } = require("cypress");

module.exports = defineConfig({
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions:{
      charts: true, //Para habilitar gráficos estadísticos
      overwrite: true,
      reportFilename: 'reporte-tes',
      //timestamp: 'shorDate',//Agrega fecha
      embeddedScreenshots: true,
      inlineAssets:true, //Independiza el reporte HTML
      ignoreVideos: false, //Ignore los videos en el Reporte HTML 

  },
  
    e2e: {
      viewportWidth: 1280, // Ancho del viewport
      viewportHeight: 720, // Alto del viewport
      screenshotOnRunFailure: true, //realiza captura en caso falle 
      screenshotsFolder: "cypress/screenshots", //ruta de screenshots
      video: true,  // para habilitar la catura devideo
      videosFolder: "cypress/videos", // rutas de video

    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
});

