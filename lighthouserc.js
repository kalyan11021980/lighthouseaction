module.exports = {
  ci: {
    collect: {
      startServerCommand: "npm run start",
      numberOfRuns: 3,
      url: ["http://localhost:3000"],
    },
    // assert: {
    //   assertions: {
    //     "categories:performance": ["error", { minScore: 0.8 }],
    //     "categories:accessibility": ["error", { minScore: 0.8 }],
    //     "categories:best-practices": ["error", { minScore: 0.8 }],
    //     "categories:seo": ["error", { minScore: 0.8 }],
    //     "categories.pwa": "off",
    //   },
    // },
    upload: {
      target: "temporary-public-storage",
    },
  },
};
