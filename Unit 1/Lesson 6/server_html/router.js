const httpStatus = require("http-status-codes");
const htmlContentType = {
        "Content-Type": "text/html"
    },
    routes = {
        GET: {
            "/info": (req, res) => {
                res.writeHead(httpStatus.OK, {
                    "Content-Type": "text/plain" //"Content-Type": "text/html"
                });
                res.end("Welcome to the Info Page!"); //"<h1>Welcome to the Info Page!</h1>"
            }
        },
        POST: {}
    };

exports.handle = (req, res) => {
    try {
        if (routes[req.method][req.url]) {
            routes[req.method][req.url](req, res);
        } else {
            res.writeHead(httpStatus.NOT_FOUND, htmlContentType);
            res.end("<h1>No such file exists</h1>");
        }
    } catch (ex) {
        console.log("error: " + ex);
    }
};

exports.get = (url, action) => {
    routes["GET"][url] = action;
};

exports.post = (url, action) => {
    routes["POST"][url] = action;
};
