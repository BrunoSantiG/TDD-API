const { User } = require("../../src/app/models");

describe("Authentication", () => {
	it("Create", async () => {
		const user = await User.create({
			name: "Bruno Santi",
			email: "bruno98@outlook.com",
			password: "123456"
		});

		expect(user.email).toBe("bruno98@outlook.com");
	});
});
