const pg = require("pg");
const database = new pg.Client("INCLUA SUA CONEXAO DO ELEPHANT AQUI")

database.connect((erro) => {
    if(erro) {
        return console.log("Erro: ", erro)
    } else {
        return console.log("Conectado com sucesso")
    }
})

module.exports = database;
