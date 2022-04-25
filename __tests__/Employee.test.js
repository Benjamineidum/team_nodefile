const Employee = require('../lib/Employee.js');

describe('Employee', () => {
    describe('getName', () => {
        it("should get the name of the employee", () => {
            const employee = new Employee('Brayden', 5, 'Brayden@Target.com');
            const name = employee.getName();

            expect(name).toBe('Brayden');
        });
    });

    describe('getId', () => {
        it("should get the id of the employee", () => {
            const employee = new Employee('Chief', 117, 'john117@unsc.com');
            const id = employee.getId();

            expect(id).toEqual(117);
        });
    });

    describe('getEmail', () => {
        it("should get the email of the employee", () => {
            const employee = new Employee('Kristina', 1, 'Kristina@Target.com');
            const email = employee.getEmail();

            expect(email).toEqual('Kristina@Target.com');
        });
    });

    describe('getRole', () => {
        it("should return the role as Employee", () => {
            const employee = new Employee('Karl', 5, 'KarlAnthonyTowns@timberwolves.com');
            const role = employee.getRole();

            expect(role).toEqual('Employee');
        })
    });
});
