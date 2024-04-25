import express from "express";
const app = express();
const port = process.env.PORT||3001;
app.get("/", (req, res) => {
    res.send("Hello World!");       
});
app.get("*", (req, res) => {
    res.send("Pagina no encontrada, revise el url");
});
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});