# Documentación de Testing

## Descripción General

Este proyecto incluye un conjunto completo de tests utilizando **Jest** como framework de testing y **Supertest** para tests de integración HTTP.

Los tests cubren:
- Tests unitarios del controlador (`elementsController.test.js`)
- Tests de integración de rutas (`elements.integration.test.js`)
- Validación de estructura y tipos de datos
- Pruebas de endpoints HTTP
- Validación de códigos de estado

## Instalación de Dependencias

Para instalar las dependencias de testing:

```bash
npm install --save-dev jest supertest
```

O si ya están en `package.json`:

```bash
npm install
```

## Dependencias de Testing

- **Jest** (^29.7.0): Framework de testing con mocks y assertions
- **Supertest** (^6.3.3): Librería para probar rutas HTTP en Express

## Scripts de Testing

Los siguientes scripts están disponibles en `package.json`:

### `npm test`
Ejecuta todos los tests una sola vez:
```bash
npm test
```

### `npm run test:watch`
Ejecuta los tests en modo watch (se re-ejecutan al modificar archivos):
```bash
npm run test:watch
```

### `npm run test:coverage`
Ejecuta los tests y genera un reporte de cobertura:
```bash
npm run test:coverage
```

## Estructura de Tests

```
src/
├── controllers/
│   └── __tests__/
│       └── elementsController.test.js      # Tests unitarios del controlador
├── routes/
│   └── __tests__/
│       └── elements.integration.test.js    # Tests de integración
└── app.js
```

## Tests Unitarios: elementsController.test.js

Ubicación: `src/controllers/__tests__/elementsController.test.js`

### Descripción
Tests que verifican la lógica de negocio del controlador `getAllElements`.

### Test Cases (12 tests)

1. **Estructura de respuesta**: Verifica que se devuelva status 200 con JSON válido
2. **Propiedades requeridas**: Valida que la respuesta contenga `success`, `data` y `count`
3. **Valor de success**: Comprueba que `success` sea `true`
4. **Tipo de data**: Verifica que `data` sea un array
5. **Cantidad de elementos**: Valida que haya exactamente 9 elementos
6. **Propiedades de elementos**: Comprueba que cada elemento tenga `id`, `name`, `job`, `status`
7. **Consistencia de count**: Verifica que `count` coincida con la cantidad real de elementos
8. **Tipo de id**: Valida que cada `id` sea número
9. **Tipo y contenido de name**: Verifica que `name` sea string no vacío
10. **Tipo y contenido de job**: Verifica que `job` (trabajo) sea string no vacío
11. **Tipo y contenido de status**: Verifica que `status` sea string no vacío
12. **IDs únicos**: Comprueba que todos los ids sean únicos en la colección

### Ejemplo de Ejecución
```bash
npm test -- elementsController.test.js
```

## Tests de Integración: elements.integration.test.js

Ubicación: `src/routes/__tests__/elements.integration.test.js`

### Descripción
Tests que verifican el funcionamiento completo del endpoint HTTP incluyendo middleware y rutas.

### Test Cases (10 tests)

1. **Status HTTP**: Valida que la respuesta sea 200 OK
2. **Content-Type**: Verifica que sea `application/json`
3. **Estructura de respuesta**: Comprueba que contenga `success`, `data` y `count`
4. **Valor success**: Verifica que sea `true`
5. **Tipo de data**: Valida que sea array
6. **Cantidad de elementos**: Comprueba que sean exactamente 9
7. **Propiedades de elementos**: Verifica que tengan `id`, `name`, `job`, `status`
8. **Ruta raíz (/)**: Valida que devuelva HTML con mensaje de inicialización
9. **Ruta 404**: Verifica que rutas inexistentes devuelvan 404
10. **CORS habilitado**: Comprueba que los headers CORS estén presentes

### Ejemplo de Ejecución
```bash
npm test -- elements.integration.test.js
```

## Configuración de Jest

Archivo: `jest.config.js`

```javascript
module.exports = {
  testEnvironment: 'node',                    // Ambiente Node.js
  coveragePathIgnorePatterns: ['/node_modules/'],
  testMatch: ['**/__tests__/**/*.test.js', '**/*.test.js'],  // Patrón de archivos
  collectCoverageFrom: [
    'src/**/*.js',
    '!src/index.js'                           // Excluir punto de entrada
  ]
};
```

## Ejemplos de Uso

### Ejecutar todos los tests
```bash
npm test
```

### Ejecutar tests con salida detallada
```bash
npm test -- --verbose
```

### Ejecutar un archivo de test específico
```bash
npm test elementsController
```

### Ejecutar tests en modo watch
```bash
npm run test:watch
```

### Ver cobertura de tests
```bash
npm run test:coverage
```

Después de ejecutar este comando, se genera una carpeta `coverage/` con un reporte HTML que puedes abrir en el navegador.

## Mocking en Tests

### Mocking de objetos Request y Response

En los tests unitarios se mockean los objetos `req` y `res`:

```javascript
beforeEach(() => {
  res = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn().mockReturnThis()
  };
});
```

Esto permite:
- Capturar las llamadas a métodos
- Verificar los parámetros pasados
- Controlar el comportamiento

### Verificar llamadas a métodos

```javascript
expect(res.status).toHaveBeenCalledWith(200);
expect(res.json).toHaveBeenCalled();
```

## Assertions Comunes

### Verificar status HTTP
```javascript
expect(response.status).toBe(200);
```

### Verificar estructura
```javascript
expect(response.body).toHaveProperty('success');
expect(response.body).toHaveProperty('data');
```

### Verificar tipos
```javascript
expect(Array.isArray(response.body.data)).toBe(true);
expect(typeof element.id).toBe('number');
```

### Verificar longitud
```javascript
expect(response.body.data).toHaveLength(5);
```

### Verificar contenido
```javascript
expect(response.text).toContain('El servidor está inicializado');
```

## Cobertura de Tests

El proyecto tiene cobertura en:
- **Controladores**: 100% de las funciones
- **Rutas**: 100% de los endpoints
- **Validación de datos**: Estructura y tipos

Para ver la cobertura exacta:
```bash
npm run test:coverage
```

## Mejores Prácticas Implementadas

1. ✅ Tests organizados en carpetas `__tests__`
2. ✅ Nombres descriptivos en los tests
3. ✅ Setup y teardown con `beforeEach`
4. ✅ Uso de mocks para aislar componentes
5. ✅ Tests de integración con supertest
6. ✅ Validación de tipos y estructuras
7. ✅ Cobertura de casos de éxito y error
8. ✅ Documentación clara de cada test

## Troubleshooting

### Tests no ejecutados
- Verifica que los archivos terminen en `.test.js`
- Asegúrate que estén en la carpeta `__tests__` o al lado del código a testear
- Ejecuta `npm test -- --listTests` para ver los tests detectados

### Error: "Cannot find module"
- Ejecuta `npm install` para instalar todas las dependencias
- Verifica que Jest esté instalado: `npm list jest`

### Tests lentos
- Utiliza `npm run test:watch` para desarrollo iterativo
- Ejecuta tests específicos: `npm test -- elementsController`

## Extensiones Futuras

Posibles mejoras:
- Agregar tests para validación de entrada
- Tests de performance
- Tests de manejo de errores
- Pruebas con base de datos real
- Tests de endpoints adicionales

---

**Última actualización**: 2026-07-13
