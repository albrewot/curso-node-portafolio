//Modulos
require("dotenv").config();
const express = require("express");
const routes = require("./src/routes");
const errorHandler = require("./src/middlewares/error.middleware");
const cors = require("cors");

const app = express();

//Middlewares

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

routes(app);

//Error Handler Middleware
app.use(errorHandler);

//Config del Server
const PORT = process.env.PORT || 4001;

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
