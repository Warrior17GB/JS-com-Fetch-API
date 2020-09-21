const customExpress = require("./config/custom-express");
const Tabelas = require("./infraestrutura/database/tabelas");

const app = customExpress();
Tabelas.init();

app.listen(5000, () => {
  console.log("Servidor rodando na porta 5000");
});
