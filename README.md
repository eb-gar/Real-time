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
- **HTML** - Estructura de la aplicación
- **CSS** - Estilos y diseño responsive
- **JavaScript** - Lógica del cliente
- **Socket.io Client** - Biblioteca cliente para WebSockets

## Requisitos del sistema

- Node.js 
- npm 
- Navegador web moderno (Chrome, Firefox, Edge, Safari)

## Instalación

1. Clonar el repositorio:
```bash
git clone https://github.com/eb-gar/Real-time.git
cd nest-chat
```

2. Instalar dependencias:
```bash
npm install
```

## Ejecución

Para iniciar el servidor en modo desarrollo:
```bash
npm run start:dev
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
└── package.json          # Dependencias y scripts
```