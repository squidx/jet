var auth = require('./auth.js');
var sku = require('./sku.js');
var request = require('request');
var fs = require('fs');


exports.send = function () {
    var itemid = sku.itemid();
    var global_data = fs.readFileSync("auth.txt").toString();
    var price = 80.00; 
    return new Promise(function (resolve, reject) {
        request.put({
            url: "https://merchant-api.jet.com/api/merchant-skus/" + itemid.sku + "/price",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global_data + ""
            },
            body: {
                "price": price
            },
            json: true
        },

            function (error, response, body) {
                if (error) {
                    reject(error)
                }
                else {
                    resolve(true)
                }
            }
        );
    })
}    