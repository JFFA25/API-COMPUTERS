import { Router } from "express";
import computadorasController from "../controller/computadoras.controller.js";

const router = Router();

// Ruta para obtener todas las computadoras
router.get('/getAll', computadorasController.getAll);

// Ruta para mostrar una computadora
router.get('/getOne/:customId', computadorasController.getOne);

// Ruta para insertar una nueva computadora
router.post('/insert', computadorasController.insert);

// Ruta para actualizar una computadora según su customId
router.put('/updateOne/:customId', computadorasController.updateOne);

// Ruta para eliminar una computadora
router.get('/deleteOne/:customId', computadorasController.deleteOne);

export default router;
