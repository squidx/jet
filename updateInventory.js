var auth = require('./auth.js');
var sku = require('./sku.js');
var inventory = 4; //user input
var request = require('request');


auth.authToken()
    .then(function (data) {
        var itemid = sku.itemid();
        send(data, itemid, inventory)
    .then(function (data) {
    })
    }).catch(function (error) {
        console.log("ur fucked", error);
    })

send = function (data, itemid, inventory) {
    return new Promise(function (resolve, reject) {
        request.put({
            url: "https://merchant-api.jet.com/api/merchant-skus/" + itemid.sku + "/inventory",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + data + ""
            },
            body: {
                "fulfillment_node_id": "XISNDKSANDSFNCSJKFDNFKJHFJD",
                "quantity": inventory
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