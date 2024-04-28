CREATE DATABASE AgroSystem;

use AgroSystem;

CREATE TABLE Cliente(
	IDCliente int not null,
    CleNombre nvarchar(100) not null,
    CleApellidoPaterno nvarchar(20) not null,
    CleApellidoMaterno nvarchar(20) not null,
    CleCalle nvarchar (100) not null,
    CleEstado nvarchar (50) not null,
    CleCiudad nvarchar (50) not null,
    CleCorreo nvarchar (100) not null,
    CleTelefono char (10) not null,
    CleRFC nvarchar (13) not null,
    CleCURP nvarchar (18) not null
);

CREATE TABLE Venta(
	IDOrdenVenta int not null,
    FechaPedido date not null,
    FechaEntrega date not null,
    Subtotal double not null,
    Total double not null,
    IDCliente int not null,
    IDEmpleado int not null
);

CREATE TABLE DetalleVenta(
	IDOrdenVenta int not null,
    IDProducto int not null,
    PrecioUnitario double not null,
    Cantidad int not null,
    Descuento real
);

CREATE TABLE Empleado(
	IDEmpleado int not null,
    EmpNombre nvarchar (100) not null,
    EmpApellidoPaterno nvarchar (20) not null,
    EmpApellidoMaterno nvarchar (20) not null,
    EmpCorreo nvarchar (100) not null,
    EmpTelefono nvarchar (15) not null,
    EmpCalle nvarchar (100) not null,
    EmpCiudad nvarchar (50) not null,
    EmpEstado nvarchar (50) not null,
    EmpPuesto nvarchar (20) not null,
    EmpUsuario nvarchar (30) not null,
    EmpContraseña nvarchar (30) not null,
    EmpFechaNacimiento date not null,
    EmpFechaIncio date not null,
    EmpRFC nchar (13) not null,
    EmpCURP nchar (18) not null,
    IDSucursal int not null
);

CREATE TABLE Sucursal(
	IDSucursal int not null,
    SucCalle nvarchar (100) not null,
    SucCiudad nvarchar (50) not null,
    SucEstado nvarchar (50) not null,
    SucCorreo nvarchar (100) not null,
    SucTelefono nchar (10) not null,
    IDCedi int not null
);

CREATE TABLE CEDI(
	IDCedi int not null,
    CEDICorreo nvarchar (100) not null,
    CEDITelefono nchar (10) not null,
    CEDICapacidad int not null,
    CEDICalle nvarchar (100) not null,
    CEDICiudad nvarchar (50) not null,
    CEDIEstado nvarchar (50) not null,
    CEDIIDSucusal int not null
);

CREATE TABLE DetalleCompra(
	IDOrdenComp int not null,
	IDProducto int not null,
	Cantidad int not null,
	PrecioUnitario double not null
);

CREATE TABLE OrdenCompra(
	IDOrdenCompra int not null,
	FechaPedido datetime not null,
	FechaEntrega datetime not null,
	SubTotal double not null,
	Total double not null,
	IDCedi int not null
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
	NombreCategoria nvarchar(100) not null,
	DescripcionCategoria nvarchar(100)not null
);

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
);

CREATE TABLE ProductoSucursal(
	IDSucursal int not null,
	IDproducto int not null,
	fechaSurtido date not null
);

create table ProductoCEDI(
	IDProducto int not null ,
	IDCedi int not null,
	fechaSurtido date not null,
	fechaCaducidad date not null
);

-- Llaves primarias

ALTER TABLE Cliente ADD PRIMARY KEY PK_Cliente (IDCliente);
ALTER TABLE Venta ADD PRIMARY KEY PK_OrdenVenta (IDOrdenVenta);
ALTER TABLE Empleado ADD PRIMARY KEY PK_Empleado (IDEmpleado);
ALTER TABLE Sucursal ADD PRIMARY KEY PK_Sucursal (IDSucursal);
ALTER TABLE CEDI ADD PRIMARY KEY PK_CEDI (IDCedi);
ALTER TABLE OrdenCompra ADD PRIMARY KEY PK_OrdenCompra (IDOrdenCompra);
ALTER TABLE Proveedor ADD PRIMARY KEY PK_Proveedor (IDProveedor);
ALTER TABLE Producto ADD PRIMARY KEY PK_Producto (IDProducto);
ALTER TABLE Categoria ADD PRIMARY KEY PK_Categoria (IDCategoria);

-- Llaves foraneas

ALTER TABLE Empleado ADD CONSTRAINT FK_Empleado_Sucursal FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal);
ALTER TABLE Sucursal ADD CONSTRAINT FK_Sucursal_CEDI FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi);
ALTER TABLE DetalleCompra ADD CONSTRAINT FK_DetalleCompra_Producto FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto);
ALTER TABLE OrdenCompra ADD CONSTRAINT FK_OrdenCompra FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi);
ALTER TABLE Producto ADD CONSTRAINT FK_Producto_Proveedor FOREIGN KEY (IDProveedor) REFERENCES Proveedor (IDProveedor), ADD CONSTRAINT FK_Producto_Categoria FOREIGN KEY (IDCategoria) REFERENCES Categoria (IDCategoria);
ALTER TABLE ProductoSucursal ADD CONSTRAINT FK_Sucursal_PS FOREIGN KEY (IDSucursal) REFERENCES Sucursal (IDSucursal), ADD CONSTRAINT FK_Producto_PS FOREIGN KEY (IDProducto) REFERENCES Producto (IDProducto);
ALTER TABLE ProductoCEDI ADD CONSTRAINT FK_Producto_PC FOREIGN KEY (IDProducto) REFERENCES Producto(IDProducto), ADD CONSTRAINT FK_CEDI_PC FOREIGN KEY (IDCedi) REFERENCES CEDI (IDCedi);

-- Llaves unicas

ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpRFC UNIQUE (EmpRFC);
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpUsuario UNIQUE (EmpUsuario);
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpContraseña UNIQUE (EmpContraseña);
ALTER TABLE Empleado ADD CONSTRAINT UC_Empleado_EmpCURP UNIQUE (EmpCURP);

ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CleRFC UNIQUE (CleRFC);
ALTER TABLE Cliente ADD CONSTRAINT UC_Cliente_CleCURP UNIQUE (CleCURP);

ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_ProvRFC UNIQUE (ProvRFC);
ALTER TABLE Proveedor ADD CONSTRAINT UC_Proveedor_ProvCURP UNIQUE (ProvCURP);

-- Valores por default

ALTER TABLE Empleado 
MODIFY COLUMN EmpTelefono nvarchar (100) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN EmpCorreo nvarchar (100) DEFAULT 'SIN CORREO';

ALTER TABLE Cliente 
MODIFY COLUMN CleTelefono nvarchar (100)  DEFAULT 'SIN TELEFONO',
MODIFY COLUMN CleCorreo nvarchar (100) DEFAULT 'SIN CORREO';

ALTER TABLE Proveedor 
MODIFY COLUMN ProvTelefono nvarchar (100) DEFAULT 'SIN TELEFONO',
MODIFY COLUMN ProvCorreo  nvarchar (100) DEFAULT 'SIN CORREO';

ALTER TABLE DetalleVenta 
MODIFY COLUMN PrecioUnitario  int DEFAULT 0,
MODIFY COLUMN Cantidad int DEFAULT 1,
MODIFY COLUMN Descuento int DEFAULT 0;

-- DROP DATABASE agrosystem