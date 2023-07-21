const express = require("express");
const router = express.Router();
const upload = require("../config/cloudinary.config");

// Importar los modelos necesarios
const User = require("../models/User.model");
const Element = require("../models/Element.model");
const fileUploader= require('../config/cloudinary.config')

// POST /api/users/:userId/favorites - Agregar elemento a favoritos del usuario
router.post("/users/:userId/favorites", (req, res, next) => {
    const { userId } = req.params;
    const { elementId } = req.body;
  
    User.findByIdAndUpdate(
      userId,
      { $addToSet: { favorites: elementId } }, 
      { new: true }
    )
      .then((user) => {
        res.json(user);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Error adding element to favorites" });
      });
  });

// Ruta para obtener los favoritos de un usuario específico
router.get("/users/:userId/favorites", (req, res, next) => {
    const { userId } = req.params;
  
    User.findById(userId)
      .populate("favorites")
      .then((user) => {
        if (!user) {
          return res.status(404).json({ error: "User not found" });
        }
        res.json(user.favorites);
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({ error: "Error retrieving user favorites" });
      });
  });

  module.exports = router;