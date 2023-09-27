import express from "express";
import config from "./config";
import empresasRoutes from "./routes/EMPRESAS.routes";

const app = express();

// settings
app.set("port", config.port);

// ROUTES
app.use(empresasRoutes);

export default app;
