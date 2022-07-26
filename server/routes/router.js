const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");

route.get("/", controller.findUsers);
route.get("/:id", controller.findUser);
route.post("/", controller.addUser);
route.put("/:id", controller.updateUser);
route.delete("/:id", controller.deleteUser);

module.exports = route;
