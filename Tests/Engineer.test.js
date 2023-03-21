const Engineer = require("../Classes/Engineer");


describe("Engineer class", () => {
    describe("getGithub method", () => {
        it("gets GitHub username from user", () => {
            const github = new Engineer ("Engineer", [
                {github: "Melanieislas9"}
            ]);
            github.getGithub("Melanieislas9");
            expect(github.getGithub).toBe("Melanieislas9");
        });
    });

    describe("getRole method", () => {
        it("gets employee role form user", () => {
            const role = new Engineer ("Engineer", [
                {role: "Engineer"}
            ]);
            role.getRole("Engineer");
            expect(role.getRole).toBe("Engineer");
        });
    });
})