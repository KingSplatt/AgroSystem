CREATE DATABASE AgroSystem
GO
USE AgroSystem
GO
CREATE TABLE Cliente(
	IDCliente int not null,
    Nombre varchar(100)not null,
    ApellidoPaterno varchar(20)not null,
    ApellidoMaterno varchar(20)not null,
	Usuario varchar(50) not null,
	Contrasena varchar(50) not null,
    Correo varchar (100)not null,
    Telefono char (10)not null,
	RFC nvarchar (13) not null,
	CURP nvarchar (18) not null,
	IDCiudad int not null
)

create table Venta(
	IDVenta int not null,
    FechaPedido date not null,
	Subtotal money not null,
    Total money not null,
	Credito bit not null,
	IDCliente int not null,
	IDEmpleado int not null
)

CREATE TABLE DetalleVenta(
	PrecioUnitario money not null,
	Cantidad int not null,
	IDVenta int not null,
	IDProducto int not null 
)
CREATE TABLE DetalleVentaCredito(--
	PrecioUnitario money not null,
	Cantidad int not null,
	FechaPlazo datetime not null,
	PagoInicial money not null,
	IDVenta int not null,--
	IDProducto int not null--
)
CREATE TABLE Empleado(
	IDEmpleado int not null,
    Nombre nvarchar(100)not null,
    ApellidoPaterno nvarchar(20)not null,
    ApellidoMaterno nvarchar(20)not null,
    Correo varchar(100)not null,
    Telefono varchar(15)not null,
    Puesto varchar(20)not null,
    Usuario varchar(30)not null,
    Contrasena varchar(30)not null,
    FechaNacimiento datetime not null,
    FechaIncio datetime not null,
	RFC varchar(13) not null,
	CURP varchar (18) not null,
    IDSucursal int not null,
	IDCiudad int not null
)

CREATE TABLE Sucursal(
	IDSucursal int not null,
    Correo varchar(100)not null,
    Telefono varchar(10)not null,
    IDCedi int not null,
	IDCiudad int not null --
)

CREATE TABLE CEDI(
	IDCedi int not null,
	Nombre varchar(50) not null,
    Correo varchar(100) not null,
    Telefono varchar(10) not null,
	IDCiudad int not null
)

CREATE TABLE Compra(--
	IDCompra int not null,
	FechaPedido datetime not null,
	FechaEntrega datetime not null,
	SubTotal money not null,
	Total money not null,
	IDCedi int not null,
	IDEmpleado int not null
)

CREATE TABLE DetalleCompra(
	Cantidad int not null,
	PrecioUnitario money not null,
	IDCompra int not null,--
	IDProducto int not null--
)

CREATE TABLE Producto(
	IDProducto int not null,
    Nombre varchar(100) not null,
	Descripcion varchar(100) not null,
    PrecioUnitario int not null,
	Descontinuado bit not null,
	IDProveedor int not null,
	IDCategoria int not null
)
CREATE TABLE Categoria(
	IDCategoria int not null,
	NombreCategoria varchar(100) not null,--
	DescripcionCategoria varchar(100)not null
)
CREATE TABLE Proveedor(
	IDProveedor int not null,
    Nombre varchar (100)not null,
    Telefono varchar(10)not null,
    Correo varchar(100)not null,
	RFC varchar (13) not null,
	CURP varchar (13) not null,
	Legalizado bit not null,
	IDCiudad int not null
)

CREATE TABLE ProductoSucursal(
	FechaSurtido datetime not null,
	FechaCaducidad datetime not null,
	IDSucursal int not null,--
	IDproducto int not null--

)

CREATE TABLE ProductoCEDI(
	FechaSurtido date not null,
	FechaCaducidad date not null,
	IDProducto int not null,--
	IDCedi int not null--
)

CREATE TABLE Estado(
	IDEstado int not null,
	Nombre varchar(50) not null
)

CREATE TABLE Ciudad(
	IDCiudad int not null,
	Nombre varchar(50) not null,
	IDEstado int not null
)
GO
--LLAVES PRIMARIAS
ALTER TABLE Cliente ADD CONSTRAINT PK_CLIENTE PRIMARY KEY (IDCliente)
ALTER TABLE Venta ADD CONSTRAINT PK_Venta PRIMARY KEY (IDVenta)
ALTER TABLE Empleado ADD CONSTRAINT PK_Empleado PRIMARY KEY (IDEmpleado)
ALTER TABLE Sucursal ADD CONSTRAINT PK_Sucursal PRIMARY KEY (IDSucursal)
ALTER TABLE CEDI ADD CONSTRAINT PK_Cedi PRIMARY KEY (IDCedi)
ALTER TABLE Compra ADD CONSTRAINT PK_OrdenCompra PRIMARY KEY (IDCompra)
ALTER TABLE Proveedor ADD CONSTRAINT PK_Proveedor PRIMARY KEY (IDProveedor)
ALTER TABLE Producto ADD CONSTRAINT PK_Producto PRIMARY KEY (IDProducto)
ALTER TABLE Categoria ADD CONSTRAINT PK_Categoria PRIMARY KEY (IDCategoria)
ALTER TABLE Estado ADD CONSTRAINT PK_Estado PRIMARY KEY (IDEstado)
ALTER TABLE Ciudad ADD CONSTRAINT PK_Ciudad PRIMARY KEY (IDCiudad)
--LLAVES FORANEAS
GO
ALTER TABLE Venta ADD CONSTRAINT FK_OrdenVenta_Cliente FOREIGN KEY (IDCliente) REFERENCES Cliente (IDCliente),
					  CONSTRAINT FK_OrdenVenta_Empleado FOREIGN KEY(IDEmpleado) REFERENCES Empleado (IDEmpleado)

ALTER TABLE Empleado ADD CONSTRAINT FK_Empleado_Sucursal FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal),
						 CONSTRAINT FK_Empleado_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad)

ALTER TABLE Sucursal ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi),
						 CONSTRAINT FK_Sucursal_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad)


ALTER TABLE DetalleCompra ADD CONSTRAINT FK_DetalleCompra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto),
							  CONSTRAINT FK_DetalleCompra_Compra FOREIGN KEY (IDCompra) REFERENCES Compra (IDCompra)

ALTER TABLE CEDI ADD CONSTRAINT FK_CEDI_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad)

ALTER TABLE Compra ADD CONSTRAINT FK_Compra_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi),
					   CONSTRAINT FK_Compra_Empleado FOREIGN KEY (IDEmpleado) REFERENCES Empleado (IDEmpleado)

ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor)REFERENCES Proveedor (IDProveedor),
					     CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Categoria (IDCategoria)


ALTER TABLE ProductoSucursal ADD CONSTRAINT FK_Sucursal_PS FOREIGN KEY (IDSucursal) REFERENCES Sucursal(IDSucursal),
							     CONSTRAINT FK_Producto_PS FOREIGN KEY (IDProducto) REFERENCES Producto(IDProducto)

ALTER TABLE ProductoCEDI ADD CONSTRAINT FK_Producto_PC FOREIGN KEY (IDProducto)REFERENCES Producto(IDProducto),
							 CONSTRAINT FK_CEDI_PC FOREIGN KEY (IDCedi) REFERENCES CEDI(IDCedi)

ALTER TABLE DetalleVenta ADD CONSTRAINT FK_DetalleVenta_Producto FOREIGN KEY (IDProducto) REFERENCES Producto(IDProducto),
							 CONSTRAINT FK_DetalleVenta_Venta FOREIGN KEY (IDVenta) REFERENCES Venta(IDVenta)

ALTER TABLE DetalleVentaCredito ADD CONSTRAINT FK_DetalleVentaCredito_Venta FOREIGN KEY (IDVenta) REFERENCES Venta (IDVenta),
							        CONSTRAINT FK_DetalleVentaCredito_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto)

ALTER TABLE Ciudad ADD CONSTRAINT FK_Ciudad_Estado FOREIGN KEY (IDEstado) REFERENCES Estado (IDEstado)

ALTER TABLE Cliente ADD CONSTRAINT FK_Cliente_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad)

ALTER TABLE Proveedor ADD CONSTRAINT FK_Proveedor_Ciudad FOREIGN KEY (IDCiudad)REFERENCES Ciudad (IDCiudad)

GO
--LLAVES UNICAS
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_RFC UNIQUE (RFC)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_Usuario UNIQUE (Usuario)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_Contrasena UNIQUE (Contrasena)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_CURP UNIQUE (CURP)


ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_RFC UNIQUE (RFC)
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CURP UNIQUE (CURP)
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_Usuario UNIQUE(Usuario)
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_Contrasena UNIQUE(Contrasena)

ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_RFC UNIQUE (RFC)
ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_CURP UNIQUE (CURP)
GO
--CONSTRAINTS
ALTER TABLE Empleado ADD CONSTRAINT DF_Empleado_Telefono DEFAULT ('SIN TELEFONO') FOR Telefono,
CONSTRAINT DF_Empleado_Correo DEFAULT ('SIN CORREO') FOR Correo
GO

ALTER TABLE Cliente ADD CONSTRAINT DF_Cliente_Telefono DEFAULT ('SIN TELEFONO') FOR Telefono,
CONSTRAINT DF_Cliente_Correo DEFAULT ('SIN CORREO') FOR Correo
GO

ALTER TABLE Proveedor ADD CONSTRAINT DF_Proveedor_Telefono DEFAULT ('SIN TELEFONO') FOR Telefono,
CONSTRAINT DF_Proveedor_Correo DEFAULT ('SIN CORREO') FOR Correo
GO

ALTER TABLE DetalleVenta ADD CONSTRAINT DF_DetalleVenta_PrecioUnitario DEFAULT (0) FOR PrecioUnitario,
							 CONSTRAINT DF_DetalleVenta_Cantidad DEFAULT (1) FOR Cantidad

--DROP DATABASE AGROSYSTEM
