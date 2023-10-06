import express from "express";
import fileUpload from "express-fileupload";
import config from "./config";
import empresasRoutes from "./routes/EMPRESAS.routes";
import usuariosRoutes from "./routes/USUARIOS.routes";
import ofertaRoutes from "./routes/OFERTA.routes";
import calificacionesRoutes from "./routes/CALIFICACIONES.routes";
import carrerasRoutes from "./routes/CARRERAS.routes";

const app = express();

// settings
app.set("port", config.port);
app.use(express.json());
app.use(fileUpload())

// ROUTES
app.use(empresasRoutes);
app.use(usuariosRoutes);
app.use(ofertaRoutes);
app.use(calificacionesRoutes);
app.use(carrerasRoutes);

export default app;
