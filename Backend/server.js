const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

//inicias la app
const app = express();
app.use(cors({ origin: "http://localhost:3000" }));
app.use(morgan("dev"));

app.use(express.json()); //para que entienda los json que le mandamos
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    return res.status(200).send("<h1>hola</h1> <br> <h2>como estas</h2>");
});

//Routers
const routerProductoSucursal = require('./MVC/Routers/routhProductoSucursal');
const routerProductoCEDI = require('./MVC/Routers/routhProductoCEDI');
const routerProveedores = require('./MVC/Routers/routhProveedor');
const routerEmpleados = require('./MVC/Routers/routhEmpleados');
const routerVentaCredito = require('./MVC/Routers/routhVentaCredito');
const routerVentaNormal = require('./MVC/Routers/routhVentaNormal');
const routerCompra = require('./MVC/Routers/routhCompra');
const routerCliente = require('./MVC/Routers/routhClientes');


app.use('/productos', routerProductoSucursal);
app.use('/productosCEDI', routerProductoCEDI);
app.use('/proveedores', routerProveedores);
app.use('/empleados', routerEmpleados);
app.use('/ventasC', routerVentaCredito);
app.use('/ventasN', routerVentaNormal);
app.use('/compras', routerCompra);
app.use('/clientes', routerCliente);

//ES PARA ABRIR EL DOTENV
const puerto = process.env.PUERTO || 3000; //ABRO MI PUERTO Y SI NO SE ABRE EL 3000

app.listen(puerto, () => {
    console.log(`Servidor corriendo en el puerto ${puerto}`);
});
