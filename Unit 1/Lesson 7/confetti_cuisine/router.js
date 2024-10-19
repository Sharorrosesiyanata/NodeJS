//The router module includes a routes object that holds key-value pairs mapped to GET
//requests through the get function and POST requests through the post function.


const httpStatus = require("http-status-codes");
const contentTypes = require("./contentTypes");
const utils = require("./utils");
const routes = {//creating a routes object to hold route functions.
    "GET": {},
    "POST": {}
};
exports.handle = (req, res) => {//creating the handel function to handle requests.
    try {
        routes[req.method][req.url](req, res);
    } catch (e) {
        res.writeHead(httpStatus.OK, contentTypes.html);
        utils.getFile("views/error.html", res);
    }
};
exports.get = (url, action) => {//creating the get and post functions to map route functions.
    routes["GET"][url] = action;
};
exports.post = (url, action) => {
    routes["POST"][url] = action;
};














