import express from "express";
import JogadorController from "../controllers/jogadoresController.js";

const router = express.Router();

router
.get("/jogadores", JogadorController.listarJogadores)
.get("/jogadores/:id", JogadorController.listarJogadorPorID)
.post("/jogadores", JogadorController.cadastrarJogador)
.put("/jogadores/:id", JogadorController.atualizarJogador)
.delete("/jogadores/:id", JogadorController.excluirJogador)
.put("/jogadores/:id", JogadorController.premioJogador)
export default router;