require('dotenv').config();
const app = require('./app');

// Obtener puerto de variables de entorno o usar puerto por defecto
const PORT = process.env.PORT || 3000;

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`✓ Servidor ejecutándose en puerto ${PORT}`);
  console.log(`✓ Ambiente: ${process.env.NODE_ENV || 'development'}`);
  console.log(`✓ URL: http://localhost:${PORT}`);
});
