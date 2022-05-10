import mongoose from "mongoose";

const jogadorSchema = new mongoose.Schema(
    {
id: {type: String},
nome: {type: String, required: true},
moedas: {type: Number, required: true}
},{
    versionKey:false
}

);

const jogadores = mongoose.model('jogadores', jogadoresSchema);

export default jogadores;