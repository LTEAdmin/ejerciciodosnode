import express from "express";
import validar from "./middleware/middleware.js";
const rutas = express.Router

// creando ruta de tiempo para que pueda continuar la carga si esta autorizado
rutas.get("/tiempo", validar, (req, res) => {
  res.send("usuario autorizado a entrar a ruta de tiempo");
});

rutas.get("/", (req, res) => {
  res.send("Hello World!");
});

rutas.get("*", (req, res) => {
  res.send("Pagina no encontrada, revise el url");
});

export default rutas