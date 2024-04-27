import express from "express";
import rutas from "./rutas/rutas.js";

const app = express();
const port = process.env.PORT || 3005;

// uso de middleware
app.use("/", rutas);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});