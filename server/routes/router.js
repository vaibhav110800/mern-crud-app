const express = require("express");
const route = express.Router();
const controller = require("../controller/controller");
const upload = require("../middleware/multer");

// route.get('/',services.homeRoutes);

// route.get('/addUser',services.add_user);

// route.get('/updateUser',services.update_user);

route.get("/", controller.findUsers);
route.get("/:id", controller.findUser);
route.post("/", upload.single("profile"), controller.addUser);
route.put("/:id", controller.updateUser);
route.delete("/:id", controller.deleteUser);

module.exports = route;
