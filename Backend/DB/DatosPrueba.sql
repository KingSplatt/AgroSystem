use AgroSystem;

-- Inserciones de ejemplo a la tabla Estado
INSERT INTO Estado (IDEstado, Nombre) VALUES (1, 'Baja California');
INSERT INTO Estado (IDEstado, Nombre) VALUES (2, 'Baja California Sur');
INSERT INTO Estado (IDEstado, Nombre) VALUES (3, 'Sinaloa');
INSERT INTO Estado (IDEstado, Nombre) VALUES (4, 'Sonora');
INSERT INTO Estado (IDEstado, Nombre) VALUES (5, 'Chihuahua');
INSERT INTO Estado (IDEstado, Nombre) VALUES (6, 'Hidalgo');
INSERT INTO Estado (IDEstado, Nombre) VALUES (7, 'Tamaulipas');
INSERT INTO Estado (IDEstado, Nombre) VALUES (8, 'Nayarit');
INSERT INTO Estado (IDEstado, Nombre) VALUES (9, 'Nuevo León');
INSERT INTO Estado (IDEstado, Nombre) VALUES (10, 'Puebla');

-- Inserciones de ejemplo a la tabla Ciudad
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (1, 'Tijuana', 1); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (2, 'Mexicali', 1); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (3, 'La Paz', 2); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (4, 'Cabo San Lucas', 2); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (5, 'Culiacán', 3); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (6, 'Mazatlán', 3); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (7, 'Hermosillo', 4); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (8, 'Nogales', 4); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (9, 'Chihuahua', 5); 
INSERT INTO Ciudad (IDCiudad, Nombre, IDEstado) VALUES (10, 'Juárez', 5); 

-- Inserciones de datos a la tabla cliente

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (1, 'Juan', 'López', 'García', 'juanito123', 'contraseña123', 'juanito@example.com', '1234567890', 'LOPG890123ABC', 'LOPG890123HDFJNS00', 1);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (2, 'María', 'Martínez', 'Hernández', 'maria87', 'segura456', 'maria@example.com', '9876543210', 'MAHE871210XYZ', 'MAHE871210MNJDKS12', 2);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (3, 'Pedro', 'González', 'Rodríguez', 'pedrito22', 'p3dr0123', 'pedro@example.com', '5551234567', 'GORP890324RST', 'GORP890324SDFKAS89', 3);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (4, 'Ana', 'Díaz', 'López', 'anita2024', 'ana456', 'ana@example.com', '7779876543', 'DIAL900101QWE', 'DIAL900101LKJHS98', 4);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (5, 'Carlos', 'Ramírez', 'Gómez', 'carlitos123', 'seguro789', 'carlos@example.com', '9998765432', 'RAGC950202PQR', 'RAGC950202ERTYU09', 5);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (6, 'Laura', 'Hernández', 'Martínez', 'laurita99', 'contra99', 'laura@example.com', '3332221111', 'HEML880303ABC', 'HEML880303QWERTY99', 6);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (7, 'Miguel', 'Pérez', 'Sánchez', 'mikeP', '1234mike', 'miguel@example.com', '7778889990', 'PESM910101XYZ', 'PESM910101ASDFGH00', 7);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (8, 'Paola', 'Luna', 'Vega', 'paolalv', 'password123', 'paola@example.com', '1112223334', 'LUVP920202ABC', 'LUVP920202ZXCVBN12', 8);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (9, 'Ricardo', 'García', 'Flores', 'ricflo', 'ricardito1', 'ricardo@example.com', '4445556667', 'GARF880101XYZ', 'GARF880101QWERTY01', 9);

INSERT INTO Cliente (IDCliente, Nombre, ApellidoPaterno, ApellidoMaterno, Usuario, Contrasena, Correo, Telefono, RFC, CURP, IDCiudad) 
VALUES (10, 'Karla', 'Morales', 'Juárez', 'karlita87', 'karlita123', 'karla@example.com', '6667778889', 'MOJK900303ABC', 'MOJK900303POIUYTRE', 10);

-- Insercion de ejemplo a la tabla Proveedor

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (1, 'Proveedor1', '1234567890', 'proveedor1@example.com', 'ABC123456DEF', 'CURP123456', 1, 1);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (2, 'Proveedor2', '9876543210', 'proveedor2@example.com', 'DEF789012ABC', 'CURP789012', 1, 2);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (3, 'Proveedor3', '7418529630', 'proveedor3@example.com', 'GHI567890JKL', 'CURP567890', 0, 3);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (4, 'Proveedor4', '1593578520', 'proveedor4@example.com', 'JKL234567MNO', 'CURP234567', 0, 1);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (5, 'Proveedor5', '3692581470', 'proveedor5@example.com', 'MNO345678PQR', 'CURP345678', 1, 2);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (6, 'Proveedor6', '2583691470', 'proveedor6@example.com', 'PQR456789STU', 'CURP456589', 0, 3);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (7, 'Proveedor7', '1472583690', 'proveedor7@example.com', 'STU567890VWX', 'CURP567190', 1, 1);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (8, 'Proveedor8', '3691472580', 'proveedor8@example.com', 'VWX678901YZA', 'CURP678901', 0, 2);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (9, 'Proveedor9', '1473692580', 'proveedor9@example.com', 'YZA789012BCD', 'CURP781012', 1, 3);

INSERT INTO Proveedor (IDProveedor, Nombre, Telefono, Correo, RFC, CURP, Legalizado, IDCiudad) 
VALUES (10, 'Proveedor10', '3691472583', 'proveedor10@example.com', 'BCD890123EFG', 'CURP890123', 1, 1);


-- Insercion de ejemplo a la tabla Categoria
INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (1, 'Electrónica', 'Productos relacionados con la electrónica.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (2, 'Ropa', 'Productos relacionados con la moda y vestimenta.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (3, 'Hogar', 'Productos para el hogar y decoración.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (4, 'Alimentos', 'Productos alimenticios.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (5, 'Salud y Belleza', 'Productos relacionados con el cuidado personal y la salud.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (6, 'Automóviles', 'Productos y servicios para automóviles.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (7, 'Deporte y Fitness', 'Productos y equipos deportivos y de fitness.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (8, 'Juguetes y Juegos', 'Productos relacionados con el entretenimiento y juegos.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (9, 'Libros y Revistas', 'Libros, revistas y materiales de lectura.');

INSERT INTO Categoria (IDCategoria, NombreCategoria, DescripcionCategoria) 
VALUES (10, 'Electrodomésticos', 'Productos electrónicos para el hogar y la cocina.');

-- Inserciones de ejemplo a la tabla Producto
INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(1, 'Roundup Ultra', 'Herbicida sistémico no selectivo para control de malezas', 3500, 0, 1, 1);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(2, 'Folicur EW', 'Fungicida sistémico de amplio espectro para cultivos', 4200, 0, 2, 2);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(3, 'Actara 25 WG', 'Insecticida sistémico para el control de plagas en cultivos', 3100, 0, 3, 3);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(4, 'YaraMila Complex', 'Fertilizante granulado NPK 12-11-18', 2700, 0, 4, 4);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(5, 'ProGibb T&O', 'Regulador de crecimiento para mejorar el tamaño de los frutos', 1500, 0, 5, 5);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(6, 'Silwet L-77', 'Adyuvante para mejorar la adherencia de pesticidas', 1200, 0, 6, 6);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(7, 'Viva', 'Bioestimulante líquido para aumentar la resistencia de las plantas', 5400, 0, 7, 7);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(8, 'Prowl H2O', 'Herbicida pre-emergente para control de malezas en cultivos de maíz', 3800, 1, 8, 8);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(9, 'Score 250 EC', 'Fungicida sistémico para el control de enfermedades foliares', 2900, 0, 9, 9);

INSERT INTO Producto (IDProducto, Nombre, Descripcion, PrecioUnitario, Descontinuado, IDProveedor, IDCategoria)
VALUES(10, 'Neemix 4.5', 'Insecticida orgánico a base de aceite de neem', 2600, 0, 10, 10);

INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (1,1);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (1,2);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (1,3);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (1,4);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (1,5);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (1,6);

INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (2,1);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (2,2);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (2,3);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (2,4);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (2,5);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (2,6);

INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (3,1);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (3,2);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (3,3);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (3,4);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (3,5);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (3,6);

INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (4,1);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (4,2);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (4,3);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (4,4);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (4,5);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (4,6);

INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (5,1);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (5,2);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (5,3);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (5,4);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (5,5);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (5,6);

INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (6,1);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (6,2);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (6,3);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (6,4);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (6,5);
INSERT INTO PRODUCTOPROVEEDOR (IDProveedor, IDProducto) VALUES (6,6);

-- Insercion de ejemplo a la tabla CEDI

INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (1, 'Centro de Distribución Baja', 'contacto@cedibaja.com', '6641234567', 1);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (2, 'Almacén Mexicali', 'info@almacenmexicali.com', '6869876543', 2);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (3, 'Depósito La Paz', 'ventas@depositolapaz.com', '6125557890', 3);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (4, 'Bodega Cabo', 'contacto@bodegacabo.com', '6241234567', 4);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (5, 'Almacén Culiacán', 'info@almacenculiacan.com', '6677890123', 5);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (6, 'Centro de Distribución Mazatlán', 'ventas@cedimazatlan.com', '6695556789', 6);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (7, 'Depósito Hermosillo', 'contacto@depositohermosillo.com', '6622223333', 7);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (8, 'Bodega Nogales', 'info@bodeganogales.com', '6314445555', 8);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (9, 'Almacén Chihuahua', 'ventas@almacenchihuahua.com', '6147778888', 9);
INSERT INTO CEDI (IDCedi, Nombre, Correo, Telefono, IDCiudad) VALUES (10, 'Centro de Distribución Juárez', 'contacto@cedijuarez.com', '6569990000', 10);

-- Insercion de ejemplo a la tabla Sucursal
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (1, 'sucursal1@example.com', '1234567890', 1, 1); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (2, 'sucursal2@example.com', '9876543210', 2, 2); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (3, 'sucursal3@example.com', '7418529630', 3, 3); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (4, 'sucursal4@example.com', '1593578520', 4, 1); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (5, 'sucursal5@example.com', '3692581470', 5, 2); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (6, 'sucursal6@example.com', '2583691470', 6, 3); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (7, 'sucursal7@example.com', '1472583690', 7, 1); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (8, 'sucursal8@example.com', '3691472580', 8, 2); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (9, 'sucursal9@example.com', '1473692580', 9, 3); 
INSERT INTO Sucursal (IDSucursal, Correo, Telefono, IDCedi, IDCiudad) VALUES (10, 'sucursal10@example.com', '3691472583', 10, 1); 

-- Inserciones de ejemplo a la tabla Empleado
-- empleados Sucursal
INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (1, 'Juan', 'García', 'López', 'juan.garcia@example.com', '1234567890', 'Vendedor', 'juangarcia', 'password123', '1990-05-10', '2022-01-15', 'GARJ900510XXX', 'GALJ900510HDFLRN09', 1, 1);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (2, 'María', 'Martínez', 'Hernández', 'maria.martinez@example.com', '9876543210', 'Cajero', 'mariamartinez', 'password456', '1992-08-20', '2022-02-10', 'MARH920820XXX', 'MAHM920820MDFRNN08', 2, 2);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (3, 'Carlos', 'López', 'Sánchez', 'carlos.lopez@example.com', '7418529630', 'Gerente', 'carloslopez', 'password789', '1985-04-15', '2022-03-05', 'LOSC850415XXX', 'LOSC850415HDFLRN02', 3, 3);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (4, 'Ana', 'Gómez', 'Pérez', 'ana.gomez@example.com', '1593578520', 'Vendedor', 'anagomez', 'passwordabc', '1988-12-03', '2022-04-20', 'GOMA881203XXX', 'GOPA881203MDFRRN03', 4, 1);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (5, 'Pedro', 'Rodríguez', 'Díaz', 'pedro.rodriguez@example.com', '3692581470', 'Cajero', 'pedrorodriguez', 'passworddef', '1995-10-25', '2022-05-12', 'RODP951025XXX', 'RODP951025HDFRRR05', 5, 2);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (6, 'Laura', 'Hernández', 'López', 'laura.hernandez@example.com', '2583691470', 'Gerente', 'laurahernandez', 'passwordghi', '1983-07-18', '2022-06-08', 'HERL830718XXX', 'HELJ830718MDFLRN06', 6, 3);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (7, 'Diego', 'Martínez', 'Gómez', 'diego.martinez@example.com', '1472583690', 'Vendedor', 'diegomartinez', 'passwordjkl', '1993-09-30', '2022-07-17', 'MAGD930930XXX', 'MAGD930930HDFLRN07', 7, 1);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (8, 'Elena', 'Sánchez', 'Martínez', 'elena.sanchez@example.com', '3691472580', 'Cajero', 'elenasanchez', 'passwordmno', '1997-02-12', '2022-08-22', 'SAME970212XXX', 'SAMM970212MDFLRN08', 8, 2);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (9, 'Javier', 'González', 'López', 'javier.gonzalez@example.com', '1473692580', 'Vendedor', 'javiergonzalez', 'passwordpqr', '1990-11-05', '2022-09-30', 'GOLJ901105XXX', 'GOLJ901105HDFLRN09', 9, 3);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDSucursal, IDCiudad) 
VALUES (10, 'Sofía', 'Pérez', 'García', 'sofia.perez@example.com', '3691472583', 'Gerente', 'sofiaperez', 'passwordstu', '1987-06-28', '2022-10-10', 'PEGM870628XXX', 'PEGM870628MDFLRN10', 10, 1);
-- Empleados en CEDI
INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (11, 'José', 'Ramírez', 'Núñez', 'jose.ramirez@example.com', '1231231234', 'Jefe de Compra', 'joseramirez', 'password12345', '1985-03-15', '2022-01-20', 'RAMJ850315XXX', 'RANJ850315HDFLRN01', 1, 1);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (12, 'Laura', 'Fernández', 'Gómez', 'laura.fernandez@example.com', '4324324321', 'Jefe de Compra', 'laurafernandez', 'password456234', '1990-07-10', '2022-02-25', 'FERL900710XXX', 'FEGL900710MDFLRN02', 2, 2);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (13, 'Miguel', 'Santos', 'Hernández', 'miguel.santos@example.com', '5435435432', 'Jefe de Compra', 'miguelsantos', 'password78923423', '1982-12-25', '2022-03-15', 'SANM821225XXX', 'SAHM821225HDFLRN03', 3, 3);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (14, 'Lucía', 'García', 'Martínez', 'lucia.garcia@example.com', '6546546543', 'Jefe de Compra', 'luciagarcia', 'passwordabc1', '1989-11-11', '2022-04-05', 'GALM891111XXX', 'GAMM891111MDFLRN04', 4, 1);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (15, 'Roberto', 'López', 'Pérez', 'roberto.lopez@example.com', '7657657654', 'Jefe de Compra', 'robertolopez', 'passworddef1', '1987-05-20', '2022-05-20', 'LOPR870520XXX', 'LOPP870520HDFLRN05', 5, 2);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (16, 'Elena', 'Martínez', 'Soto', 'elena.martinez@example.com', '8768768765', 'Jefe de Compra', 'elenamartinez', 'passwordghi1', '1992-08-18', '2022-06-15', 'MASE920818XXX', 'MASO920818MDFLRN06', 6, 3);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (17, 'Luis', 'Vargas', 'Díaz', 'luis.vargas@example.com', '9879879876', 'Operador', 'Jefe de Compra', 'passwordjkl2', '1983-10-10', '2022-07-10', 'VADL831010XXX', 'VADL831010HDFLRN07', 7, 1);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (18, 'María', 'Hernández', 'Núñez', 'maria.hernandez@example.com', '0980980987', 'Jefe de Compra', 'mariahernandez', 'passwordmn2o', '1986-01-01', '2022-08-01', 'HERM860101XXX', 'HERM860101MDFLRN08', 8, 2);

INSERT INTO Empleado (IDEmpleado, Nombre, ApellidoPaterno, ApellidoMaterno, Correo, Telefono, Puesto, Usuario, Contrasena, FechaNacimiento, FechaInicio, RFC, CURP, IDCEDI, IDCiudad) 
VALUES (19, 'Juan', 'Pérez', 'Sánchez', 'juan.perez@example.com', '1091091098', 'Jefe de Compra', 'juanperez', 'pass2wordpqr', '1991-04-14', '2022-09-14', 'PEJH910414XXX', 'PEJH910414HDFLRN09', 9, 3);


-- Inserciones de ejemplo a la tabla Venta
INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (1, '2024-05-01', 150.00, 165.00, 1, 1, 1);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (2, '2024-05-02', 200.00, 220.00, 0, 2, 2);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (3, '2024-05-03', 100.00, 110.00, 1, 3, 1);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (4, '2024-05-04', 75.00, 82.50, 0, 4, 2);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (5, '2024-05-05', 300.00, 330.00, 1, 5, 3);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (6, '2024-05-06', 250.00, 275.00, 0, 6, 1);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (7, '2024-05-07', 180.00, 198.00, 1, 7, 2);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (8, '2024-05-08', 90.00, 99.00, 0, 8, 3);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (9, '2024-05-09', 120.00, 132.00, 1, 9, 1);

INSERT INTO Venta (IDVenta, FechaPedido, Subtotal, Total, Credito, IDCliente, IDEmpleado) 
VALUES (10, '2024-05-10', 400.00, 440.00, 0, 10, 2);

-- Insercion de ejemplo a la tabla DetalleVenta
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (150.00, 2, 1, 1);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (200.00, 1, 2, 2);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (100.00, 3, 3, 3);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (75.00, 1, 4, 4);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (300.00, 2, 5, 5);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (250.00, 1, 6, 6);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (180.00, 2, 7, 7);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (90.00, 3, 8, 8);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (120.00, 1, 9, 9);
INSERT INTO DetalleVenta (PrecioUnitario, Cantidad, IDVenta, IDProducto) VALUES (400.00, 2, 10, 10);

-- Insercion de ejemplo a la tabla DetalleVentaCredito
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (150.00, 2, '2024-05-15 10:00:00', 50.00, 1, 1);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (200.00, 1, '2024-05-20 09:00:00', 75.00, 2, 2);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (100.00, 3, '2024-05-25 12:00:00', 30.00, 3, 3);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (75.00, 1, '2024-05-30 08:00:00', 20.00, 4, 4);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (300.00, 2, '2024-06-01 11:00:00', 100.00, 5, 5);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (250.00, 1, '2024-06-05 10:00:00', 80.00, 6, 6);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (180.00, 2, '2024-06-10 09:00:00', 60.00, 7, 7);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (90.00, 3, '2024-06-15 12:00:00', 30.00, 8, 8);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (120.00, 1, '2024-06-20 08:00:00', 40.00, 9, 9);
INSERT INTO DetalleVentaCredito (PrecioUnitario, Cantidad, FechaPlazo, PagoInicial, IDVenta, IDProducto) VALUES (400.00, 2, '2024-06-25 11:00:00', 150.00, 10, 10);

--  Inserciones de ejemplo a la tabla Compra
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (1, '2024-05-01 08:00:00', 500.00, 550.00, 1, 1);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (2, '2024-05-02 09:00:00', 700.00, 770.00, 2, 2);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (3, '2024-05-03 10:00:00', 900.00, 990.00, 3, 3);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (4, '2024-05-04 11:00:00', 1100.00, 1210.00, 4, 4);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (5, '2024-05-05 12:00:00', 1300.00, 1430.00, 5, 5);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (6, '2024-05-06 13:00:00', 1500.00, 1650.00, 6, 6);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (7, '2024-05-07 14:00:00', 1700.00, 1870.00, 7, 7);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (8, '2024-05-08 15:00:00', 1900.00, 2090.00, 8, 8);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (9, '2024-05-09 16:00:00', 2100.00, 2310.00, 9, 9);
INSERT INTO Compra (IDCompra, FechaPedido,  SubTotal, Total, IDCedi, IDEmpleado) VALUES (10, '2024-05-10 17:00:00', 2300.00, 2530.00, 10, 10);

-- Inserciones de ejemplo a la tabla DetalleCompra
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (10, 20.50, 1, 1);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (15, 30.75, 2, 2);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (20, 25.00, 3, 3);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (25, 15.50, 4, 4);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (30, 40.25, 5, 5);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (35, 22.75, 6, 6);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (40, 18.90, 7, 7);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (45, 35.00, 8, 8);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (50, 28.60, 9, 9);
INSERT INTO DetalleCompra (Cantidad, PrecioUnitario, IDCompra, IDProducto) VALUES (55, 45.75, 10, 10);

-- Inserciones de ejemplo a la tabla ProductoSucursal
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 1);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 2);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 3);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 4);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 5);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 6);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 7);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 8);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 9);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 10);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 1);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 2);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 3);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 4);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 5);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 6);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 7);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 8);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 9);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 1, 10);


INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 1);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 2);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 3);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 4);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 5);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 6);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 7);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 8);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 9);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 10);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 1);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 2);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 3);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 4);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 5);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 6);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 7);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 8);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 9);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 2, 10);

INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 1);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 2);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 3);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 4);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 5);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 6);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 7);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 8);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 9);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 10);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 1);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 2);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 3);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 4);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 5);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 6);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 7);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 8);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 9);
INSERT INTO ProductoSucursal (FechaSurtido, FechaCaducidad, IDSucursal, IDProducto) VALUES ('2024-05-01 08:00:00', '2024-12-31 23:59:59', 3, 10);

-- Inserciones de ejemplo a la tabla ProductoCEDI
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-01', '2024-12-31', 1, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-02', '2024-12-31', 2, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-03', '2024-12-31', 5, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-04', '2024-12-31', 5, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-05', '2024-12-31', 5, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-06', '2024-12-31', 6, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-07', '2024-12-31', 7, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-08', '2024-12-31', 8, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-09', '2024-12-31', 9, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-10', '2024-12-31', 10, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-01', '2024-12-31', 1, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-02', '2024-12-31', 2, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-03', '2024-12-31', 5, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-04', '2024-12-31', 5, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-05', '2024-12-31', 5, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-06', '2024-12-31', 6, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-07', '2024-12-31', 7, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-08', '2024-12-31', 8, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-09', '2024-12-31', 9, 1);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-10', '2024-12-31', 10, 1);

INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-01', '2024-12-31', 1, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-02', '2024-12-31', 2, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-03', '2024-12-31', 5, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-04', '2024-12-31', 5, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-05', '2024-12-31', 5, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-06', '2024-12-31', 6, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-07', '2024-12-31', 7, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-08', '2024-12-31', 8, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-09', '2024-12-31', 9, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-10', '2024-12-31', 10,2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-01', '2024-12-31', 1, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-02', '2024-12-31', 2, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-03', '2024-12-31', 5, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-04', '2024-12-31', 5, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-05', '2024-12-31', 5, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-06', '2024-12-31', 6, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-07', '2024-12-31', 7, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-08', '2024-12-31', 8, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-09', '2024-12-31', 9, 2);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-10', '2024-12-31', 10,2);

INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-01', '2024-12-31', 1, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-02', '2024-12-31', 2, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-03', '2024-12-31', 5, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-04', '2024-12-31', 5, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-05', '2024-12-31', 5, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-06', '2024-12-31', 6, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-07', '2024-12-31', 7, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-08', '2024-12-31', 8, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-09', '2024-12-31', 9, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-10', '2024-12-31', 10,3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-01', '2024-12-31', 1, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-02', '2024-12-31', 2, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-03', '2024-12-31', 5, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-04', '2024-12-31', 5, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-05', '2024-12-31', 5, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-06', '2024-12-31', 6, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-07', '2024-12-31', 7, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-08', '2024-12-31', 8, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-09', '2024-12-31', 9, 3);
INSERT INTO ProductoCEDI (FechaSurtido, FechaCaducidad, IDProducto, IDCedi) VALUES ('2024-05-10', '2024-12-31', 10,3);

INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (1, '2024-05-27', 1);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (2, '2024-05-27', 1);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (3, '2024-05-27', 1);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (4, '2024-05-27', 2);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (5, '2024-05-27', 2);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (6, '2024-05-27', 2);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (7, '2024-05-27', 3);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (8, '2024-05-27', 3);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (9, '2024-05-27', 3);
INSERT INTO Cotizacion (IDCotizacion, FechaCotizacion, IDCedi) VALUES (10, '2024-05-27', 4);

INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,1,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (2,1,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (3,1,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,2,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (2,2,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (3,2,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,3,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (2,3,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (3,3,1);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,3,1);

INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,1,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (2,1,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (3,1,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,2,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (2,2,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (3,2,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,3,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (2,3,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (3,3,2);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,3,2);

INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (1,1,7);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (2,1,8);
INSERT INTO DetalleCotizacion (IDProducto,IDProveedor,IDCotizacion) VALUES (3,1,9);
