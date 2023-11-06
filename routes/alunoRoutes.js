// Pacote responsavel pelo servidor
const express = require("express");
// Importar modulo de rotas do express
const router = express.Router();
// Importar controller
const controller = require("../controllers/alunoController")


router.get("/aluno-pelo-nome/:aluno", controller.buscarAluno);
router.get("/aluno-ordenadas", controller.buscarAlunoOrdenadas);
router.get("/aluno-aproximada/:aluno", controller.buscarAlunoAproximada);
router.post("/cadastrar-aluno/", controller.cadastrarAluno);
router.put("/atualizar-aluno/:id", controller.atualizarAluno);
router.delete("/excluir-aluno/:id", controller.excluirAluno);

module.exports = router;