let homepage = function()
{
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goButton = element(by.css('[ng-click="doAddition()"]'));

    this.firstNumber = function(fnumber)
    {
        firstNumber.sendKeys(fnumber)

    };

    this.secondNumber = function(sNumber)
    {

        secondNumber.sendKeys(sNumber)
    };

    this.clickgoButton = function()
    {

        goButton.click();
    };

    this.verifyResult = function(result)
    {
        let output = element(by.className('ng-binding'));
        expect(output.getText()).toEqual(result);

    };

    this.get = function(url)
    {

        browser.get(url);
    };


};

module.exports = new homepage();