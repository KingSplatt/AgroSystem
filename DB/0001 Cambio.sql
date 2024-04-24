CREATE DATABASE AGROSYSTEM
GO
USE AGROSYSTEM
GO

CREATE TABLE Sucursal(
	IDSucursal int not null,
    Calle varchar(100) not null,
    Ciudad varchar(50) not null,
    Estado varchar(50)not null,
    Correo varchar(100)not null,
    Telefono char(10)not null,
    IDCedi int not null
)

CREATE TABLE CEDI(
	IDCedi int not null,
    Correo varchar(100) not null,
    Telefono char(10) not null,
    Capacidad int not null,
    Calle varchar(100) not null,
    Ciudad varchar(50) not null,
    Estado varchar(50) not null,
	IDSucursal int not null,
	IDProducto int not null
)

CREATE TABLE Cliente(
	IDcliente int not null,
    Nombre varchar(100)not null,
    ApellidoPaterno varchar(20)not null,
    ApellidoMaterno varchar(20)not null,
    Calle varchar (100)not null,
    Estado varchar (50)not null,
    Ciudad varchar (50)not null,
    Correo varchar (100)not null,
    Telefono char (10)not null,
	IDEmpleado int not null
)

CREATE TABLE Empleado(
	IDEmpleado int not null,
    Nombre varchar(100)not null,
    ApellidoPaterno varchar(20)not null,
    ApellidoMaterno varchar(20)not null,
    Correo varchar(100)not null,
    Telefono char(10)not null,
    Calle varchar(100)not null,
    Ciudad varchar(50)not null,
    Estado varchar(50)not null,
    Puesto varchar(20)not null,
    Usuario varchar(30)not null,
    Contraseña varchar(30)not null,
    FechaNacimiento date not null,
    FechaIncio date not null,
    IDSucursal int not null,
)

CREATE TABLE Proveedor(
	IDProveedor int not null,
    Nombre varchar (100)not null,
    Telefono char(10)not null,
    Correo varchar(100)not null,
    Calle varchar(100)not null,
    Ciudad varchar(50)not null,
    Estado varchar(50)not null,
	IDCedi int not null,
)

CREATE TABLE Producto(
	IDproducto int not null,
    Nombre varchar(100) not null,
    Categoria varchar(20) not null,
    Precio int not null,
    CantidadStock int not null,
	IDProveedor int not null,
	IDCategoria int not null
)
CREATE TABLE Categorias(
	IDCategoria int not null,
	Nombre_Categoria varchar(100) not null,
	Descripcion_Categoria varchar(100)not null,
)

CREATE TABLE Ordenes(
	IDOrden int not null,
    FechaPedido date not null,
    FechaEntrega date not null,
    Total int not null,
    IDEmpleado int not null,
	IDCliente int not null
)

