CREATE DATABASE pruebaAgro
GO
USE pruebaAgro
GO
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
)

create table Venta(
	IDVenta int not null,
    FechaPedido date not null,
    FechaEntrega date,
	Subtotal money not null,
    Total money not null,
	IDCliente int not null,
	IDEmpleado int not null
)

CREATE TABLE DetalleVenta(
	IDVenta int not null,
	IDProducto int not null,
	PrecioUnitario money not null,
	Cantidad int not null,
	Descuento real
)

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
)

CREATE TABLE Sucursal(
	IDSucursal int not null,
    Calle nvarchar(100) not null,
    Ciudad nvarchar(50) not null,
    Estado nvarchar(50)not null,
    Correo nvarchar(100)not null,
    Telefono nvarchar(10)not null,
    IDCedi int not null
)

CREATE TABLE CEDI(
	IDCedi int not null,
    Correo nvarchar(100) not null,
    Telefono nvarchar(10) not null,
    Capacidad int not null,
    Calle nvarchar(100) not null,
    Ciudad nvarchar(50) not null,
    Estado nvarchar(50) not null
)

CREATE TABLE DetalleCompra(
	IDCompra int not null,
	IDProducto int not null,
	Cantidad int not null,
	PrecioUnitario money not null
)

CREATE TABLE OrdenCompra(
	IDCompra int not null,
	FechaPedido datetime not null,
	FechaEntrega datetime not null,
	SubTotal money not null,
	Total money not null,
	IDCedi int not null,
	IDEmpleado int not null
)

CREATE TABLE Producto(
	IDProducto int not null,
    ProdNombre nvarchar(100) not null,
    PrecioUnitario int not null,
	Descontinuado bit not null,
	IDProveedor int not null,
	IDCategoria int not null
)
CREATE TABLE Categoria(
	IDCategoria int not null,
	Nombre_Categoria nvarchar(100) not null,
	DescripcionCategoria nvarchar(100)not null,
)
CREATE TABLE Proveedor(
	IDProveedor int not null,
    Nombre nvarchar (100)not null,
    Telefono nvarchar(10)not null,
    Correo nvarchar(100)not null,
	RFC nvarchar (13) not null,
	CURP nvarchar (13) not null,
	IDCiudad int not null
)

CREATE TABLE ProductoSucursal(
	IDSucursal int not null,
	IDproducto int not null,
	FechaSurtido date not null,
)

CREATE TABLE ProductoCEDI(
	IDProducto int not null ,
	IDCedi int not null,
	FechaSurtido date not null,
	FechaCaducidad date not null,
)

CREATE TABLE ESTADO(
	IDEstado int not null,
	Nombre varchar(50) not null
)

CREATE TABLE CIUDAD(
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
ALTER TABLE OrdenCompra ADD CONSTRAINT PK_OrdenCompra PRIMARY KEY (IDCompra)
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

ALTER TABLE Sucursal ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi)

ALTER TABLE DetalleCompra ADD CONSTRAINT FK_Compra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto),
							  CONSTRAINT FK_Compra_OC FOREIGN KEY (IDCompra) REFERENCES OrdenCompra (IDCompra)

ALTER TABLE OrdenCompra ADD CONSTRAINT FK_OrdenCompra_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi),
							CONSTRAINT FK_OrdenCompra_Empleado FOREIGN KEY (IDEmpleado) REFERENCES Empleado (IDEmpleado)

ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor)REFERENCES Proveedor (IDProveedor),
					     CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Categoria (IDCategoria)


ALTER TABLE ProductoSucursal ADD CONSTRAINT FK_Sucursal_PS FOREIGN KEY (IDSucursal) REFERENCES Sucursal(IDSucursal),
							     CONSTRAINT FK_Producto_PS foreign key (IDProducto) references Producto(IDProducto)

ALTER TABLE ProductoCEDI ADD CONSTRAINT FK_Producto_PC FOREIGN KEY (IDProducto)REFERENCES Producto(IDProducto),
							 CONSTRAINT FK_CEDI_PC FOREIGN KEY (IDCedi) REFERENCES CEDI(IDCedi)

ALTER TABLE DetalleVenta ADD CONSTRAINT FK_Producto_OV FOREIGN KEY (IDProducto) REFERENCES Producto(IDProducto),
							 CONSTRAINT FK_Venta_OV FOREIGN KEY (IDVenta) REFERENCES Venta(IDVenta)

ALTER TABLE Ciudad ADD CONSTRAINT FK_Ciudad_Estado FOREIGN KEY (IDEstado) REFERENCES Estado (IDEstado)

ALTER TABLE Cliente ADD CONSTRAINT FK_Cliente_Ciudad FOREIGN KEY (IDCiudad) REFERENCES Ciudad (IDCiudad)

ALTER TABLE Proveedor ADD CONSTRAINT FK_Proveedor_Ciudad FOREIGN KEY (IDCiudad)REFERENCES Ciudad (IDCiudad)

GO
--LLAVES UNICAS
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_RFC UNIQUE (RFC)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_Usuario UNIQUE (Usuario)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_Contraseña UNIQUE (Contraseña)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_CURP UNIQUE (CURP)


ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_RFC UNIQUE (RFC)
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CURP UNIQUE (CURP)

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
							 CONSTRAINT DF_DetalleVenta_Cantidad DEFAULT (1) FOR Cantidad,
							 CONSTRAINT DF_DetalleVenta_Descuento DEFAULT (0) FOR Descuento

--DROP DATABASE AGROSYSTEM
