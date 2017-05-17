var auth = require('./auth.js');
var sku = require('./sku.js');
var request = require('request');
var fs = require('fs');


exports.send = function () {
    var itemid = sku.itemid();
    var global_data = fs.readFileSync("auth.txt").toString();
    var is_archived = true;
    return new Promise(function (resolve, reject) {
        request.put({
            url: "https://merchant-api.jet.com/api/merchant-skus/" + itemid.sku + "/status/archive",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global_data + ""
            },
            body: {
                "is_archived": is_archived
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