let homepage = require('../pages/Homepage')
let homepagefunctions = function()

{
setFirstNumber = function(fNumber)
{
    homepage.firstNumber.senkeys(fNumber);

};


setSecondNumber = function(SNumber)
{
    homepage.secondNumber.senkeys(SNumber);

};
};
module.exports = homepagefunctions();