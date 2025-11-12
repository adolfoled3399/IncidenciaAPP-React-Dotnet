import React from 'react';
import LoginForm from './LoginForm';
import loginImage from '../assets/image-incidencia-login.png'; // Asegúrate de que la imagen esté en esta ruta

export default function LoginPage() {
  return (
    //<div className="min-h-screen flex flex-col lg:flex-row">
    <div className="min-h-screen flex flex-col lg:flex-row bg-gray-100">
  
      {/* Sección izquierda – Login */}
      <div className="w-full lg:w-1/2 flex flex-col items-center justify-center bg-white px-8 py-12 shadow-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">
          Sistema de Incidencias Técnicas
        </h1>
        <LoginForm />
        <p className="text-sm text-gray-600 mt-6 text-center">
        Facultad de Ingeniería
        </p>
      </div>

      {/* Sección derecha – Imagen (solo visible en pantallas grandes) */}
      <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-50 items-center justify-center rounded-l-xl shadow-inner">
        <img
          src={loginImage}
          alt="Imagen alusiva al sistema"
          className="max-w-lg w-full h-auto object-contain p-6"
        />
      </div>
    </div>
  );
}