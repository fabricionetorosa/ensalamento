const pg = require("pg");

export default class CervejaFacade {

    constructor() {
        this.conectarDatabase()
    }

    async conectarDatabase() {
        this.client = new pg.Client("postgres://lwvnzbqu:3aDW8WWqSHfz2EcJdLBteLgScDThAXlt@silly.db.elephantsql.com/lwvnzbqu")
        await this.client.connect()
    }

    async buscarAlunoPeloNome(nome) {
        try {
            const comando = `SELECT * FROM alunos WHERE LOWER(NOME) = LOWER('${nome}')`
            const resultado = await this.client.query(comando)
            return resultado.rows
        } catch (erro) {
            console.error(erro)
            return []
        }
    }

    async closeDatabase() {
        await this.client.close()
    }
}