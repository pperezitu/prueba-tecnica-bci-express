const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
const elementRoutes = require('./routes/elements');

// Usar rutas
app.use('/api/v1', elementRoutes);

// Página de inicio
app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="es">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Servidor inicializado</title>
        <style>
          * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
          }

          body {
            align-items: center;
            background: linear-gradient(135deg, #111827, #2563eb);
            color: #111827;
            display: flex;
            font-family: Arial, Helvetica, sans-serif;
            justify-content: center;
            min-height: 100vh;
            padding: 24px;
          }

          main {
            background: #ffffff;
            border-radius: 18px;
            box-shadow: 0 20px 50px rgba(0, 0, 0, 0.25);
            max-width: 620px;
            padding: 48px;
            text-align: center;
            width: 100%;
          }

          .status {
            align-items: center;
            color: #16a34a;
            display: inline-flex;
            font-weight: 700;
            gap: 10px;
            margin-bottom: 18px;
          }

          .status::before {
            animation: pulse 1.5s infinite;
            background: #16a34a;
            border-radius: 999px;
            content: "";
            height: 12px;
            width: 12px;
          }

          h1 {
            font-size: 32px;
            margin-bottom: 16px;
          }

          p {
            color: #4b5563;
            font-size: 18px;
            line-height: 1.6;
            margin-bottom: 28px;
          }

          a {
            background: #2563eb;
            border-radius: 10px;
            color: #ffffff;
            display: inline-block;
            font-weight: 700;
            padding: 14px 22px;
            text-decoration: none;
          }

          code {
            background: #f3f4f6;
            border-radius: 6px;
            color: #1f2937;
            display: inline-block;
            margin-top: 12px;
            padding: 8px 10px;
          }

          @keyframes pulse {
            0% {
              opacity: 1;
              transform: scale(1);
            }
            50% {
              opacity: 0.5;
              transform: scale(1.2);
            }
            100% {
              opacity: 1;
              transform: scale(1);
            }
          }
        </style>
      </head>
      <body>
        <main>
          <div class="status">Servidor en línea</div>
          <h1>El servidor está inicializado</h1>
          <p>
            La aplicación Express se levantó correctamente en
            <strong>localhost:3000</strong>.
          </p>
          <a href="/api/v1/elements">Ver endpoint de elementos</a>
          <br />
          <code>GET /api/v1/elements</code>
        </main>
      </body>
    </html>
  `);
});

// Middleware de manejo de errores global
app.use((err, req, res, next) => {
  console.error('Error:', err.message);
  
  const statusCode = err.statusCode || 500;
  const message = err.message || 'Error interno del servidor';
  
  res.status(statusCode).json({
    success: false,
    message,
    ...(process.env.NODE_ENV === 'development' && { stack: err.stack })
  });
});

// Ruta 404
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Ruta no encontrada'
  });
});

module.exports = app;
