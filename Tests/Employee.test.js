const { exportAllDeclaration } = require("@babel/types");
const { it } = require("node:test");
const { describe } = require("yargs");
const Employee = require("../Classes/Employee");

describe("Employee class", () => {
    describe("getName method", () => {
        it("gets name form user", () => {
            const name = new Employee("Engineer", [
                {name: "Melanie"}
            ]);
            name.getName("Melanie");
            expect(name.getName).toBe("Melanie");
        });
    });

    describe("getEmail method", () => {
        it("gets email form user", () => {
            const email = new Employee("Engineer", [
                {email: "islasmelanie@gmail.com"}
            ]);
            email.getEmail("islasmelanie@gmail.com");
            expect(email.getEmail).toBe("islasmelanie@gmail.com");
        });
    });

    describe("getRole method", () => {
        it("gets employee role form user", () => {
            const role = new Employee("Engineer", [
                {role: "Engineer"}
            ]);
            role.getRole("Engineer");
            expect(role.getRole).toBe("Engineer");
        });
    });
})