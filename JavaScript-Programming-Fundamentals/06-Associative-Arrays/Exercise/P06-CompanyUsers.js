function companyUsers(arr) {
    let companiesEmployees = {};

    for (let companyEmployee of arr) {
        let [company, employeeId] = companyEmployee.split(' -> ');

        if (companiesEmployees.hasOwnProperty(company)) {
            if (!companiesEmployees[company].includes(employeeId)) {
                companiesEmployees[company].push(employeeId);
            }
        } else {
            companiesEmployees[company] = [employeeId];
        }
    }

    let sortedCompanies = Object.keys(companiesEmployees).sort();

    for (let company of sortedCompanies) {
        console.log(company);
        companiesEmployees[company].forEach(employeeId => {
            console.log(`-- ${employeeId}`);
        });
    }
}
companyUsers(['SoftUni -> AA12345', 'SoftUni -> BB12345', 'Microsoft -> CC12345', 'HP -> BB12345']);