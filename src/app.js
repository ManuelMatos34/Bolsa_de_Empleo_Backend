import express from "express";
import fileUpload from "express-fileupload";
import config from "./config";
import empresasRoutes from "./routes/EMPRESAS.routes";
import usuariosRoutes from "./routes/USUARIOS.routes";
import ofertaRoutes from "./routes/OFERTA.routes";

const app = express();

// settings
app.set("port", config.port);
app.use(express.json());
app.use(fileUpload())

// ROUTES
app.use(empresasRoutes);
app.use(usuariosRoutes);
app.use(ofertaRoutes);

export default app;
