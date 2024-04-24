# AgroSystem
Proyecto de ING. SOFTWARE

Para probar nuestro modelo necesitamos una instancia de SQL Server. Puede ser en On Premise, Azure o AWS. Usaremos un contenedor de Docker para las pruebas.

Abrir la terminal y ejecutar el siguiente comando

docker run -e "ACCEPT_EULA=Y" -e "MSSQL_SA_PASSWORD=Gestion8.0" -e "MSSQL_PID=Developer" -p 1433:1433 -d mcr.microsoft.com/mssql/server:latest

Estamos usando Docker para crear un servidor de SQL Server con la edición de Desarrollador desde una imagen de Microsoft. Usamos autenticación SQL, el usuario say Gestion8.0como contraseña.

Este servidor no es persistente así que la base de datos que se cree (y los datos en ella) se perderán al detener el contenedor.

En el archivo devcontainerya están especificadas las extensiones de VSCode necesarias (mssql y mermaid)
