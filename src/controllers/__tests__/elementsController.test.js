/**
 * Tests del controlador de elementos
 * Verifica la lógica de negocio del endpoint GET /api/v1/elements
 */

const { getAllElements } = require('../elementsController');

describe('ElementsController - getAllElements', () => {
  let req, res;

  beforeEach(() => {
    // Mock de objetos req y res
    req = {};
    res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn().mockReturnThis()
    };
  });

  test('debe devolver status 200 y JSON con estructura correcta', () => {
    getAllElements(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalled();
  });

  test('debe devolver un objeto con propiedades success, data y count', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    expect(responseData).toHaveProperty('success');
    expect(responseData).toHaveProperty('data');
    expect(responseData).toHaveProperty('count');
  });

  test('debe devolver success = true', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    expect(responseData.success).toBe(true);
  });

  test('debe devolver un array de elementos en data', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    expect(Array.isArray(responseData.data)).toBe(true);
  });

  test('debe devolver exactamente 9 elementos', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    expect(responseData.count).toBe(9);
    expect(responseData.data).toHaveLength(9);
  });

  test('cada elemento debe tener las propiedades requeridas', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];
    const requiredProps = ['id', 'name', 'job', 'status'];

    responseData.data.forEach((element) => {
      requiredProps.forEach((prop) => {
        expect(element).toHaveProperty(prop);
      });
    });
  });

  test('el count debe coincidir con la cantidad de elementos', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    expect(responseData.count).toBe(responseData.data.length);
  });

  test('cada elemento debe tener un id numérico', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    responseData.data.forEach((element) => {
      expect(typeof element.id).toBe('number');
    });
  });

  test('cada elemento debe tener un nombre string no vacío', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    responseData.data.forEach((element) => {
      expect(typeof element.name).toBe('string');
      expect(element.name.length).toBeGreaterThan(0);
    });
  });

  test('cada elemento debe tener un job (trabajo) string no vacío', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    responseData.data.forEach((element) => {
      expect(typeof element.job).toBe('string');
      expect(element.job.length).toBeGreaterThan(0);
    });
  });

  test('cada elemento debe tener un status string no vacío', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];

    responseData.data.forEach((element) => {
      expect(typeof element.status).toBe('string');
      expect(element.status.length).toBeGreaterThan(0);
    });
  });

  test('cada elemento debe tener un id único', () => {
    getAllElements(req, res);

    const responseData = res.json.mock.calls[0][0];
    const ids = responseData.data.map(el => el.id);
    const uniqueIds = new Set(ids);

    expect(uniqueIds.size).toBe(ids.length);
  });
});
