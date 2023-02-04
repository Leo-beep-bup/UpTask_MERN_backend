import express from 'express'
import {
    obtenerProyectos, 
    nuevoProyecto, 
    obtenerProyecto, 
    editarProyecto, 
    eliminarProyecto,
    buscarColaborador, 
    agregarColaborador, 
    eliminarColaborador
} from '../controllers/proyectoController.js'
import checkAuth from '../middleware/checkAuth.js'

const proyectoRoutes = express.Router();

proyectoRoutes
    .route("/")
    .get(checkAuth, obtenerProyectos)
    .post(checkAuth, nuevoProyecto);

proyectoRoutes
    .route("/:id")
    .get(checkAuth, obtenerProyecto)
    .put(checkAuth, editarProyecto)
    .delete(checkAuth, eliminarProyecto);

proyectoRoutes.post('/colaboradores', checkAuth, buscarColaborador)
proyectoRoutes.post('/colaboradores/:id', checkAuth, agregarColaborador);
proyectoRoutes.post('/eliminar-colaborador/:id', checkAuth, eliminarColaborador);
export default proyectoRoutes;