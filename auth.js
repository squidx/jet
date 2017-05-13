var request = require('request');
exports.authToken = function () {
    return new Promise(function (resolve, reject) {
        request.post({
            url: "https://merchant-api.jet.com/api/token",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
                "user": "C518566DE331E1010EB029F13C28B599FC10076B",
                "pass": "sI7i5wUQjBYPiH3/BnO5lPjW13iL+va3zyv/ZriZPQQi"
            },
            json: true
        }, function (error, response, body) {
            resolve(body.id_token)
        }
    ); 
    })
}
