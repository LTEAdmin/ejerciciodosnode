import express from "express";
const app = express();
const port = process.env.PORT || 3005;

//creando middleware, funcion que pide autorizacion antes de mostrar la ruta
app.use('/tiempo', (req, res, next) => {
    console.log('Time: ', Date.now());
    const auth = req.headers.authorization;
    // forma abreviada de hacer el if
    auth 
        //en caso de correcto el token, pasamos al next
        ? next()
        //en caso de error, mandamos un error 401 y muestra texto no autorizado 
    : res.status(401).send('No autorizado');    
    
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