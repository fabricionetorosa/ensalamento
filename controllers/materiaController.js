
const database = require("../database")

exports.buscarMateria = (req, res) => {

    const materiaDoPostman = req.params.materia;

    const comando = `SELECT * FROM materia_aula
    WHERE LOWER(NOME) = LOWER('${materiaDoPostman}')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.buscarMateriaOrdenadas =  (req, res) => {

    const comando = `SELECT * FROM materia_aula ORDER BY fase`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}


exports.buscarMateriaAproximada = (req, res) => {

    const materiaDoPostman = req.params.materia;

    const comando = `SELECT * FROM materia_aula
    WHERE LOWER(NOME) LIKE LOWER('%${materiaDoPostman}%')`

    database.query(comando).then(
        (resultado) => {
            res.status(200).send({message: resultado.rows})
        },
        (erro) => {
            res.status(500).send({message: "Ocorreu um erro: ", erro})
        }
    )
}

exports.cadastrarMateria = (req, res) => {
    const nomeDoPostman = req.body.nome;
    const faseDoPostman = req.body.fase;
    const comando = `INSERT INTO materia_aula (nome,  fase) VALUES
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


exports.excluirMateria = (req, res) => {
    const idDoPostman = req.params.id;
    const comando = `DELETE FROM materia_aula WHERE id = $1;`
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