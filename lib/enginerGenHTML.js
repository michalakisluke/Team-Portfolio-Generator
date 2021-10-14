function engineerHTML(employee) {
    return `
    <div class = container>
        <section class = employee-detail>
            <h3>${employee.name}</h3>
            <h3>&#129297 Engineer</h3>
        </section>
        <section class = employee-attributes>
            <div id = id-number >
                <p>ID: ${employee.id}</p>
            </div>
            <div id = email-address>
                <p>Email Address: ${employee.email}</p>
            </div>
            <div id = office-number>
                <p>Github: ${employee.github}</p>
            </div>
        </section>
    </div>
    `
}