CREATE DATABASE AGROSYSTEM
GO
USE AGROSYSTEM
GO

CREATE TABLE Cliente(
	IDcliente int not null,
    CleNombre varchar(100)not null,
    CleApellidoPaterno varchar(20)not null,
    CleApellidoMaterno varchar(20)not null,
    CleCalle varchar (100)not null,
    CleEstado varchar (50)not null,
    CleCiudad varchar (50)not null,
    CleCorreo varchar (100)not null,
    CleTelefono char (10)not null,
	CleRFC varchar (13) not null,
	CleCURP varchar (18) not null,
)

CREATE TABLE OrdenVenta(
	IDOrdenvent int not null,
    FechaPedido date not null,
    FechaEntrega date not null,
    Total int not null,
	IDCliente int not null,
	IDEmpleado int not null
)

CREATE TABLE Empleado(
	IDEmpleado int not null,
    EmpNombre varchar(100)not null,
    EmpApellidoPaterno varchar(20)not null,
    EmpApellidoMaterno varchar(20)not null,
    EmpCorreo varchar(100)not null,
    EmpTelefono varchar(10)not null,
    EmpCalle varchar(100)not null,
    EmpCiudad varchar(50)not null,
    EmpEstado varchar(50)not null,
    EmpPuesto varchar(20)not null,
    EmpUsuario varchar(30)not null,
    EmpContrasena varchar(30)not null,
    EmpFechaNacimiento datetime not null,
    EmpFechaIncio datetime not null,
	EmpRFC varchar(13) not null,
	EmpCURP varchar (18) not null,
    IDSucursal int not null,
)

CREATE TABLE Sucursal(
	IDSucursal int not null,
    SucCalle varchar(100) not null,
    SucCiudad varchar(50) not null,
    SucEstado varchar(50)not null,
    SucCorreo varchar(100)not null,
    SucTelefono varchar(10)not null,
    IDCedi int not null
)

CREATE TABLE CEDI(
	IDCedi int not null,
    CEDICorreo varchar(100) not null,
    CEDITelefono varchar(10) not null,
    CEDICapacidad int not null,
    CEDICalle varchar(100) not null,
    CEDICiudad varchar(50) not null,
    CEDIEstado varchar(50) not null,
	CEDIIDSucursal int not null,
	IDOrdenComp int not null
)

CREATE TABLE OrdenCompra(
	IDOrdenComp int not null,
	FechaPedido datetime not null,
	FechaEntrega datetime not null,
	Cantidad int not null,
	Total int not null,
	IDProducto int not null
)

CREATE TABLE Producto(
	IDproducto int not null,
    ProdNombre varchar(100) not null,
    ProdPrecio int not null,
    ProdCantidadStock int not null,
	IDProveedor int not null,
	IDCategoria int not null
)
CREATE TABLE Categoria(
	IDCategoria int not null,
	Nombre_Categoria varchar(100) not null,
	Descripcion_Categoria varchar(100)not null,
)
CREATE TABLE Proveedor(
	IDProveedor int not null,
    ProvNombre varchar (100)not null,
    ProvTelefono varchar(10)not null,
    ProvCorreo varchar(100)not null,
    ProvCalle varchar(100)not null,
    ProvCiudad varchar(50)not null,
    ProvEstado varchar(50)not null,
	ProvRFC varchar (13) not null,
	ProvCURP varchar (13) not null,
	IDCedi int not null,
)
GO
--LLAVES PRIMARIAS
ALTER TABLE Cliente ADD CONSTRAINT PK_CLIENTE PRIMARY KEY (IDCliente)
ALTER TABLE OrdenVenta ADD CONSTRAINT PK_OrdenVenta PRIMARY KEY (IDOrdenvent)
ALTER TABLE Empleado ADD CONSTRAINT PK_Empleado PRIMARY KEY (IDEmpleado)
ALTER TABLE Sucursal ADD CONSTRAINT PK_Sucursal PRIMARY KEY (IDSucursal)
ALTER TABLE CEDI ADD CONSTRAINT PK_Cedi PRIMARY KEY (IDCedi)
ALTER TABLE OrdenCompra ADD CONSTRAINT PK_OrdenCompra PRIMARY KEY (IDOrdenComp)
ALTER TABLE Proveedor ADD CONSTRAINT PK_Proveedor PRIMARY KEY (IDProveedor)
ALTER TABLE Producto ADD CONSTRAINT PK_Producto PRIMARY KEY (IDProducto)
ALTER TABLE Categoria ADD CONSTRAINT PK_Categoria PRIMARY KEY (IDCategoria)
--LLAVES FORANEAS
GO
ALTER TABLE OrdenVenta ADD CONSTRAINT FK_OrdenVenta_Cliente FOREIGN KEY (IDCliente) REFERENCES Cliente (IDCliente),
CONSTRAINT FK_OrdenVenta_Empleado FOREIGN KEY(IDEmpleado) REFERENCES Empleado (IDEmpleado)
GO
ALTER TABLE Empleado ADD CONSTRAINT FK_Empleado_Sucursal FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal)
ALTER TABLE Sucursal ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi)
ALTER TABLE CEDI ADD CONSTRAINT FK_CEDI_OrdenCompra FOREIGN KEY (IDOrdenComp) REFERENCES OrdenCompra (IDOrdenComp)
ALTER TABLE OrdenCompra ADD CONSTRAINT FK_OrdenCompra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto)
ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor)REFERENCES Proveedor (IDProveedor),
CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Categoria (IDCategoria)

GO
--LLAVES UNICAS
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpRFC UNIQUE (EmpRFC)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpUsuario UNIQUE (EmpUsuario)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpContrasena UNIQUE (EmpContrasena)
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpCURP UNIQUE (EmpCURP)


ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CleRFC UNIQUE (CleRFC)
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CleCURP UNIQUE (CleCURP)

ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_ProvRFC UNIQUE (ProvRFC)
ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_ProvCURP UNIQUE (ProvCURP)
GO
--LLAVES POR DEFAULT
ALTER TABLE Empleado ADD CONSTRAINT DF_Empleado_EmpTelefono DEFAULT ('SIN TELEFONO') FOR EmpTelefono,
CONSTRAINT DF_Empleado_EmpCorreo DEFAULT ('SIN CORREO') FOR EmpCorreo
GO

ALTER TABLE Cliente ADD CONSTRAINT DF_Cliente_CleTelefono DEFAULT ('SIN TELEFONO') FOR CleTelefono,
CONSTRAINT DF_Cliente_CleCorreo DEFAULT ('SIN CORREO') FOR CleCorreo
GO

ALTER TABLE Proveedor ADD CONSTRAINT DF_Proveedor_ProvTelefono DEFAULT ('SIN TELEFONO') FOR ProvTelefono,
CONSTRAINT DF_Proveedor_ProvCorreo DEFAULT ('SIN CORREO') FOR ProvCorreo
GO

--DROP DATABASE AGROSYSTEM
