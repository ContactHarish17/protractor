describe('Checking the addition of two numbers', function()
{
    it('addition test', function()
    {
       browser.get('https://juliemr.github.io/protractor-demo/');
       var ec = protractor.ExpectedConditions;
       browser.wait(ec.titleIs('Super Calculator'),4000);

       element(by.model('first')).sendKeys('4');
       element(by.model('second')).sendKeys('5');

       element(by.css('[ng-click="doAddition()"]')).click();

       let result = element(by.className('ng-binding'));
       console.log(result.get);

       expect(result.getText()).toEqual('9');
       browser.sleep(3000)
        
    });

    it('Subtraction of two numbers', function()
    {

        
        element(by.model('first')).clear();
        element(by.model('first')).sendKeys('20');

        
        var desiredOption = element.all(by.tagName('option')).get(4);
        console.log(desiredOption.getText());
        desiredOption.click();

        // var desiredOptionelement = element.all(by.tagName('option'))
        // var selectvalues = require('../functions/selectElements.js')
        // selectvalues.SelectValueFromDropDown(desiredOptionelement,4);

        

        element(by.model('second')).sendKeys('5');

        element(by.css('[ng-click="doAddition()"]')).click();

        let result = element(by.className('ng-binding'));
        console.log('the result value is ' + result.getText());

        expect(result.getText()).toEqual('15');
        browser.sleep(3000)


        

    });

  
});

