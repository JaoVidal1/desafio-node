const repository = require("../repositories/jogadoresRepository.js")
const lerJogador = async () => {
    const jogadoresResponse = await repository.jogadorBusca();
    const res = jogadoresResponse.map(calculaPremio);
    return res;
}
const excluiJogador = async (id) => {
    return repository.jogadorDeleta(id)
}
const atualizarJogador = async (id, content) => {
    return repository.jogadorAtualiza(id, content);
}
const criarJogador = async(body) => {
    return repository.jogadorCria(body);
}
const calculaPremio = (jogador) => {
    const { moedas } = jogador;
    const medalhas = parseInt(moedas / 10);
    const trofeus = parseInt(medalhas / 3);
    return {
      ...jogador,
      medalhas,
      trofeus
    }
}

module.exports = {
    lerJogador,
    excluiJogador,
    atualizarJogador,
    criarJogador
} 