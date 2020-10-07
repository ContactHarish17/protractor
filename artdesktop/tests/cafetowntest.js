let loginpage = require('../pages/Loginpage');
let createEmployee = require('../pages/CreateEmployee');
describe('login function', function()
{

    it('test to login into cafetown website', function()
    {
        loginpage.get('http://cafetownsend-angular-rails.herokuapp.com/employees');
        loginpage.userName('Luke');
        loginpage.password('Skywalker');
        loginpage.loginbutton();
        loginpage.waitforelement(4000);

    });

    it('test to check logout button displayed', function()
    {
        loginpage.verifyText('Hello Luke');
        loginpage.elementdisplayed();

    });


});