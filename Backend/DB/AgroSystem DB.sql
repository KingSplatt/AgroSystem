CREATE DATABASE AgroSystem;

use AgroSystem;

CREATE TABLE Cliente (
    IDCliente int not null,
    Nombre varchar(100) not null,
    ApellidoPaterno varchar(20) not null,
    ApellidoMaterno varchar(20) not null,
    Usuario varchar(50) not null,
    Contrasena varchar(50) not null,
    Correo varchar(100) not null,
    Telefono char(10) not null,
    RFC varchar(13) not null,
    CURP varchar(18) not null,
    IDCiudad int not null
);

create table Venta (
    IDVenta int not null,
    FechaPedido date not null,
    Subtotal double not null,
    Total double not null,
    Credito boolean not null,
    IDCliente int not null,
    IDEmpleado int not null
);

CREATE TABLE DetalleVenta (
    PrecioUnitario double not null,
    Cantidad int not null,
    IDVenta int not null,
    IDProducto int not null
);

CREATE TABLE DetalleVentaCredito (
    PrecioUnitario double not null,
    Cantidad int not null,
    FechaPlazo datetime not null,
    PagoInicial double not null,
    IDVenta int not null,
    IDProducto int not null
);

CREATE TABLE Empleado (
    IDEmpleado int not null,
    Nombre varchar(100) not null,
    ApellidoPaterno varchar(20) not null,
    ApellidoMaterno varchar(20) not null,
    Correo varchar(100) not null,
    Telefono varchar(15) not null,
    Puesto varchar(20) not null,
    Usuario varchar(30) not null,
    Contrasena varchar(30) not null,
    FechaNacimiento datetime not null,
    FechaInicio datetime not null,
    RFC varchar(13) not null,
    CURP varchar(18) not null,
    IDSucursal int null,
    IDCiudad int not null,
    IDCEDI int null --Añadi el respectivo constraint abajo
);

CREATE TABLE Sucursal (
    IDSucursal int not null,
    Correo varchar(100) not null,
    Telefono varchar(10) not null,
    IDCedi int not null,
    IDCiudad int not null
);

CREATE TABLE CEDI (
    IDCedi int not null,
    Nombre varchar(100) not null,
    Correo varchar(100) not null,
    Telefono varchar(10) not null,
    IDCiudad int not null
);

CREATE TABLE Compra (
    IDCompra int not null,
    FechaPedido datetime not null,
    FechaEntrega datetime not null,
    SubTotal double not null,
    Total double not null,
    IDCedi int not null,
    IDEmpleado int not null
);

CREATE TABLE DetalleCompra (
    Cantidad int not null,
    PrecioUnitario double not null,
    IDCompra int not null,
    IDProducto int not null
);

CREATE TABLE Producto (
    IDProducto int not null,
    Nombre nvarchar (100) not null,
    Descripcion nvarchar (100) not null,
    PrecioUnitario int not null,
    Descontinuado boolean not null,
    IDProveedor int not null,
    IDCategoria int not null
);

CREATE TABLE Categoria (
    IDCategoria int not null,
    NombreCategoria varchar(100) not null,
    DescripcionCategoria varchar(100) not null
);

CREATE TABLE Proveedor (
    IDProveedor int not null,
    Nombre varchar(100) not null,
    Telefono varchar(10) not null,
    Correo varchar(100) not null,
    RFC varchar(13) not null,
    CURP varchar(18) not null,
    Legalizado boolean not null,
    IDCiudad int not null
);

CREATE TABLE Cotizacion (
	IDCotizacion int not null,
    FechaCotizacion date not null,
    IDProveedor int not null,
    IDProducto int not null
);

CREATE TABLE ProductoSucursal(
	FechaSurtido datetime not null,
	FechaCaducidad datetime not null,
	IDSucursal int not null,
	IDProducto int not null


);

CREATE TABLE ProductoCEDI (
    FechaSurtido datetime not null,
    FechaCaducidad datetime not null,
    IDProducto int not null,
    IDCedi int not null
);

CREATE TABLE Estado (
    IDEstado int not null,
    Nombre varchar(50) not null
);

CREATE TABLE Ciudad (
    IDCiudad int not null,
    Nombre varchar(50) not null,
    IDEstado int not null
);

CREATE TABLE ProductoProveedor (
    IDProveedor int not null,
    IDProducto int not null
);
-- LLAVES PRIMARIAS

ALTER TABLE Cotizacion ADD PRIMARY KEY PK_Cotizacion (IDCotizacion);

ALTER TABLE Cliente ADD PRIMARY KEY PK_CLIENTE (IDCliente);

ALTER TABLE Venta ADD PRIMARY KEY PK_Venta (IDVenta);

ALTER TABLE Empleado ADD PRIMARY KEY PK_Empleado (IDEmpleado);

ALTER TABLE Sucursal ADD PRIMARY KEY PK_Sucursal (IDSucursal);

ALTER TABLE CEDI ADD PRIMARY KEY PK_Cedi (IDCedi);

ALTER TABLE Compra ADD PRIMARY KEY PK_OrdenCompra (IDCompra);

ALTER TABLE Proveedor ADD PRIMARY KEY PK_Proveedor (IDProveedor);

ALTER TABLE Producto ADD PRIMARY KEY PK_Producto (IDProducto);

ALTER TABLE Categoria ADD PRIMARY KEY PK_Categoria (IDCategoria);

ALTER TABLE Estado ADD PRIMARY KEY PK_Estado (IDEstado);

ALTER TABLE Ciudad ADD PRIMARY KEY PK_Ciudad (IDCiudad);

-- IDCEDI o IDSucursal
ALTER TABLE Empleado
ADD CONSTRAINT CHK_Empleado_IDSucursal_IDCEDI CHECK (
    (IDSucursal IS NOT NULL AND IDCEDI IS NULL) OR 
    (IDSucursal IS NULL AND IDCEDI IS NOT NULL)
);

-- LLAVES FORANEAS

ALTER TABLE Cotizacion
ADD CONSTRAINT FK_Cotizacion_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto),
ADD CONSTRAINT FK_Cotizacion_Proveedor FOREIGN KEY (IDProveedor) REFERENCES Proveedor (IDProveedor);

ALTER TABLE ProductoProveedor
ADD CONSTRAINT FK_ProductoProveedor_Proveedor FOREIGN KEY (IDProveedor) REFERENCES Proveedor (IDProveedor),
ADD CONSTRAINT FK_ProductoProveedor_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto);


ALTER TABLE Venta
ADD CONSTRAINT FK_OrdenVenta_Cliente FOREIGN KEY (IDCliente) REFERENCES Cliente (IDCliente),
ADD CONSTRAINT FK_OrdenVenta_Empleado FOREIGN KEY (IDEmpleado) REFERENCES Empleado (IDEmpleado);

ALTER TABLE Empleado
ADD CONSTRAINT FK_Empleado_Sucursal FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal),
ADD CONSTRAINT FK_Empleado_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);

ALTER TABLE Sucursal
ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi),
ADD CONSTRAINT FK_Sucursal_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);

ALTER TABLE DetalleCompra
ADD CONSTRAINT FK_DetalleCompra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto),
ADD CONSTRAINT FK_DetalleCompra_Compra FOREIGN KEY (IDCompra) REFERENCES Compra (IDCompra);

ALTER TABLE CEDI
ADD CONSTRAINT FK_CEDI_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);

ALTER TABLE Compra
ADD CONSTRAINT FK_Compra_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi),
ADD CONSTRAINT FK_Compra_Empleado FOREIGN KEY (IDEmpleado) REFERENCES Empleado (IDEmpleado);

ALTER TABLE Producto
ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor) REFERENCES Proveedor (IDProveedor),
ADD CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Categoria (IDCategoria);

ALTER TABLE ProductoSucursal
ADD CONSTRAINT FK_Sucursal_PS FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal),
ADD CONSTRAINT FK_Producto_PS FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto);

ALTER TABLE ProductoCEDI
ADD CONSTRAINT FK_Producto_PC FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto),
ADD CONSTRAINT FK_CEDI_PC FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi);

ALTER TABLE DetalleVenta
ADD CONSTRAINT FK_DetalleVenta_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto),
ADD CONSTRAINT FK_DetalleVenta_Venta FOREIGN KEY (IDVenta) REFERENCES Venta (IDVenta);

ALTER TABLE DetalleVentaCredito
ADD CONSTRAINT FK_DetalleVentaCredito_Venta FOREIGN KEY (IDVenta) REFERENCES Venta (IDVenta),
ADD CONSTRAINT FK_DetalleVentaCredito_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto);

ALTER TABLE Ciudad
ADD CONSTRAINT FK_Ciudad_Estado FOREIGN KEY (IDEstado) REFERENCES Estado (IDEstado);

ALTER TABLE Cliente
ADD CONSTRAINT FK_Cliente_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);

ALTER TABLE Proveedor
ADD CONSTRAINT FK_Proveedor_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);

-- LLAVES UNICAS
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_RFC UNIQUE (RFC);

ALTER TABLE Empleado
ADD CONSTRAINT UC_Empleado_Usuario UNIQUE (Usuario);

ALTER TABLE Empleado
ADD CONSTRAINT UC_Empleado_Contrasena UNIQUE (Contrasena);

ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_CURP UNIQUE (CURP);

ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_RFC UNIQUE (RFC);

ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CURP UNIQUE (CURP);

ALTER TABLE Cliente
ADD CONSTRAINT UC_Cliente_Usuario UNIQUE (Usuario);

ALTER TABLE Cliente
ADD Constraint UC_Cliente_Contrasena UNIQUE (Contrasena);

ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_RFC UNIQUE (RFC);

ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_CURP UNIQUE (CURP);

-- VALORES POR DEFAULT
ALTER TABLE Empleado
MODIFY COLUMN Telefono VARCHAR(50) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN Correo VARCHAR(100) DEFAULT 'SIN CORREO';

ALTER TABLE Cliente
MODIFY COLUMN Telefono VARCHAR(50) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN Correo VARCHAR(100) DEFAULT 'SIN CORREO';

ALTER TABLE Proveedor
MODIFY COLUMN Telefono VARCHAR(50) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN Correo VARCHAR(100) DEFAULT 'SIN CORREO';

ALTER TABLE DetalleVenta
MODIFY COLUMN PrecioUnitario DECIMAL(10, 2) DEFAULT 0,
MODIFY COLUMN Cantidad INT DEFAULT 1;

 -- drop database agrosystem;