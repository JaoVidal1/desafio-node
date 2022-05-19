const express = require("express")
const db = require("./config/dbConnect.js")
const routes = require("./routes/index.js")

db.on("error", console.log.bind(console, 'Não foi possível fazer a conexão!'))
db.once("open", () => {
    console.log('A conexão foi feita com sucesso!')
})
const app = express();

app.use(express.json())

routes(app);





    




module.exports = app