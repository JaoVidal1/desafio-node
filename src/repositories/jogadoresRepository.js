const jogadores = require("../models/Jogador.js")
const jogadorBusca = async () => {
    return jogadores.find().lean()
}
const jogadorDeleta = async (id) => {
    return jogadores.findByIdAndDelete(id)
}
const jogadorAtualiza = async (id, content) => {
    return jogadores.findByIdAndUpdate(id, {$set: content})
}
const jogadorCria = async (body) => {
    return new jogadores(body)
}
module.exports = {
    jogadorBusca,
    jogadorDeleta,
    jogadorAtualiza,
    jogadorCria
}