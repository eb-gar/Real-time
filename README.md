# Chat en Tiempo Real con NestJS y WebSockets

Un sistema de chat en tiempo real implementado con NestJS en el backend y tecnologías web estándar (HTML, CSS, JavaScript) en el frontend, utilizando WebSockets para comunicación bidireccional.

## Características principales

- ✅ Comunicación en tiempo real con WebSockets
- ✅ Notificaciones de conexión/desconexión de usuarios
- ✅ Interfaz de usuario limpia y responsive
- ✅ Soporte para múltiples usuarios simultáneos
- ✅ Indicador de usuarios conectados
- ✅ Fácil integración y extensión

## Tecnologías utilizadas

### Backend
- **NestJS** - Framework Node.js para aplicaciones del lado del servidor
- **Socket.io** - Biblioteca para comunicación WebSocket
- **TypeScript** - Para tipado estático

### Frontend
- **HTML5** - Estructura de la aplicación
- **CSS3** - Estilos y diseño responsive
- **JavaScript ES6** - Lógica del cliente
- **Socket.io Client** - Biblioteca cliente para WebSockets

## Requisitos del sistema

- Node.js (v14 o superior)
- npm (v6 o superior) o yarn
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/tu-usuario/nest-chat.git
cd nest-chat
```

2. Instalar dependencias:
```bash
npm install
```

3. Configurar variables de entorno (opcional):
Crear un archivo `.env` en la raíz del proyecto con las configuraciones necesarias.

## Ejecución

Para iniciar el servidor en modo desarrollo:
```bash
npm run start:dev
```

Para producción:
```bash
npm run build
npm run start:prod
```

El frontend estará disponible en:
```
http://localhost:3000
```

## Estructura del proyecto

```
nest-chat/
├── src/                  # Código fuente del backend
│   ├── chat/             # Lógica del WebSocket Gateway
│   └── app.module.ts     # Módulo principal
├── public/               # Archivos estáticos del frontend
│   ├── index.html        # Página principal
│   ├── styles.css        # Estilos CSS
│   └── app.js            # Lógica del cliente
├── .env                  # Variables de entorno
├── package.json          # Dependencias y scripts
└── README.md             # Este archivo
```

## Configuración

Puedes modificar los siguientes aspectos:

- Puerto del servidor (en `src/main.ts`)
- Orígenes permitidos para CORS (en `src/chat/chat.gateway.ts`)
- Estilos de la interfaz (en `public/styles.css`)
- Comportamiento del chat (en `public/app.js`)



