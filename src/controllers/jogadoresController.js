const { atualizarJogador, deleteJogador, lerJogador, criarJogador} = require("../services/jogadoresService.js")

const leituraJogador = async function leituraJogador(req, res){
    const jogadorResponse = await lerJogador();
    res.status(200).json(jogadorResponse); 
}
const criaJogador = async function cadastroJogador(req, res){
    try {
        const dadosJogador = req.body
        await criarJogador(dadosJogador);
        res.status(201).send('O jogador foi cadastrado!');
    } catch (error) {
        res.send(`Não foi possível criar o jogador! Erro:${error.message}`);
    }
}
const atualizaJogador = (req, res) => {
    const id = req.params.id;
    const dadosJogador = req.body
    try {
        await atualizarJogador(id, dadosJogador);
        res.status(201).send('Jogador atualizado!');
    } catch (error) {
        res.send(`Não foi possível excluir o jogador! Erro: ${error.message}`);
    }
}
const removerJogador = (req, res) => {
    const id = req.params.id;
    try {
        await excluiJogador(id);
        res.status(201).send('O jogador foi excluído!');
    } catch (error) {
        res.send(`Não foi possível excluir o jogador! Erro: ${error}`);
    }
}
module.exports = {
    atualizarJogador,
    leituraJogador,
    criaJogador,
    atualizaJogador,
    removerJogador
}
