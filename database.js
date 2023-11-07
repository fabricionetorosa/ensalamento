const pg = require("pg");
const database = new pg.Client("postgres://lwvnzbqu:3aDW8WWqSHfz2EcJdLBteLgScDThAXlt@silly.db.elephantsql.com/lwvnzbqu")

database.connect((erro) => {
    if(erro) {
        return console.log("Erro: ", erro)
    } else {
        return console.log("Conectado com sucesso")
    }
})

module.exports = database;
