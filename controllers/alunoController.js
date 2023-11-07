// Arquivo responsável por conectar com o banco de dados
const database = require("../database")

exports.buscarAluno = (req, res) => {

    const alunoDoPostman = req.params.aluno;

    const comando = `SELECT * FROM ALUNOS
    WHERE LOWER(NOME) = LOWER('${alunoDoPostman}')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.buscarAlunoOrdenadas =  (req, res) => {

    const comando = `SELECT * FROM ALUNOS ORDER BY fase`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}


exports.buscarAlunoAproximada = (req, res) => {

    const alunoDoPostman = req.params.aluno;

    const comando = `SELECT * FROM ALUNOS
    WHERE LOWER(NOME) LIKE LOWER('%${alunoDoPostman}%')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.cadastrarAluno= (req, res) => {
    const nomeDoPostman = req.body.nome;
    const faseDoPostman = req.body.abv;
    
    const comando = `INSERT INTO cervejas (nome, fase) VALUES
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
    const comando = `UPDATE ALUNOS SET nome = $1, fase = $2,  WHERE id = $3;`
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

exports.excluirAluno = (req, res) => {
    const idDoPostman = req.params.id;
    const comando = `DELETE FROM ALUNOS WHERE id = $1;`
    const valoresDoComando = [idDoPostman]
    database.query(comando, valoresDoComando).then(
        () => {
            res.status(200).send({message: "Dado excluído com sucesso"})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro"})
        }
    )
}