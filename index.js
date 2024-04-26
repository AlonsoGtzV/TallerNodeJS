const express = require('express');
const app = express();
const PORT = 2000;

app.get('/', (req, res) => {
  res.send(`Hello world from Port ${PORT}`);
});

app.get('/myname', (req, res) => {
  const name = 'Alonso Gutierrez';
  res.send(`Hello World! My name is ${name}.`);
});

app.listen(PORT, () => {
  console.info(`Servidor corriendo en http://localhost:${PORT}`);
});