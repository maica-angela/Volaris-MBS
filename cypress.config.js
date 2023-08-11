module.exports = {
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on("task", {
        setData: newData => {
            data = newData !== null ? { ...data, ...newData } : {};
            return data;
        },
        getData: () => {
            return data;
        },
        cleanData: () => {
            return {};
        },
    })

    },
    defaultCommandTimeout: 25000,

    
  },
};
