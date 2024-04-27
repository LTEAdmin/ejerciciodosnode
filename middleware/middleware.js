const validar = (req, res, next) => {
    const auth = req.headers.authorization;
    // forma abreviada de hacer el if
    auth 
        //en caso de correcto el token, pasamos al next
        ? next()
        //en caso de error, mandamos un error 401 y muestra texto no autorizado 
        : res.status(401).send('No autorizado');  
}
export default validar