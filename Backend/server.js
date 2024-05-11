const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config();

//inicias la app
const app = express();
app.use(morgan('dev'));

app.use(express.json()); //para que entienda los json que le mandamos
app.use(express.urlencoded({ extended: true })); 

app.get('/', (req, res) => {
    return res.status(200).send("<h1>hola</h1> <br> <h2>como estas</h2>") //el 200 el ok, el 400 el not found, 500 internal server error, 300 redireccion
});
app.use('/domain-expansion', require('./MVC/Routers/routhProdSucursal'));
//ES PARA ABRIR EL DOTENV
const puerto = process.env.PUERTO || 3000;//ABRO MI PUERTO Y SI NO SE ABRE EL 3000

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});