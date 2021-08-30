const assert = require ("chai").assert;
const app = require("../app1test.js");
describe("app",function(){
    it("json should return hello",function(){
        let result = app.sayHello();
        assert.equal(result,"yusuf");
    
    })
    it("json should return id",function(){
        let result = app.sayId();
        assert.equal(result,"12345"); 
    })
    it("json should return address",function(){
        let result = app.sayAddress();
        assert.equal(result,"chennai");
    })
   
});