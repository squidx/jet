var request = require('request');
exports.authToken = function (user, pass) {
    return new Promise(function (resolve, reject) {
        request.post({
            url: "https://merchant-api.jet.com/api/token",
            headers: {
                "Content-Type": "application/json"
            },
            body: {
<<<<<<< HEAD
                "user": user,
                "pass": pass
=======
                "user": "",
                "pass": ""
>>>>>>> 8d7def99a592683b398f51f239af8a4cc0be6a6a
            },
            json: true
        }, function (error, response, body) {
            resolve(body.id_token)
        }
    ); 
    })
}
