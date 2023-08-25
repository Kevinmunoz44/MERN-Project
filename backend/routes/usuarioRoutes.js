import express from "express";

const router = express.Router();

import {registrar, autenticar } from '../controllers/usuarioController.js';

//Autenticacion, Registro y confirmacion de Usuario
router.post('/', registrar)//Crear usuario
router.post('/login', autenticar);

export default router;
