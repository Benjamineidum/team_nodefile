const Manager = require('../lib/Manager.js');

describe('Manager', () => {
    describe('getOfficeNumber', () => {
        it('should get the office number', () => {
            const manager = new Manager('Stephanie', 1, 'Stephbossgal@gmail.com', 404);
            const officeNumber = manager.getOfficeNumber();
            expect(officeNumber).toEqual(404);
        });
    });

    describe('getRole', () => {
        it('should get the role of manager', () => {
            const manager = new Manager('Ashanti', 2, 'AshantiHR@gmail.com', 2137);
            const role = manager.getRole();
            expect(role).toEqual('Manager');
        });
    });

    describe('getName', () => {
        it('should get the name of the manager', () => {
            const manager = new Manager('Alan', 2, 'AlanServiceandEngagement@hotmail.com', 117);
            const name = manager.getName();
            expect(name).toEqual('Alan');
        });
    });

    describe('getId', () => {
        it('should get the id of the manager', () => {
            const manager = new Manager('Neci', 2, 'NeciPayandBenefits@gmail.com', 666);
            const id = manager.getId();
            expect(id).toEqual(2);
        });
    });

    describe('getEmail', () => {
        it('should get the email of the manager', () => {
            const manager = new Manager('Lamar', 4, 'Lamar@outlook.com', 1);
            const email = manager.getEmail();
            expect(email).toEqual('Lamar@outlook.com');
        });
    });
});
