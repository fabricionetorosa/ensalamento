// Arquivo responsável por conectar com o banco de dados
const database = require("../database")





exports.cadastrarDias = (req, res) => {
    const nomeDoPostman = req.body.nome;
    const faseDoPostman = req.body.fase;
    
    const comando = `INSERT INTO DIAS (nome, fase) VALUES
    ($1, $2);`
    const valoresDoComando = [nomeDoPostman, faseDoPostman]
    database.query(comando, valoresDoComando).then(
        () => {
            res.status(200).send({message: "Dado inserido com sucesso"})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.atualizarCerveja = (req, res) => {
    const nomeDoPostman = req.body.nome;
    const faseDoPostman = req.body.fase;
    
    const idDoPostman = req.params.id;
    const comando = `UPDATE DIAS SET nome = $1, fase = $2,  WHERE id = $3;`
    const valoresDoComando = [nomeDoPostman, faseDoPostman,  idDoPostman]
    database.query(comando, valoresDoComando).then(
        () => {
            res.status(200).send({message: "Dado atualizado com sucesso"})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

