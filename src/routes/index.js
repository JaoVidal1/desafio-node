const jogadoresRoutes = require("./jogadoresRoutes.js")

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(202).send('Desafio')
    })

    app.use(jogadoresRoutes);
};

module.exports = routes 