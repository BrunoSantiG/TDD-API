const routes = require("express").Router();
const { User } = require("./app/models");

User.create({
	name: "Bruno Santi",
	email: "bruno.santi.98@outlook.com",
	password: "123456"
});

module.exports = routes;
