const Manager = require("../Classes/Manager");


describe("Manager class", () => {

    describe("getRole method", () => {
        it("gets employee role form user", () => {
            const role = new Manager ("Manager", [
                {role: "Manager"}
            ]);
            role.getRole("Manager");
            expect(role.getRole).toBe("Manager");
        });
    });
})