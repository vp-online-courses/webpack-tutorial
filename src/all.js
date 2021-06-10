const context = require.context('./components', true, /\.js$/);

context.keys().forEach(key => {
    const module = context(key);
    const moduleInstance = new module.default();
    moduleInstance.render();
});
