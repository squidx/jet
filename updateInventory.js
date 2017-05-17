var auth = require('./auth.js');
var sku = require('./sku.js');
var request = require('request');
var fs = require('fs');


exports.send = function (itemid) {
    var itemid = sku.itemid();
    var inventory = 20;
    var global_data = fs.readFileSync("auth.txt").toString();
    var fid = fs.readFileSync("full_id.txt").toString();
    return new Promise(function (resolve, reject) {
        request.put({
            url: "https://merchant-api.jet.com/api/merchant-skus/" + itemid.sku + "/Inventory",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer " + global_data + ""
            },
            body: {
                "fulfillment_nodes": [
                    {
                        "fulfillment_node_id": "" + fid + "",
                        "quantity": inventory
                    }
                ]
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