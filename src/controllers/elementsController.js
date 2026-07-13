/**
 * Controlador de elementos
 * Maneja la lógica de negocio para los endpoints relacionados con elementos
 */

// Datos simulados - En una aplicación real, estos vendrían de una base de datos
const mockElements = [
  {
        "id": 1,
        "name": "Monkey D Luffy",
        "size": "174cm",
        "age": "19 ans",
        "bounty": "3.000.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "fruit": {
            "id": 196,
            "name": "Hito Hito no Mi, Nika model",
            "description": "Hito Hito no Mi, Nika model, is a Mythical Zoan Demon Fruit that enables its user to transform into Nika, the \"God of the Sun\".",
            "type": "Zoan Mythique",
            "roman_name": "Hito Hito no Mi, Moderu: Nika"
        },
        "job": "Captain",
        "status": "vivant"
    },
    {
        "id": 2,
        "name": "Roronoa Zoro",
        "size": "181cm",
        "age": "21 ans",
        "bounty": "1.101.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "job": "Right-hand man",
        "status": "living"
    },
    {
        "id": 3,
        "name": "Nami",
        "size": "170cm",
        "age": "20 ans",
        "bounty": "366.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "job": "Navigator",
        "status": "living"
    },
    {
        "id": 4,
        "name": "Usopp",
        "size": "176cm",
        "age": "19 ans",
        "bounty": "500.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "job": "Sniper",
        "status": "living"
    },
    {
        "id": 5,
        "name": "Sanji",
        "size": "180cm",
        "age": "21 ans",
        "bounty": "1.032.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "job": "Cook",
        "status": "living"
    },
    {
        "id": 6,
        "name": "Tony-Tony Chopper",
        "size": "90cm",
        "age": "17 ans",
        "bounty": "1000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "fruit": {
            "id": 92,
            "name": "Fruit of the Human",
            "description": "whoever eats it becomes half-human. As the user was originally a reindeer, he acquired an intelligence that enabled him to acquire a vast amount of knowledge. Before the ellipse, Chopper had to take a Rumble-Ball to get more transformations for 3 minutes1 (if after 3 minutes he took another Rumble-Ball, he no longer controlled his transformations, and if he took a 3rd Rumble-Ball, he became a gigantic but unconscious monster, destroying enemies and allies alike). After the ellipse, he masters all transformations perfectly, and when he takes a Rumble-Ball he becomes the gigantic monster, but in control of himself.",
            "type": "Zoan",
            "roman_name": "Hito Hito no Mi",
            "filename": "https://images.api-onepiece.com/fruits/28c479a3d76524452745f40bde7a0c37.png"
        },
        "job": "Doctor",
        "status": "living"
    },
    {
        "id": 7,
        "name": "Nico Robin",
        "size": "188cm",
        "age": "30 ans",
        "bounty": "930.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "fruit": {
            "id": 6,
            "name": "Fruit Des Éclosions",
            "description": "Allows the user to grow body parts (or even clones) anywhere, even on another person. He can assemble several copies of the same limb to create, for example, giant hands, or create clones of himself to deceive opponents.",
            "type": "Paramecia",
            "roman_name": "Hana Hana no Mi",
            "filename": "https://images.api-onepiece.com/fruits/5f82c2c5df83335a916f98dc3b09eade.png"
        },
        "job": "Archaeologist",
        "status": "living"
    },
    {
        "id": 8,
        "name": "Franky",
        "size": "240cm",
        "age": "36 ans",
        "bounty": "394.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "job": "Carpenter",
        "status": "living"
    },
    {
        "id": 9,
        "name": "Brook",
        "size": "277cm",
        "age": "90 ans",
        "bounty": "383.000.000",
        "crew": {
            "id": 1,
            "name": "The Chapeau de Paille crew",
            "description": null,
            "status": "assets",
            "number": "10",
            "roman_name": "Mugiwara no Ichimi",
            "total_prime": "3.161.000.100",
            "is_yonko": true
        },
        "fruit": {
            "id": 21,
            "name": "Fruit of the Resurrection",
            "description": "Allows the owner to come back to life after death (this power only works once). Its possessor can take his soul out of his body, take it through walls and return it to his body as he wishes. Similarly, if his head is cut off, his fruit enables him to bring it back to his shoulders by sheer force of will (the soul is still connected to his body). If his power is combined with a sword, he can freeze any enemy he touches, thanks to the icy cold of the depths that his soul brings to his sword.",
            "type": "Paramecia",
            "roman_name": "Yomi Yomi no Mi",
            "filename": "https://images.api-onepiece.com/fruits/56fc9cdf59bcd8a6e53b3e7c31e11005.png"
        },
        "job": "Musician",
        "status": "living"
    }
];

/**
 * Obtener todos los elementos
 * GET /api/v1/elements
 * 
 * @param {Object} req - Objeto de solicitud
 * @param {Object} res - Objeto de respuesta
 * @returns {Object} Array de elementos con status 200
 */
const getAllElements = (req, res) => {
  try {
    res.status(200).json({
      success: true,
      data: mockElements,
      count: mockElements.length
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: 'Error al obtener los elementos'
    });
  }
};

module.exports = {
  getAllElements
};
