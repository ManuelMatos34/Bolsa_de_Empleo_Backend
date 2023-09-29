import express from "express";
import fileUpload from "express-fileupload";
import config from "./config";
import empresasRoutes from "./routes/EMPRESAS.routes";
import usuariosRoutes from "./routes/USUARIOS.routes";

const app = express();

// settings
app.set("port", config.port);
app.use(express.json());
app.use(fileUpload())

// ROUTES
app.use(empresasRoutes);
app.use(usuariosRoutes);

export default app;
