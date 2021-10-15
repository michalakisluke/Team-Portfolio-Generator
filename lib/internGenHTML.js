function internHTML(employee) {
    return `
    <div class = "employee-block d-inline-block">
        <section class = "employee-detail">
            <h3>${employee.name}</h3>
            <h3>&#127891 Intern</h3>
        </section>
        <section class = "employee-attributes">
            <div id = "id-number" >
                <p>ID: ${employee.id}</p>
            </div>
            <div id = "email-address">
                <p>Email Address: <a href = "mailto:${employee.email}">${employee.email}</a></p>
            </div>
            <div id = "office-number">
                <p>School: ${employee.school}</p>
            </div>
        </section>
    </div>
    `
}

module.exports = internHTML;