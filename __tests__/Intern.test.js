const Intern = require('../lib/Intern');

describe('Intern', () => {
    describe('getSchool', () => {
        it('should get the name of the school', () => {
            const intern = new Intern('Xavier', 1, 'Xavier@gmail.com', 'Georgia State University');
            const school = intern.getSchool();

            expect(school).toEqual("Georgia State University");
        });
    });

    describe('getRole', () => {
        it('should get the intern role', () => {
            const intern = new Intern('Billie', 1, 'GoldengirlBillie@gmail.com', 'Puppy State College');
            const role = intern.getRole();

            expect(role).toEqual("Intern");
        });
    });
})
