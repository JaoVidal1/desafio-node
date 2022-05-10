import express from "express";
import jogadores from "./jogadoresRoutes.js";

const routes = (app) => {
    app.route('/').get((req, res) =>{
        res.status(200).send({titulo: "Desafio"})
    })

    app.use(
        express.json(),
        jogadores
    )
}
export default router