create database pruebaAgro
use pruebaAgro

CREATE TABLE Cliente(
	IDcliente int not null,
    CleNombre nvarchar(100)not null,
    CleApellidoPaterno nvarchar(20)not null,
    CleApellidoMaterno nvarchar(20)not null,
    CleCalle nvarchar (100)not null,
    CleEstado nvarchar (50)not null,
    CleCiudad nvarchar (50)not null,
    CleCorreo nvarchar (100)not null,
    CleTelefono char (10)not null,
	CleRFC nvarchar (13) not null,
	CleCURP nvarchar (18) not null,
)

create table Venta(
	IDOrdenvent int not null,
    FechaPedido date not null,
    FechaEntrega date,
	Subtotal money not null,
    Total money not null,
	IDCliente int not null,
	IDEmpleado int not null
)

CREATE TABLE DetalleVenta(
	IDOrdenvent int not null,
	IDproducto int not null,
	precioUnitario money not null,
	cantidad int not null,
	descuento real
)

CREATE TABLE Empleado(
	IDEmpleado int not null,
    EmpNombre nvarchar(100)not null,
    EmpApellidoPaterno nvarchar(20)not null,
    EmpApellidoMaterno nvarchar(20)not null,
    EmpCorreo nvarchar(100)not null,
    EmpTelefono nvarchar(15)not null,
    EmpCalle nvarchar(100)not null,
    EmpCiudad nvarchar(50)not null,
    EmpEstado nvarchar(50)not null,
    EmpPuesto nvarchar(20)not null,
    EmpUsuario nvarchar(30)not null,
    EmpContraseña nvarchar(30)not null,
    EmpFechaNacimiento datetime not null,
    EmpFechaIncio datetime not null,
	EmpRFC nvarchar(13) not null,
	EmpCURP nvarchar (18) not null,
    IDSucursal int not null,
)

CREATE TABLE Sucursal(
	IDSucursal int not null,
    SucCalle nvarchar(100) not null,
    SucCiudad nvarchar(50) not null,
    SucEstado nvarchar(50)not null,
    SucCorreo nvarchar(100)not null,
    SucTelefono nvarchar(10)not null,
    IDCedi int not null
)

CREATE TABLE CEDI(
	IDCedi int not null,
    CEDICorreo nvarchar(100) not null,
    CEDITelefono nvarchar(10) not null,
    CEDICapacidad int not null,
    CEDICalle nvarchar(100) not null,
    CEDICiudad nvarchar(50) not null,
    CEDIEstado nvarchar(50) not null,
	CEDIIDSucursal int not null,
)

create table detalleCompra(
	IDOrdenComp int not null,
	IDProducto int not null,
	Cantidad int not null,
	precioUnitario money not null
)

CREATE TABLE OrdenCompra(
	IDOrdenComp int not null,
	FechaPedido datetime not null,
	FechaEntrega datetime not null,
	subTotal money not null,
	Total money not null,
	IDCedi int not null
)

CREATE TABLE Producto(
	IDproducto int not null,
    ProdNombre nvarchar(100) not null,
    precioUnitario int not null,
	descontinuado bit not null,
	IDProveedor int not null,
	IDCategoria int not null
)
CREATE TABLE Categoria(
	IDCategoria int not null,
	Nombre_Categoria nvarchar(100) not null,
	Descripcion_Categoria nvarchar(100)not null,
)
CREATE TABLE Proveedor(
	IDProveedor int not null,
    ProvNombre nvarchar (100)not null,
    ProvTelefono nvarchar(10)not null,
    ProvCorreo nvarchar(100)not null,
    ProvCalle nvarchar(100)not null,
    ProvCiudad nvarchar(50)not null,
    ProvEstado nvarchar(50)not null,
	ProvRFC nvarchar (13) not null,
	ProvCURP nvarchar (13) not null
)

CREATE TABLE productoSucursal(
	IDSucursal int not null,
	IDproducto int not null,
	fechaSurtido date not null,
)

create table productoCEDI(
	IDproducto int not null ,
	IDCedi int not null,
	fechaSurtido date not null,
	fechaCaducidad date not null,
)


GO
--LLAVES PRIMARIAS
ALTER TABLE Cliente ADD CONSTRAINT PK_CLIENTE PRIMARY KEY (IDCliente)
ALTER TABLE Venta ADD CONSTRAINT PK_OrdenVenta PRIMARY KEY (IDOrdenvent)
ALTER TABLE Empleado ADD CONSTRAINT PK_Empleado PRIMARY KEY (IDEmpleado)
ALTER TABLE Sucursal ADD CONSTRAINT PK_Sucursal PRIMARY KEY (IDSucursal)
ALTER TABLE CEDI ADD CONSTRAINT PK_Cedi PRIMARY KEY (IDCedi)
ALTER TABLE OrdenCompra ADD CONSTRAINT PK_OrdenCompra PRIMARY KEY (IDOrdenComp)
ALTER TABLE Proveedor ADD CONSTRAINT PK_Proveedor PRIMARY KEY (IDProveedor)
ALTER TABLE Producto ADD CONSTRAINT PK_Producto PRIMARY KEY (IDProducto)
ALTER TABLE Categoria ADD CONSTRAINT PK_Categoria PRIMARY KEY (IDCategoria)
--LLAVES FORANEAS
GO
ALTER TABLE Venta ADD CONSTRAINT FK_OrdenVenta_Cliente FOREIGN KEY (IDCliente) REFERENCES Cliente (IDCliente),
CONSTRAINT FK_OrdenVenta_Empleado FOREIGN KEY(IDEmpleado) REFERENCES Empleado (IDEmpleado)
ALTER TABLE Empleado ADD CONSTRAINT FK_Empleado_Sucursal FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal)
ALTER TABLE Sucursal ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi)
ALTER TABLE detalleCompra ADD CONSTRAINT FK_Compra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto),
	CONSTRAINT FK_Compra_OC FOREIGN KEY (IDOrdenComp) REFERENCES OrdenCompra (IDOrdenComp)

ALTER TABLE OrdenCompra add CONSTRAINT FK_OrdenCompra_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi)
ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor)REFERENCES Proveedor (IDProveedor),
	CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Categoria (IDCategoria)


ALTER TABLE productoSucursal add constraint FK_Sucursal_PS foreign key (IDSucursal) references Sucursal(IDSucursal),
				constraint FK_Producto_PS foreign key (IDproducto) references Producto(IDproducto)

ALTER TABLE productoCEDI add constraint FK_Producto_PC foreign KEY (IDproducto)references Producto(IDproducto),
			constraint FK_CEDI_PC foreign key (IDCedi) references CEDI(IDCedi)

ALTER TABLE detalleVenta ADD CONSTRAINT FK_Producto_OV foreign key (IDproducto) references Producto(IDproducto),
			constraint FK_Venta_OV foreign key (IDOrdenVent) references Venta(IDOrdenVent)


GO
--LLAVES UNICAS
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpRFC UNIQUE (EmpRFC)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpUsuario UNIQUE (EmpUsuario)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpContraseña UNIQUE (EmpContraseña)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpCURP UNIQUE (EmpCURP)


ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CleRFC UNIQUE (CleRFC)
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CleCURP UNIQUE (CleCURP)

ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_ProvRFC UNIQUE (ProvRFC)
ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_ProvCURP UNIQUE (ProvCURP)
GO
--CONSTRAINTS
ALTER TABLE Empleado ADD CONSTRAINT DF_Empleado_EmpTelefono DEFAULT ('SIN TELEFONO') FOR EmpTelefono,
CONSTRAINT DF_Empleado_EmpCorreo DEFAULT ('SIN CORREO') FOR EmpCorreo
GO

ALTER TABLE Cliente ADD CONSTRAINT DF_Cliente_CleTelefono DEFAULT ('SIN TELEFONO') FOR CleTelefono,
CONSTRAINT DF_Cliente_CleCorreo DEFAULT ('SIN CORREO') FOR CleCorreo
GO

ALTER TABLE Proveedor ADD CONSTRAINT DF_Proveedor_ProvTelefono DEFAULT ('SIN TELEFONO') FOR ProvTelefono,
CONSTRAINT DF_Proveedor_ProvCorreo DEFAULT ('SIN CORREO') FOR ProvCorreo
GO


ALTER TABLE detalleVenta add CONSTRAINT DF_DetalleVenta_precioUnitario DEFAULT (0) for precioUnitario,
							 CONSTRAINT DF_DetalleVenta_cantidad DEFAULT (1) for cantidad,
							 CONSTRAINT DF_DetalleVenta_Descuento DEFAULT (0) for descuento

--DROP DATABASE AGROSYSTEM
