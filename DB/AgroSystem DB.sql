CREATE DATABASE AgroSystem;

use AgroSystem;

CREATE TABLE Cliente(
	IDCliente int not null,
    Nombre nvarchar(100)not null,
    ApellidoPaterno nvarchar(20)not null,
    ApellidoMaterno nvarchar(20)not null,
    Correo nvarchar (100)not null,
    Telefono char (10)not null,
	RFC nvarchar (13) not null,
	CURP nvarchar (18) not null,
	IDCiudad int not null
);

create table Venta(
	IDVenta int not null,
    FechaPedido date not null,
    FechaEntrega date,
	Subtotal double not null,
    Total double not null,
	IDCliente int not null,
	IDEmpleado int not null
);

CREATE TABLE DetalleVenta(
	IDVenta int not null,
	IDProducto int not null,
	PrecioUnitario double not null,
	Cantidad int not null,
	Descuento real
);

CREATE TABLE Empleado(
	IDEmpleado int not null,
    Nombre nvarchar(100)not null,
    ApellidoPaterno nvarchar(20)not null,
    ApellidoMaterno nvarchar(20)not null,
    Correo nvarchar(100)not null,
    Telefono nvarchar(15)not null,
    Puesto nvarchar(20)not null,
    Usuario nvarchar(30)not null,
    Contraseña nvarchar(30)not null,
    FechaNacimiento datetime not null,
    FechaIncio datetime not null,
	RFC nvarchar(13) not null,
	CURP nvarchar (18) not null,
    IDSucursal int not null,
	IDCiudad int not null
);

CREATE TABLE Sucursal(
	IDSucursal int not null,
    Calle nvarchar(100) not null,
    Ciudad nvarchar(50) not null,
    Estado nvarchar(50)not null,
    Correo nvarchar(100)not null,
    Telefono nvarchar(10)not null,
    IDCedi int not null
);

CREATE TABLE CEDI(
	IDCedi int not null,
    Correo nvarchar(100) not null,
    Telefono nvarchar(10) not null,
    Capacidad int not null,
    Calle nvarchar(100) not null,
    Ciudad nvarchar(50) not null,
    Estado nvarchar(50) not null
);

CREATE TABLE DetalleCompra(
	IDCompra int not null,
	IDProducto int not null,
	Cantidad int not null,
	PrecioUnitario double not null
);

CREATE TABLE OrdenCompra(
	IDCompra int not null,
	FechaPedido datetime not null,
	FechaEntrega datetime not null,
	SubTotal double not null,
	Total double not null,
	IDCedi int not null,
	IDEmpleado int not null
);

CREATE TABLE Producto(
	IDProducto int not null,
    ProdNombre nvarchar(100) not null,
    PrecioUnitario int not null,
	Descontinuado bit not null,
	IDProveedor int not null,
	IDCategoria int not null
);

CREATE TABLE Categoria(
	IDCategoria int not null,
	Nombre_Categoria nvarchar(100) not null,
	DescripcionCategoria nvarchar(100)not null
);

CREATE TABLE Proveedor(
	IDProveedor int not null,
    Nombre nvarchar (100)not null,
    Telefono nvarchar(10)not null,
    Correo nvarchar(100)not null,
	RFC nvarchar (13) not null,
	CURP nvarchar (13) not null,
	IDCiudad int not null
);

CREATE TABLE ProductoSucursal(
	IDSucursal int not null,
	IDproducto int not null,
	FechaSurtido date not null
);

CREATE TABLE ProductoCEDI(
	IDProducto int not null ,
	IDCedi int not null,
	FechaSurtido date not null,
	FechaCaducidad date not null
);

CREATE TABLE ESTADO(
	IDEstado int not null,
	Nombre varchar(50) not null
);

CREATE TABLE CIUDAD(
	IDCiudad int not null,
	Nombre varchar(50) not null,
	IDEstado int not null
);

-- Llaves primarias

ALTER TABLE Cliente ADD PRIMARY KEY PK_Cliente (IDCliente);
ALTER TABLE Venta ADD PRIMARY KEY PK_OrdenVenta (IDVenta);
ALTER TABLE Empleado ADD PRIMARY KEY PK_Empleado (IDEmpleado);
ALTER TABLE Sucursal ADD PRIMARY KEY PK_Sucursal (IDSucursal);
ALTER TABLE CEDI ADD PRIMARY KEY PK_CEDI (IDCedi);
ALTER TABLE OrdenCompra ADD PRIMARY KEY PK_OrdenCompra (IDCompra);
ALTER TABLE Proveedor ADD PRIMARY KEY PK_Proveedor (IDProveedor);
ALTER TABLE Producto ADD PRIMARY KEY PK_Producto (IDProducto);
ALTER TABLE Categoria ADD PRIMARY KEY PK_Categoria (IDCategoria);
ALTER TABLE Estado ADD PRIMARY KEY PK_Estado (IDEstado);
ALTER TABLE Ciudad ADD PRIMARY KEY PK_Ciudad (IDCiudad);

-- Llaves foraneas

ALTER TABLE Venta ADD CONSTRAINT FK_OrdenVenta_Cliente FOREIGN KEY (IDCliente) REFERENCES Cliente (IDCliente), ADD CONSTRAINT FK_OrdenVenta_Empleado FOREIGN KEY (IDEmpleado) REFERENCES Empleado (IDEmpleado);
ALTER TABLE Empleado ADD CONSTRAINT FK_Empleado_Sucursal FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal), ADD CONSTRAINT FK_Empleado_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);
ALTER TABLE Sucursal ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi);
ALTER TABLE DetalleCompra ADD CONSTRAINT FK_Compra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto), ADD CONSTRAINT FK_Compra_OC FOREIGN KEY (IDCompra) REFERENCES OrdenCompra (IDCompra);
ALTER TABLE OrdenCompra ADD CONSTRAINT FK_OrdenCompra_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi), ADD CONSTRAINT FK_OrdenCompra_Empleado FOREIGN KEY (IDEmpleado) REFERENCES Empleado (IDEmpleado);
ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor) REFERENCES Proveedor (IDProveedor), ADD CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Producto (IDProducto);
ALTER TABLE ProductoSucursal ADD CONSTRAINT FK_Sucursal_PS FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal), ADD CONSTRAINT FK_Producto_PS FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto);
ALTER TABLE ProductoCEDI ADD CONSTRAINT FK_Producto_PC FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto), ADD CONSTRAINT FK_CEDI_PC FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi);
ALTER TABLE DetalleVenta ADD CONSTRAINT FK_Producto_OV FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto), ADD CONSTRAINT FK_Venta_OV FOREIGN KEY (IDVenta) REFERENCES CEDI (IDCedi);
ALTER TABLE Ciudad ADD CONSTRAINT FK_Ciudad_Estado FOREIGN KEY (IDEstado) REFERENCES Estado (IDEstado);
ALTER TABLE Cliente ADD CONSTRAINT FK_Cliente_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);
ALTER TABLE Proveedor ADD CONSTRAINT FK_Proveedor_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad);

-- Llaves unicas

ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_RFC UNIQUE (RFC);
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_Usuario UNIQUE (Usuario);
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_Contraseña UNIQUE (Contraseña);
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_CURP UNIQUE (CURP);


ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_RFC UNIQUE (RFC);
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CURP UNIQUE (CURP);

ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_RFC UNIQUE (RFC);
ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_CURP UNIQUE (CURP);

-- Valores por default

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
  MODIFY COLUMN PrecioUnitario DECIMAL(10,2) DEFAULT 0.00,
  MODIFY COLUMN Cantidad INT DEFAULT 1,
  MODIFY COLUMN Descuento DECIMAL(5,2) DEFAULT 0.00;


-- DROP DATABASE agrosystem