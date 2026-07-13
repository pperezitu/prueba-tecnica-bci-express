/**
 * Tests de integración de la ruta de elementos
 * Verifica que el endpoint HTTP funciona correctamente
 */

const request = require('supertest');
const app = require('../../app');

describe('GET /api/v1/elements - Integration Tests', () => {
  test('debe responder con status 200', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    expect(response.status).toBe(200);
  });

  test('debe devolver Content-Type: application/json', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    expect(response.type).toBe('application/json');
  });

  test('debe devolver un objeto con estructura { success, data, count }', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    expect(response.body).toHaveProperty('success');
    expect(response.body).toHaveProperty('data');
    expect(response.body).toHaveProperty('count');
  });

  test('success debe ser true', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    expect(response.body.success).toBe(true);
  });

  test('data debe ser un array', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    expect(Array.isArray(response.body.data)).toBe(true);
  });

  test('debe devolver 9 elementos', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    expect(response.body.count).toBe(9);
    expect(response.body.data).toHaveLength(9);
  });

  test('cada elemento debe tener id, name, job y status', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    response.body.data.forEach((element) => {
      expect(element).toHaveProperty('id');
      expect(element).toHaveProperty('name');
      expect(element).toHaveProperty('job');
      expect(element).toHaveProperty('status');
    });
  });

  test('la ruta raíz (/) debe devolver HTML', async () => {
    const response = await request(app)
      .get('/');

    expect(response.status).toBe(200);
    expect(response.type).toMatch(/html/);
    expect(response.text).toContain('El servidor está inicializado');
  });

  test('una ruta inexistente debe devolver 404', async () => {
    const response = await request(app)
      .get('/ruta-inexistente');

    expect(response.status).toBe(404);
    expect(response.body).toHaveProperty('success', false);
    expect(response.body).toHaveProperty('message');
  });

  test('CORS debe estar habilitado', async () => {
    const response = await request(app)
      .get('/api/v1/elements');

    expect(response.headers['access-control-allow-origin']).toBeDefined();
  });
});
