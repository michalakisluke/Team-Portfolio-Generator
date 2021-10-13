const Intern = require('../lib/Intern');

test('Creates an intern object', () => {
    const intern = new Intern('Luke Michalakis', 1, 'michalakisluke@gmail.com', 'University at Buffalo');

    // Test for name property (Name is a Luke Michalakis)
    expect(intern.name).toEqual('Luke Michalakis');
    // Test for id property (id is 1)
    expect(intern.id).toEqual(1);
    // Test for email property (Email is michalakisluke@gmail.com)
    expect(intern.email).toEqual('michalakisluke@gmail.com');
    // Test for email property (github is github.com/michalakisluke)
    expect(intern.school).toEqual('University at Buffalo');

}); 

test('Get methods return expected output', () => {
    const intern = new Intern('Luke Michalakis', 1, 'michalakisluke@gmail.com', 'University at Buffalo');

    //test getSchool
    expect(intern.getSchool()).toEqual('University at Buffalo');

    //test getRole
    expect(intern.getRole()).toEqual('Student');
});