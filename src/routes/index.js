const dataController = require("../controllers/data.controller");

module.exports = app => {
  app.get("/", (req, res, next) => {
    res.json({ data: "Get" });
    console.log("Prueba Get");
  });

  app.use("/api", dataController);

  app.use((req, res, next) => {
    res.status(404).json({
      message: `Error 404 - la ruta de accceso [${req.url}] no existe`
    });
  });
};
