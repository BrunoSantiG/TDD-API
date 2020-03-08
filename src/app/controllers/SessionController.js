const { User } = require("../models");

module.exports = {
	store: async (req, res) => {
		const { email, password } = req.body;

		try {
			const user = await User.findOne({ where: { email } });

			if (!user) {
				return res.status(401).json({ message: "User not found" });
			}

			if (!(await user.checkPassword(password))) {
				return res.status(401).json({ message: "Incorrect Password" });
			}

			return res.status(200).json({
				user,
				token: user.generateToken()
			});
		} catch (err) {
			console.log(err, request.body.email);
		}
	}
};
