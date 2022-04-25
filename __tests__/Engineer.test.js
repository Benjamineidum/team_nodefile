const Engineer = require('../lib/Engineer');

describe('Engineer', () => {
    describe('getGithub', () => {
        it('should get the github link', () => {
            const engineer = new Engineer('Emily', 1, 'emilybooknburger@gmail.com', 'Emily');
            const github = engineer.getGithub();

            expect(github).toEqual("Emily");
        });
    });

    describe('getRole', () => {
        it('should get the engineer role', () => {
            const engineer = new Engineer('Derek', 1, 'Derekeidum@duke.edu', 'Derek');
            const role = engineer.getRole();

            expect(role).toEqual("Engineer");
        });
    });
})
