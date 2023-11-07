const express = require("express");
const bodyParser = require("body-parser");
const rotasAluno = require("./routes/alunoRoutes");
const rotasMateria = require("./routes/materiaRoutes");
const rotasProfessor = require("./routes/professorRoutes");


const app = express();
app.use(bodyParser.json());
app.use("/aluno", rotasAluno);
app.use("/materia", rotasMateria);
app.use("/professor", rotasProfessor);

app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
});