import express from 'express';
import { 
    agregarTarea,
    obtenerTarea,
    actualizarTarea,
    eliminarTarea,
    cambiarEstado
} from "../controllers/tareaController.js";
import checkAuth from '../middleware/checkAuth.js';

const tareaRoute = express.Router()

tareaRoute.post('/', checkAuth, agregarTarea);
tareaRoute
    .route('/:id')
    .get(checkAuth, obtenerTarea)
    .put(checkAuth, actualizarTarea)
    .delete(checkAuth, eliminarTarea);
tareaRoute.post("/estado/:id", checkAuth, cambiarEstado)

export default tareaRoute;