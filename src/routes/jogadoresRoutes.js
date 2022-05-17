const express = require("express") 
const { readJogador, createJogador, updateJogador, deletarJogador } = require("../controllers/jogadoresController.js")

const router = express.Router()

router
    .get('/jogadores', leituraJogador)
    .post("/jogadores", criaJogador)
    .put("/jogadores/:id", atualizaJogador)
    .delete("/jogadores/:id", excluiJogador)

module.exports = router 