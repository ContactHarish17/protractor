let loginpage = function()
{
        let userName = element(by.model('user.name'));
        let password = element(by.model('user.password'));
        let loginbutton =  element(by.css('button[type="submit"]'));

        let logoutbutton = element.all(by.css('[ng-click="logout()"]'));

        let logout = element(by.css('p[class*="main-button"]'));

    
        let addEmployee = element(by.id('bAdd'));
        let editEmployee = element(by.id('bEdit'));
        let deleteEmployee = element(by.id('bDelete'));
        let list = $$('.formFooter');
        let addbutton = element(by.cssContainingText('.main-button','Add'));
        let cancelbutton = element(by.className('subButton bCancel'));
        let doubleclick = element(by.css('ng-dblclick="editEmployee()"'));
        let welcometext = element(by.id('greetings'));


        function selectEmployeeList(index)
        {
            let employeelist = element.all(by.id('employee-list'));
            employeelist.get(index).click();
            expect(employeelist.get(index).isSelected()).toBe(true);
            
        }


        this.userName = function(loginUsername)
        {
            userName.sendKeys(loginUsername)
        }

        this.password = function(loginpassword)
        {
            password.sendKeys(loginpassword)
        }

        this.loginbutton = function()
        {
            loginbutton.click();
        }

        this.get = function(websiteURL)
        {
            browser.get(websiteURL)
        }

        this.elementdisplayed = function()
        {
            expect(logout.isDisplayed()).toBeTruthy();

        }

        this.verifyText = function(expectedText)
        {
            expect(welcometext.getText()).toEqual(expectedText);
        }

        this.waitforelement = function(seconds)
        {
            browser.sleep(seconds)
        }

        

};
module.exports = new loginpage();
