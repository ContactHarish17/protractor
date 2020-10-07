let createemployee = function()
{
    let firstName = element(by.model('selectedEmployee.firstName'));
    let secondName = element(by.model('selectedEmployee.lastName'));
    let startDate = element(by.model('selectedEmployee.startDate'));
    let email = element(by.model('selectedEmployee.email'));


    this.firstName = function(employeeFirstName)
    {
        firstName.sendKeys(employeeFirstName)

    };

    this.secondName = function(employeeSecondName)
    {
        SecondName.sendKeys(employeeSecondName)
    }

    this.startDate = function(employeeStartDate)
    {
        startDate.sendKeys(employeeStartDate)
    }

    this.email = function(employeeEmail)
    {
        email.sendKeys(employeeEmail)
    }
};
module.exports = new createemployee();