const express = require('express');
const app = express();

const { config } = require('./config/index');
const moviesApi = require('./routes/movies')

moviesApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});



/*
const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function(req, res) {
  res.send('hello world');
});

app.get('/json', function(req, res) {
  res.json({ hello: 'world' });
});

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});

/*
const express = require('express');
const app = express();

// Cuando hagamos un request de tipo GET
app.get('/', (req, res) => {
  // Lo que vamos a enviar a pantalla
  res.send("Envianos el año en la url escribiendo '/año'");
})

app.get('/:year', (req, res) => {
  const year = req.params.year;
  if (year % 4 === 0 && year % 100 !== 0) {
    res.send(`El ${year} Es bisiesto`);
  } else {
    res.send(`Lo siento el año ${year} no es bisiesto :(`);
  }
})

app.listen(2000, function () {
  console.log('Litening http://localhost:2000');
})

/*
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const { config } = require('./config/index');
app.use(bodyParser.urlencoded({extended:true}));

const formulario =
  '<h1>Ingrese un año</h1>' +
  '<form method="post" action="/bisiesto">' +
  '<input type="text" name="anioIngresado">' +
  '<input type="submit" value="Enviar">' +
  '</form>';

app.get('/', (request, response) => {
  response.send(
    '<html><body>' +
    formulario + 
    '</body></html>'
  );
});

const esBisiesto = (anio) => {
  let verificacionAnio = (((anio % 4 == 0) && (anio % 100 != 0)) || (anio % 400 == 0)) ? 1 : 0;
  if (! verificacionAnio){
    returnfalse;
  }
  else{
    returntrue;
  }
}

app.post('/bisiesto', (request, response) => {
  let anio = request.body.anioIngresado;
  let resultado = '';
  if(esBisiesto(anio) == true){
    resultado = 'es bisiesto';
  }
  else{
    resultado = 'no es bisiesto';
  }

  response.send(
    '<html><body>' +
    '<p>El año ingresado ' + resultado + '</p>'
  );
});

app.listen(config.port, () => {
  console.log(`Live at http://localhost:${config.port}`);
})*/
