const jwt = require("jsonwebtoken");
const { promisfy } = require("util");

module.exports = async (req, res, next) => {
	const authHeader = req.headers.authorization;
	if (!authHeader) {
		return res.status(401).json({ message: "token not provides" });
	}

	const [type, token] = authHeader.split(" ");

	if (type != "Bearer") {
		return res.status(401).json({ message: "Invalid token type" });
	}

	try {
		const decoded = await promisfy(jwt.verify)(
			token,
			process.env.APP_SECRET
		);

		req.userID = decoded.id;
		return next();
	} catch (err) {
		return res.status(401).json({ message: "Invalid token" });
	}

	return next();
};
