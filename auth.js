var request = require('request');
exports.authToken = function () {
    return new Promise(function (resolve, reject) {
        request.post({
            url: "https://merchant-api.jet.com/api/token",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "user": "",
                "pass": ""
            },
            json: true
        }, function (error, response, body) {
            resolve(body.id_token)
        }
    ); 
    })
}
