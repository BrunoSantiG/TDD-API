const { User } = require("../../src/app/models");

describe("Authentication", () => {
	it("Create", async () => {
		const user = await User.create({
			name: "Bruno Santi",
			email: "bruno.santi.98@outlook.com",
			password: "123456"
		});

		expect(user.email).toBe("bruno.santi.98@outlook.com");
	});
});
