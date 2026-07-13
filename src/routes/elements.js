/**
 * Rutas de elementos
 * Define los endpoints relacionados con elementos
 */

const express = require('express');
const router = express.Router();
const { getAllElements } = require('../controllers/elementsController');

/**
 * GET /api/v1/elements
 * 
 * Descripción: Obtiene todos los elementos disponibles
 * 
 * Respuesta esperada:
 * {
 *   "success": true,
 *   "data": [
 *     {
 *       "id": 1,
 *       "name": "string",
 *       "description": "string",
 *       "createdAt": "ISO 8601 date"
 *     }
 *   ],
 *   "count": number
 * }
 * 
 * Status: 200 OK
 */
router.get('/elements', getAllElements);

module.exports = router;
