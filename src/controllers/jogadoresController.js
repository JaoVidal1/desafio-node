import jogadores from "..models/Jogador.js";

class JogadorController {
static listarJogadores = (req, res) => {
    jogadores.find((err, jogadores) => {
        res.status(200).json(jogadores)
});
};
static listarJogadorPorID = (req, res => {
    const id = req.params.id;

    jogadores.findById(id, (err, jogadores => {
        if(err){
            res.status(400).send({message: '${err.message} - Id do jogador não localizado.'}
            )}
else {
    res.status(200).send(jogadores);
};
 }));
});

static cadastrarJogador = (req, res) => {
    let jogador = new jogadores(req.body);

    jogador.save((err) => {
        if(err){
            res.status(500).send({message: '${err.message} - falha ao cadastrar jogador'})
        } else{
            res.status(201).send(jogador.toJSON())
        }
    })};
static atualizarJogador = (req, res)=> {
    const id = req.params.id;

    jogadores.findByIdAndUpdate(id, {$set: req.body}, (err) =>{
        if(!err) {
            res.status(200).send({message: 'Jogador atualizado com sucesso'})
        } else{
            res.status(500).send({message: err.message})
        }
    });
}

static excluirJogador = (req, res) =>{
    const id = req.params.id;

    jogadores.findByIdAndDelete(id, (err) => {
        if(!err){
            res.status(200).send({message: 'Jogador removido com sucesso'})
        } else {
            res.status(500).send({message: err.message})
        }
    });
};
static premioJogador = (req, res) =>{
    const id = req.params.id;

    const jogadoresResponse = await jogadores.find()
    jogadoresResponse.forEach(jogador => {
        const moeda = jogador.moedas;
        let medalhas = parseInt(moedas / 10)
        let trofeus = parseInt(medalhas / 3)

        jogador.medalha = medalhas
        jogador.trofeu = trofeus
    });
      res.json(jogadoresResponse)
    };

};

export default JogadorController