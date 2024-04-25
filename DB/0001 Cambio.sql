CREATE DATABASE AgroSystem;

use AgroSystem;

CREATE TABLE Cliente(
	IDcliente int not null primary key,
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
    	unique(CleRFC, CleCURP)
);

CREATE TABLE OrdenVenta(
	IDOrdenvent int not null primary key,
	FechaPedido date not null,
	FechaEntrega date not null,
	Total int not null,
	IDCliente int not null,
	IDEmpleado int not null
);

CREATE TABLE Empleado(
	IDEmpleado int not null primary key,
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
    	unique(EmpRFC, EmpUsuario, EmpContrasena, EmpCURP)
);

CREATE TABLE Sucursal(
	IDSucursal int not null primary key,
	SucCalle varchar(100) not null,
	SucCiudad varchar(50) not null,
	SucEstado varchar(50)not null,
	SucCorreo varchar(100)not null,
	SucTelefono varchar(10)not null,
	IDCedi int not null
);

CREATE TABLE CEDI(
	IDCedi int not null primary key,
	CEDICorreo varchar(100) not null,
	CEDITelefono varchar(10) not null,
	CEDICapacidad int not null,
	CEDICalle varchar(100) not null,
	CEDICiudad varchar(50) not null,
	CEDIEstado varchar(50) not null,
	CEDIIDSucursal int not null,
	IDOrdenComp int not null
);

CREATE TABLE OrdenCompra(
	IDOrdenComp int not null primary key,
	FechaPedido datetime not null,
	FechaEntrega datetime not null,
	Cantidad int not null,
	Total int not null,
	IDProducto int not null
);

CREATE TABLE Producto(
	IDproducto int not null primary key,
	ProdNombre varchar(100) not null,
	ProdPrecio int not null,
	ProdCantidadStock int not null,
	IDProveedor int not null,
	IDCategoria int not null
);

CREATE TABLE Categoria(
	IDCategoria int not null primary key,
	Nombre_Categoria varchar(100) not null,
	Descripcion_Categoria varchar(100)not null
);

CREATE TABLE Proveedor(
	IDProveedor int not null primary key,
	ProvNombre varchar (100)not null,
	ProvTelefono varchar(10)not null,
	ProvCorreo varchar(100)not null,
	ProvCalle varchar(100)not null,
	ProvCiudad varchar(50)not null,
	ProvEstado varchar(50)not null,
	ProvRFC varchar (13) not null,
	ProvCURP varchar (13) not null,
	IDCedi int not null,
    	unique(ProvRFC, ProvCURP)
);

-- Llaves foraneas
ALTER TABLE OrdenVenta ADD CONSTRAINT FK_OrdenVenta_Cliente FOREIGN KEY (IDCliente) REFERENCES Cliente (IDCliente),
ADD CONSTRAINT FK_OrdenVenta_Empleado FOREIGN KEY(IDEmpleado) REFERENCES Empleado (IDEmpleado);

ALTER TABLE Empleado ADD CONSTRAINT FK_Empleado_Sucursal FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal);

ALTER TABLE Sucursal ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi);

ALTER TABLE CEDI ADD CONSTRAINT FK_CEDI_OrdenCompra FOREIGN KEY (IDOrdenComp) REFERENCES OrdenCompra (IDOrdenComp);

ALTER TABLE OrdenCompra ADD CONSTRAINT FK_OrdenCompra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto);

ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor) REFERENCES Proveedor (IDProveedor), ADD CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Categoria (IDCategoria);

-- Llaves por DEFAULT
ALTER TABLE Empleado
MODIFY COLUMN EmpTelefono varchar(100) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN EmpCorreo varchar(100) DEFAULT 'SIN CORREO';

ALTER TABLE Cliente
MODIFY COLUMN CleTelefono varchar(100) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN CleCorreo varchar(100) DEFAULT 'SIN CORREO';

ALTER TABLE Proveedor
MODIFY COLUMN ProvTelefono varchar(100) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN ProvCorreo varchar(100) DEFAULT 'SIN CORREO';

-- DROP DATABASE agrosystem
