var auth = require('./auth.js');
var id = require('./itemdetails.js');
var sku = require('./sku.js');
var request = require('request');

auth.authToken()
    .then(function (data) {
        var itemid = sku.itemid();
        var itemdetails = id.itemdetails();
        send(data, itemid, itemdetails)
    .then(function (data) {
    })
}).catch(function (error) {
    console.log("ur fucked", error);
})

send = function (data, itemid, itemdetails) {
    return new Promise(function (resolve, reject) {
        request.put({
            url: "https://merchant-api.jet.com/api/merchant-skus/" + itemid.sku + "",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + data + ""
            },
            body: itemdetails,
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