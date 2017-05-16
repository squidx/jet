var auth = require('./auth.js');
var sku = require('./sku.js');
var inventory = 4; //user input - placeholder
var request = require('request');
var fs = require('fs');


exports.send = function (itemid, inventory) {
    var global_data = fs.readFileSync("auth.txt").toString();
    var fid = fs.readFileSync("full_id.txt").toString();
    return new Promise(function (resolve, reject) {
        request.put({
            url: "https://merchant-api.jet.com/api/merchant-skus/" + itemid.sku + "/inventory",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global_data + ""
            },
            body: {
                "fulfillment_node_id": + fid + "",
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