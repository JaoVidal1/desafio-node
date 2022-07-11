const express = require("express") 
const { leituraJogador, criaJogador, atualizaJogador, removerJogador } = require("../controllers/jogadoresController.js")

const router = express.Router()

router
    .get('/jler', leituraJogador)
    .post("/jcria", criaJogador)
    .put("/jogadores/:id", atualizaJogador)
    .delete("/jogadores/:id", removerJogador)

module.exports = router 