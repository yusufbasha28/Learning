const assert = require ("chai").assert;
const app = require("../samplem&c");
describe("app",function(){
    it("app should return hello",function(){
        let result = app.sayhello();
        assert.equal(result,"hello");
    
    });
    it("no should be >=",function(){
        let result = app.addnumber(2,2);
        assert.isAtLeast(result,2); 
    });
    it("no should be above 5",function(){
        let result = app.addnumber(7,2);
        assert.isAbove(result,5);
    });
    it("no should be below 5",function(){
        let result = app.subtract(1,2);
        assert.isBelow(result,5);
    });

});