const Intern = require("../Classes/Intern");


describe("Intern class", () => {
    describe("getSchool method", () => {
        it("gets School name from intern", () => {
            const schoolName = new Intern ("Intern", [
                {schoolName: "UCR"}
            ]);
            schoolName.getSchool("UCR");
            expect(schoolName.getSchool).toBe("UCR");
        });
    });

    describe("getRole method", () => {
        it("gets employee role form user", () => {
            const role = new Intern ("Inter", [
                {role: "Intern"}
            ]);
            role.getRole("Intern");
            expect(role.getRole).toBe("Intern");
        });
    });
})