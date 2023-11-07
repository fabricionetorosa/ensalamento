// Pacote responsavel pelo servidor
const express = require("express");
// Importar modulo de rotas do express
const router = express.Router();
// Importar controller
const controller = require("../controllers/professorController")

// Rota espera um parametro depois de "/cerveja-pelo-nome/" e vai entender como "cerveja"
// Exemplo: localhost:3000/cerveja-pelo-nome/heineken => req.params.cerveja = "heineken"
router.get("/materia-pelo-nome/:materia", controller.buscarProfessor);

router.get("/materia-aproximada/:materia", controller.buscarProfessorAproximada);
router.post("/cadastrar-materia/", controller.cadastrarProfessor);
router.delete("/excluir-materia/:id", controller.excluirProfessor);

module.exports = router;