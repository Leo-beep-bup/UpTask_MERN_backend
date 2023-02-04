import express from "express"
import { 
    registrar, 
    autenticar, confirmar, 
    olvidePassword, 
    comprobarToken, 
    nuevopassword, 
    perfil 
} from '../controllers/usuarioController.js'
import checkAuth from "../middleware/checkAuth.js";

const usuarioRoutes = express.Router();

// Autenticación, Registro y Confirmación de Usuarios
usuarioRoutes.post('/', registrar ); // Crea un nuevo usuaruio 
usuarioRoutes.post('/login', autenticar);
usuarioRoutes.get('/confirmar/:token', confirmar);
usuarioRoutes.post('/olvide-password', olvidePassword);
usuarioRoutes
    .route('/olvide-password/:token')
    .get(comprobarToken)
    .post(nuevopassword);
usuarioRoutes.get('/perfil', checkAuth, perfil)

export default usuarioRoutes;
