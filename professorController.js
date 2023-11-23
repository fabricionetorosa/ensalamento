// Arquivo responsável por conectar com o banco de dados
const database = require("../database")

exports.buscarProfessor = (req, res) => {

    const professorDoPostman = req.params.professor;

    const comando = `SELECT * FROM PROFESSORES
    WHERE LOWER(NOME) = LOWER('${professorDoPostman}')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}



exports.buscarProfessorAproximada = (req, res) => {

    const professorDoPostman = req.params.Professor;

    const comando = `SELECT * FROM PROFESSORES
    WHERE LOWER(NOME) LIKE LOWER('%${professorDoPostman}%')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.cadastrarProfessor = (req, res) => {
    const nomeDoPostman = req.body.nome;
    const disponivelDoPostman = req.body.disponivel;
    const materiaDoPostman = req.body.tipo;
    const comando = `INSERT INTO PROFESSORES (nome, materia, disponivel) VALUES
    ($1, $2, $3);`
    const valoresDoComando = [nomeDoPostman,  materiaDoPostman,  disponivelDoPostman]
    database.query(comando, valoresDoComando).then(
        () => {
            res.status(200).send({message: "Dado inserido com sucesso"})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.atualizarProfessor = (req, res) => {
    const nomeDoPostman = req.body.nome;
    const materiaDoPostman = req.body.tipo;
    const idDoPostman = req.params.id;
    const comando = `UPDATE PROFESSORES SET nome = $1,  materia = $2, disponivel = $3, WHERE id = $4;`
    const valoresDoComando = [nomeDoPostman, materiaDoPostman, idDoPostman]
    database.query(comando, valoresDoComando).then(
        () => {
            res.status(200).send({message: "Dado atualizado com sucesso"})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.excluirProfessor = (req, res) => {
    const idDoPostman = req.params.id;
    const comando = `DELETE FROM PROFESORES WHERE id = $1;`
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