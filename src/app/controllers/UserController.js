const { User } = require("../models");

module.exports = {
	store: async (req, res) => {
		const { name, email, password } = req.body;

		try {
			const emailExists = await User.findOne({ where: { email } });

			if (
				!name ||
				name == "" ||
				!email ||
				email == "" ||
				!password ||
				password == ""
			) {
				return res
					.status(401)
					.json({ message: "Every field must be filled out" });
			}

			if (!emailExists) {
				return res.status(401).json({ message: "User already exists" });
			}

			await User.create({ name, body, password })
				.then(user => {
					user.password = undefined;
					return res.status(200).json({
						user,
						token: user.generateToken()
					});
				})
				.catch(err => {
					return res.status(500).json({ message: "erro: " + er });
				});

			return res.status(200).json({
				user,
				token: user.generateToken()
			});
		} catch (err) {
			console.log(err, request.body.email);
		}
	}
};
