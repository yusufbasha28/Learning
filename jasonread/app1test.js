const fs = require("fs");
const content = fs.readFileSync("samp.json");
const jsoncontent = JSON.parse(content);

module.exports = {
    sayHello: function () {
        return jsoncontent.name;
    },
    sayId: function () {
        return jsoncontent.id;
    },
    sayAddress: function () {
        return jsoncontent.address;
    }
}