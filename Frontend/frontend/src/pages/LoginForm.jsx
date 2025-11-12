import React, { useState } from 'react';

export default function LoginForm() {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); 

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [recoveryEmail, setRecoveryEmail] = useState('');
  const [modalMessage, setModalMessage] = useState(null);

  
  const handleSubmit = (e) => {
    e.preventDefault(); 
    setError(null); 

    // validacion de campo
    if (!email || !password) {
      setError('El correo y la contraseña son obligatorios.');
      return; 
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError('Por favor, ingresa un formato de correo válido.');
      return;
    }
    const alphanumericRegex = /^[a-zA-Z0-9]+$/;
    if (!alphanumericRegex.test(password)) {
      setError('La contraseña no debe contener símbolos ni espacios.');
      return;
    }
    if (password.length < 8) {
      setError('La contraseña debe tener al menos 8 caracteres.');
      return;
    }
    const hasNumberRegex = /\d/; 
    const hasLetterRegex = /[a-zA-Z]/; 
    if (!hasNumberRegex.test(password) || !hasLetterRegex.test(password)) {
      setError('La contraseña debe incluir al menos una letra y un número.');
      return;
    }

    // Validad credenciales
    const mockEmail = 'usuario1@gmail.com';
    const mockPassword = 'usuario123';

    if (email === mockEmail && password === mockPassword) {
      console.log('Login exitoso:', { email });
      alert('¡Inicio de sesión exitoso! Bienvenido.');
      setEmail('');
      setPassword('');
    } else {
      console.log('Credenciales incorrectas');
      setError('Correo o contraseña incorrecto.');
    }
  };

  const handleRecoverySubmit = (e) => {
    e.preventDefault();
    setModalMessage(null); 

    if (!recoveryEmail) {
      setModalMessage({ 
        text: 'Por favor, ingresa un correo.', 
        type: 'error' 
      });
      return;
    }
    
    console.log('Solicitando recuperación para:', recoveryEmail);

    setModalMessage({
      text: '¡Enviado! Si el correo está registrado, recibirás un enlace de recuperación. Revisa tu bandeja de entrada.',
      type: 'success'
    });

    setRecoveryEmail(''); 
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setRecoveryEmail('');
    setModalMessage(null);
  };


  return (
    <>
      {/*Formulario Login*/}
      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-md bg-white shadow-md rounded-xl p-8"
        noValidate 
      >
        <h2 className="text-2xl font-bold text-center text-gray-700 mb-6">Iniciar Sesión</h2>
        
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 border border-red-300 rounded-md text-sm">
            {error}
          </div>
        )}

        {/*campo email*/}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
            Correo Electrónico
          </label>
          <input
            id="email"
            type="email" 
            placeholder="Ingresa tu correo"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/*campo contraseña*/}
        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">Contraseña</label>
          <input
            id="password"
            type="password"
            placeholder="Ingresa tu contraseña"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit" 
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
        >
          Ingresar
        </button>

        <div className="text-right mt-4">
          {/*Boton para abrir el modal*/}
          <button
            type="button" 
            className="text-sm text-blue-600 hover:underline"
            onClick={() => setIsModalOpen(true)} 
          >
            ¿Olvidaste tu contraseña?
          </button>
        </div>
      </form>

      {/*Recuperar contraseña*/}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60">
          <div className="bg-white p-8 rounded-lg shadow-xl w-full max-w-md relative">
            
            {/*Boton de cerrar*/}
            <button
              type="button"
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-700"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <h3 className="text-xl font-bold text-gray-700 mb-6">Recuperar Contraseña</h3>
            
            <form onSubmit={handleRecoverySubmit}>
              <p className="text-sm text-gray-600 mb-4">
                Ingresa tu correo y te enviaremos un enlace para resetear tu contraseña.
              </p>
              
              <div className="mb-4">
                <label htmlFor="recoveryEmail" className="block text-sm font-medium text-gray-600 mb-1">
                  Correo Electrónico
                </label>
                <input
                  id="recoveryEmail"
                  type="email"
                  placeholder="tu_correo@ejemplo.com"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={recoveryEmail}
                  onChange={(e) => setRecoveryEmail(e.target.value)}
                />
              </div>
              
              {/*Mensaje de confirmacion o error*/}
              {modalMessage && (
                <div className={`mb-4 p-3 rounded-md text-sm ${
                  modalMessage.type === 'error' 
                  ? 'bg-red-100 text-red-700 border border-red-300' 
                  : 'bg-green-100 text-green-700 border border-green-300'
                }`}>
                  {modalMessage.text}
                </div>
              )}

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md transition-colors"
              >
                Enviar Enlace de Recuperación
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}