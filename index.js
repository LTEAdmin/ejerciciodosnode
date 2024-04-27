import express from "express";
import validar from "./middleware/middleware.js";
const app = express();
const port = process.env.PORT || 3005;

// creando ruta de tiempo para que pueda continuar la carga si esta autorizado
app.get('/tiempo', validar, (req, res) => {
    res.send('usuario autorizado a entrar a ruta de tiempo');
});

app.get("/", (req, res) => {
    res.send("Hello World!");       
});
app.get("*", (req, res) => {
    res.send("Pagina no encontrada, revise el url");
});

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});