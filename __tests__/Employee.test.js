const Employee = require('../lib/Employee');

test('Creates an employee object', () => {
    const employee = new Employee('Luke Michalakis', 1, 'michalakisluke@gmail.com');

    // Test for name property (Name is a Luke Michalakis)
    expect(employee.name).toEqual('Luke Michalakis');
    // Test for id property (id is 1)
    expect(employee.id).toEqual(1);
    // Test for email property (Email is michalakisluke@gmail.com)
    expect(employee.email).toEqual('michalakisluke@gmail.com');
}); 

test('Get methods return expected output', () => {
    const employee = new Employee('Luke Michalakis', 1, 'michalakisluke@gmail.com');

    //test getName
    expect(employee.getName().toBe('Luke Michalakis'));

    //test getId
    expect(employee.getId().toEqual(1));

    //test getEmail
    expect(employee.getEmail().toEqual('michalakisluke@gmail.com'));

    //test getRole
    expect(employee.getRole().toEqual('Employee'));
});
