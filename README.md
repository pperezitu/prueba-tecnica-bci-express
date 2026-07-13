# Prueba Técnica BCI - Express Server

Servidor Node.js/Express con configuración de variables de entorno, manejo de errores y endpoints documentados.

## 📋 Requisitos

- Node.js (versión 14 o superior)
- npm o yarn

## 🚀 Instalación

1. **Clonar el repositorio o descargar el proyecto**

```bash
cd prueba-tecnica-bci-express
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Configurar variables de entorno**

```bash
# Crear archivo .env basado en .env.example
cp .env.example .env
```

4. **Editar .env con tus valores (opcional)**

```env
PORT=3000
NODE_ENV=development
```

## ▶️ Ejecución

### Modo desarrollo
```bash
npm run dev
```

### Modo producción
```bash
npm start
```

El servidor estará disponible en: `http://localhost:3000`

## 📁 Estructura de carpetas

```
prueba-tecnica-bci-express/
├── src/
│   ├── controllers/
│   │   └── elementsController.js    # Lógica de negocio para elementos
│   ├── routes/
│   │   └── elements.js              # Definición de rutas de elementos
│   ├── app.js                       # Configuración de la aplicación
│   └── index.js                     # Punto de entrada
├── .env.example                     # Ejemplo de variables de entorno
├── .gitignore                       # Archivos a ignorar en git
├── package.json                     # Dependencias del proyecto
└── README.md                        # Este archivo
```

## 📚 Documentación de Endpoints

### GET /api/v1/elements

Obtiene todos los elementos disponibles.

**Método:** `GET`  
**Ruta:** `/api/v1/elements`  
**Status esperado:** `200 OK`

**Respuesta esperada:**
```json
{
  "success": true,
  "data": [
    {
      "id": 1,
      "name": "Elemento Uno",
      "description": "Este es el primer elemento simulado",
      "createdAt": "2026-01-15T10:30:00.000Z"
    }
  ],
  "count": 5
}
```

**Campos de respuesta:**
- `success` (boolean): Indica si la solicitud fue exitosa
- `data` (array): Array de elementos
  - `id` (number): Identificador único del elemento
  - `name` (string): Nombre del elemento
  - `description` (string): Descripción del elemento
  - `createdAt` (string): Fecha de creación en formato ISO 8601
- `count` (number): Cantidad total de elementos retornados

## 🛠️ Tecnologías utilizadas

- **Express** - Framework web
- **dotenv** - Gestión de variables de entorno
- **CORS** - Habilitación de CORS para solicitudes cross-origin

## 📝 Notas

- El servidor incluye manejo global de errores
- Las rutas 404 devuelven respuestas JSON
- Los datos son simulados y se cargan en memoria
- La estructura permite fácil expansión con controladores y rutas adicionales

## 📧 Soporte

Para preguntas o problemas, contacta al equipo de desarrollo.
