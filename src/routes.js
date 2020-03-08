const routes = require("express").Router();
const getControllers = require("./app/utils/getController");
const authMiddleware = require("./app/middlewares/auth");

routes.post("/sessions", getControllers.SessionController.store);
routes.use(authMiddleware);
routes.get("/dashboard", (req, res) => {
	return res.status(200).send();
});

module.exports = routes;
