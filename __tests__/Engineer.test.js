const Engineer = require('../lib/Engineer');

test('Creates an engineer object', () => {
    const engineer = new Engineer('Luke Michalakis', 1, 'michalakisluke@gmail.com', 'github.com/michalakisluke');

    // Test for name property (Name is a Luke Michalakis)
    expect(engineer.name).toEqual('Luke Michalakis');
    // Test for id property (id is 1)
    expect(engineer.id).toEqual(1);
    // Test for email property (Email is michalakisluke@gmail.com)
    expect(engineer.email).toEqual('michalakisluke@gmail.com');
    // Test for email property (github is github.com/michalakisluke)
    expect(engineer.github).toEqual('github.com/michalakisluke');

}); 

test('Get methods return expected output', () => {
    const engineer = new Engineer('Luke Michalakis', 1, 'michalakisluke@gmail.com', 'github.com/michalakisluke');

    //test getGithub
    expect(engineer.getGithub()).toEqual('github.com/michalakisluke');

    //test getRole
    expect(engineer.getRole()).toEqual('Engineer');
});