const { atualizarJogador, deleteJogador, lerJogador, criarJogador} = require("../services/jogadoresService.js")

const leituraJogador = async function leituraJogador(req, res){
    const jogadorResponse = await lerJogador();
    res.status(200).json(jogadorResponse); 
}
const criaJogador = async function cadastroJogador(req, res){
    let jogador = await criarJogador(req.body);
    jogador.save((err) => {
        if(err){
            res.send(`Não foi possível criar o jogador! Erro:${err.message}`);
        }
        else{
            res.status(201).send('O jogador foi cadastrado!');
        }
    })
}
const atualizaJogador = (req, res) => {
    const id = req.params.id;
    try {
        atualizarJogador(id, req.body);
        res.status(201).send('Jogador atualizado!');
    } catch (error) {
        res.send(`Não foi possível excluir o jogador! Erro: ${error}`);
    }
}
const removerJogador = (req, res) => {
    const id = req.params.id;
    try {
        excluiJogador(id);
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



