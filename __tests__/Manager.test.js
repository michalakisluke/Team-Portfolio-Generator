const Manager = require('../lib/Manager');

test('Creates an manager object', () => {
    const manager = new Manager('Luke Michalakis', 1, 'michalakisluke@gmail.com', 200);

    // Test for name property (Name is a Luke Michalakis)
    expect(manager.name).toEqual('Luke Michalakis');
    // Test for id property (id is 1)
    expect(manager.id).toEqual(1);
    // Test for email property (Email is michalakisluke@gmail.com)
    expect(manager.email).toEqual('michalakisluke@gmail.com');
    // Test for email property (github is github.com/michalakisluke)
    expect(manager.office).toEqual(200);

}); 

test('Get methods return expected output', () => {
    const manager = new Manager('Luke Michalakis', 1, 'michalakisluke@gmail.com', 200);

    //test getOffice
    expect(manager.getOffice()).toEqual(200);

    //test getRole
    expect(manager.getRole()).toEqual('Manager');
});