# AgroSystem
Proyecto de ING. SOFTWARE

Implementaremos la herramienta Git para el uso de actualizaciones mediante los cambios que le hagamos en nuestras computadoras

Para ello deberan descargar la applicacion de escritorio de la pagina oficial https://git-scm.com/download/win 

una vez instalada debera reiniciar VS Code y en la terminal poner lo siguientes comandos:

```bash
  git config --global user.name ""
  git config --global user.email "" 
```

con eso en la parte de extensiones tendran una parte llamada "Source control" donde podran hacer commits (actualizaciones del repositorio) - ES OBLIGATORIO ESCRIBIR UN MENSAJE PARA QUE SE ACTUALICE
#Para descargar express y poder ver el servidor
lo primero que deben hacer es estar en la carpeta de Backend y abrir una terminal del VS CODE, ahi pondran el comando npm init -y

# Para descargar react
Para poder descargar React primero hay que descargar Node.js
Una vez instalado ir a la terminal y poner los siguientes comandos:

        npm install -g npm@latest
        npm --version
        npm cache clean --force
        npm install -g create-react-app


# Para instalar express y ver el servidor

Lo primero es ir a la carpeta de "BACKED" y abrir una nueva terminal, estando ahi ejecutaran el siguiente comando:

## Comando


```bash
  npm install
```

este les descargara todas las dependencias y archivos que ocupan
## Crear un archivo .env en la carpeta raiz de la carpeta Backend
Si planean testear tanto el backend como el frontend, pueden colocar
un puerto distinto, 8080 por ejemplo y para realizar la conexion con
la base de datos, pueden colocar su contraseña en este archivo.

El default es: 3000
```bash
  PUERTO = 8080
  DB_PASSWORD = passwordHere
```
link donde hay una libreria de iconos
https://react-icons.github.io/react-icons/icons/fa/
#Comando para iconos y para enlazar paginas
```bash
  npm install react-router-dom@6
  npm install react-icons —save
```
