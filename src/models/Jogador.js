const mongoose = require('mongoose');

const jogadorSchema = new mongoose.Schema(
    {
        nome: {type:String, required:true},
        moedas: {type:Number, required:true}
    },
    {
        versionKey:false
    }
);

module.exports = mongoose.models.jogadores || mongoose.model("jogadores", jogadorSchema)