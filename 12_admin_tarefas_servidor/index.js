const express = require("express");

const connectDB = require("./config/db");

//craindo servidor
const app = express();

//conectar a base de dados

connectDB();

//haboliar express.json permite ler od dados envaidos pelo usuario para

app.use(express.json({ extended: true }));

const PORT = process.env.PORT || 4000;

//importar rotas

app.use("/api/users/", require("./routes/users"));
app.use("/api/auth/", require("./routes/auth"));
app.use("/api/projects/", require("./routes/projects"));
app.use('/api/tasks', requir('./routes/tasks'))

//subir server

app.listen(PORT, () => {
  console.log(`Servidor correndo na porta ${PORT}`);
});
