const express = require("express");
const router = express.Router();
const dataService = require("../services/data.service");

router.get("/user", getData);
router.post("/create", createData);
router.put("/edit", editData);
router.delete("/delete", deleteData);

module.exports = router;

async function getData(req, res, next) {
  try {
    const response = await dataService.getData();
    console.log(response);
    res.json({ message: "Informacion consultada con exito", data: response });
  } catch (error) {
    next(error);
  }
}

async function editData(req, res, next) {
  try {
    if (req.body) {
      const response = await dataService.editData(req.body);

      res.json({ message: "Informacion editada con exito", data: response });
    }
  } catch (error) {
    next(error);
  }
}
async function createData(req, res, next) {
  try {
    if (req.body) {
      const response = await dataService.createData(req.body);
      console.log(req.body);
      res.json({ message: "Informacion creada con exito", data: response });
    }
  } catch (error) {
    next(error);
  }
}
async function deleteData(req, res, next) {
  try {
    const response = await dataService.deleteData();
    res.json({ message: "Informacion eliminada con exito", data: response });
  } catch (error) {
    next(error);
  }
}
