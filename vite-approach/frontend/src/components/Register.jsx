import React from "react";
import { Input } from "./Input";
import NavBar from "./NavBar";

const Register = () => {
  return (
    <>
      <NavBar />

      <div className="flex flex-col h-screen justify-center bg-cblue-700">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            className="mx-auto h-30 w-auto"
            src="src/assets/tree.png"
            alt="Agrosystem"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white">
            Unete a AgroSystem
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="login" method="POST">
            <Input body={"Nombre completo"} type={"text"} name={"name"} />
            <Input body={"Nombre de usuario"} type={"text"} name={"username"} />
            <Input body={"Correo electronico"} type={"email"} name={"email"} />
            <Input body={"Contraseña"} type={"password"} name={"password"} />

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-clightgreen-700 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-clightgreen-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-clightgreen-600"
              >
                Registrarse
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-500">
            ¿Ya tienes una cuenta?
            <a
              href="login"
              className="font-semibold leading-6 text-cgreen-600 hover:text-cgreen-400 ml-1"
            >
              Inicia sesion
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Register;
