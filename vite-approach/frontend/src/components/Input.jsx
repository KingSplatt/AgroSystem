import React from "react";

export const Input = (props) => {
  return (
    <div>
      {window.location.pathname === "/login" && props.type === "password" ? (
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium leading-6 text-white"
          >
            Contraseña
          </label>
          <div className="text-sm">
            <a
              href="#"
              className="font-semibold text-cgreen-600 hover:text-cgreen-400"
            >
              ¿Olvidaste tu contraseña?
            </a>
          </div>
        </div>
      ) : (
        <label
          htmlFor={props.name}
          className="block text-sm font-medium leading-6 text-white"
        >
          {props.body}
        </label>
      )}

      <div className="mt-2">
        <input
          id={props.name}
          name={props.name}
          type={props.type}
          autoComplete={props.type === "email" ? "email" : ""}
          required
          className="block w-full rounded-md border-0 py-1.5 px-2 text-white bg-cblue-800 shadow-sm ring-1 ring-inset ring-cblue-200 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
};
