let homepage = require('../pages/Homepage');
let homefunction = require('../functions/selectElements');

describe('Calculator page', function () {

    it('Addition of two numbers', function () {
        homepage.get('https://juliemr.github.io/protractor-demo/');
        homepage.firstNumber('10');
        homepage.secondNumber('20');
        homepage.clickgoButton();
        homepage.verifyResult('30');
        browser.sleep(2000)


    });

});