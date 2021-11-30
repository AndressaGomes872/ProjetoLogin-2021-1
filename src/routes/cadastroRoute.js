const express = require("express");
const routes = express.Router();
const cadastroController = require("../controller/cadastroController");
const upload = require("../config/multer");





//create
//abre add
routes.get("/add",cadastroController.abreadd);
//add
routes.post("/add", upload.single("foto"), cadastroController.add);

//read
//liste
routes.get("/", cadastroController.list);
//liste filtro
routes.post("/", cadastroController.filtro);

//update
//abre edit
routes.get("/edt/:id",cadastroController.abreedit);
//edit
routes.post("/edt/:id", upload.single("foto"), cadastroController.edit);

//delete
routes.get("/del/:id",cadastroController.del);

module.exports = routes;
