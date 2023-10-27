import express from "express";
import fileUpload from "express-fileupload";
import config from "./config";
import empresasRoutes from "./routes/EMPRESAS.routes";
import usuariosRoutes from "./routes/USUARIOS.routes";
import ofertaRoutes from "./routes/OFERTA.routes";
import calificacionesRoutes from "./routes/CALIFICACIONES.routes";
import carrerasRoutes from "./routes/CARRERAS.routes";
import facultadesRoutes from "./routes/FACULTADES.routes";
import habilidadesRoutes from "./routes/HABILIDADES.routes";
import rolesRoutes from "./routes/ROLES.routes";
import rel_estudiantes_habilidadesRoutes from "./routes/REL_ESTUDIANTES_HABILIDADES.routes";
import solicitudesRoutes from "./routes/SOLICITUDES_OFERTAS_LABORALES.routes";  
import authRoutes from "./routes/AUTH.routes";
import estudiantesRoutes from "./routes/ESTUDIANTES.routes";
import imagesRoutes from "./routes/IMAGES.routes";
import cvRoutes from "./routes/CV.routes";
import experienciaRoutes from "./routes/EXPERIENCIA.routes";


// settings
const app = express();
const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:3000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
}));

app.set("port", config.port);
app.use(express.json());
app.use(fileUpload())

// ROUTES
app.use(empresasRoutes);
app.use(usuariosRoutes);
app.use(ofertaRoutes);
app.use(calificacionesRoutes);
app.use(carrerasRoutes);
app.use(facultadesRoutes);
app.use(habilidadesRoutes);
app.use(rolesRoutes);
app.use(rel_estudiantes_habilidadesRoutes);
app.use(solicitudesRoutes);
app.use(authRoutes);
app.use(estudiantesRoutes);
app.use(imagesRoutes);
app.use(cvRoutes);
app.use(experienciaRoutes);

export default app;
