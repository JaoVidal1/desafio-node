const userRoutes = require("./routes-jogadoresRoutes.js")

const routes = (app) => {
    app.route('/').get((req, res) => {
        res.status(202).send('Desafio')
    })

    app.use(
        userRoutes
        );
};

module.exports = routes 