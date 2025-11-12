# Sistema de Gestión de Incidencias Técnicas (IncidenciaAPP)

Este es un proyecto full-stack (React + ASP.NET) desarrollado para la gestión y seguimiento de incidencias técnicas. La aplicación permite a los usuarios registrar nuevas incidencias (ej: 'Hardware', 'Software', 'Red') y a un equipo técnico administrar, actualizar y resolver dichas incidencias.

## Funcionalidades Principales

Este proyecto implementa los siguientes Casos de Uso (CU) y Requerimientos Funcionales (RF):

* **Autenticación (CU03):** Sistema de login para usuarios con validación de credenciales (RF05).
* **Registro de Incidencias (CU01):** Formulario para registrar nuevas incidencias técnicas (RF01, RF02, RF08).
* **Gestión de Técnicos (CU08):** Panel para que el personal técnico pueda ver y actualizar el estado de las incidencias (RF10).
* **Generación de Reportes (CU10):** Vista para consultar y filtrar el historial de reportes de incidencias (RF12, RF13).

## Stack de Tecnologías

Este proyecto está dividido en dos partes principales:

* **Frontend (Cliente):**
    * [React.js](https://reactjs.org/) (con `create-react-app`)
    * [Tailwind CSS](https://tailwindcss.com/) (para los estilos)
    * [React Router](https://reactrouter.com/) (para la navegación entre páginas)
* **Backend (Servidor):**
    * [ASP.NET Core Web API](https://dotnet.microsoft.com/apps/aspnet/web-api) (.NET 7)
    * C#
* **Herramientas:**
    * Visual Studio Code
    * Git & GitHub

## Estructura del Proyecto

El repositorio está organizado en una estructura de monorepo, con carpetas separadas para el frontend y el backend.
IncidenciaAPP/
├── Backend/                       # Proyecto Backend (.NET Web API)
│   ├── Backend.csproj
│   ├── Program.cs
│   ├── Controllers/
│   │   └── IncidenciasController.cs
│   └── Models/
│       └── Incidencia.cs
│
└── Frontend/                      # Proyecto Frontend (React)
    ├── package.json
    ├── tailwind.config.js
    ├── public/
    └── src/
        ├── assets/
        ├── pages/
        │   ├── LoginForm.jsx
        │   ├── LoginPage.jsx
        │   ├── PanelTecnicoPage.jsx
        │   ├── RegistroIncidenciaPage.jsx
        │   └── ReportesPage.jsx
        ├── App.js
        └── index.js

## Instalación y Puesta en Marcha

Sigue estos pasos para ejecutar el proyecto en tu máquina local.

### Prerrequisitos

Asegúrate de tener instalados:
* [Node.js (LTS)](https://nodejs.org/) (v18+)
* [.NET SDK 7+](https://dotnet.microsoft.com/download)
* [Visual Studio Code](https://code.visualstudio.com/) (Opcional, pero recomendado)

### 1. Configuración del Backend (ASP.NET)

```bash
# 1. Ve a la carpeta del backend
cd IncidenciaAPP/Backend

# 2. Restaura las dependencias de .NET
dotnet restore

# 3. Ejecuta el servidor de API
dotnet run

### 2. Configuración del Frontend (React)

```bash
# 1. Abre OTRA terminal y ve a la carpeta del frontend
cd IncidenciaAPP/Frontend/frontend

# 2. Instala las dependencias de npm
npm install

# 3. Inicia el servidor de desarrollo de React
npm start
