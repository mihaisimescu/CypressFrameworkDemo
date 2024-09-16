import { defineConfig } from "cypress";
import createBundler from "@bahmutov/cypress-esbuild-preprocessor";
import { addCucumberPreprocessorPlugin } from "@badeball/cypress-cucumber-preprocessor";
import createEsbuildPlugin from "@badeball/cypress-cucumber-preprocessor/esbuild";

module.exports = defineConfig({
  e2e: {

    baseUrl: 'https://parabank.parasoft.com/parabank/',
    specPattern: ['cypress/e2e/**/*.cy.{ts,js}', 'cypress/backend/**/*.cy.{ts,js}', 'cypress/e2e/**/*.feature'],

    env: {
      logLevel: "VERBOSE",
    },
    
    async setupNodeEvents(on, config) {

      // implement node event listeners here
      await addCucumberPreprocessorPlugin(on, config)

      on('file:preprocessor',
        createBundler({
          plugins: [createEsbuildPlugin(config)]
        })
      );
      return config
    },
  },
});
