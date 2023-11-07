// Pacote responsavel pelo servidor
const express = require("express");
// Importar modulo de rotas do express
const router = express.Router();
// Importar controller
const controller = require("../controllers/materiaController")

// Rota espera um parametro depois de "/cerveja-pelo-nome/" e vai entender como "cerveja"
// Exemplo: localhost:3000/cerveja-pelo-nome/heineken => req.params.cerveja = "heineken"
router.get("/materia-pelo-nome/:materia", controller.buscarMateria);
// router.get("/materia-ordenadas", controller.buscarMateriaOrdenadas);
router.get("/materia-aproximada/:materia", controller.buscarMateriaAproximada);
router.post("/cadastrar-materia/", controller.cadastrarMateria);
// router.put("/atualizar-materia/:id", controller.atualizarMateria);
router.delete("/excluir-materia/:id", controller.excluirMateria);

module.exports = router;