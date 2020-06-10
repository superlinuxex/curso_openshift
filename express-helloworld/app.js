var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hola mundo, una prueba de concepto!\n');
});

app.listen(8080, function () {
  console.log(' Ejemplo APP escuchando en el puerto 8080!');
});

