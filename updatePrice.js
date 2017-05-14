var auth = require('./auth.js');
var sku = require('./sku.js');
var price = 80.00; //user input
var request = require('request');


auth.authToken()
    .then(function (data) {
        var itemid = sku.itemid();
        send(data, itemid, price)
    .then(function (data) {
    })
    }).catch(function (error) {
        console.log("ur fucked", error);
    })

send = function (data, itemid, price){
    return new Promise(function (resolve, reject) {
        request.put({
            url: "https://merchant-api.jet.com/api/merchant-skus/" + itemid.sku + "/price",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + data + ""
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