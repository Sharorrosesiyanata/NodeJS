const routeResponseMap = {
    "/": "<h1>Welcome</h1>",
    "/info": "<h1>Info Page About Cooking<a href=\"https://en.wikipedia.org/wiki/Cooking\">Visite</a></h1>",
    "/contact": "<h1>Contact Us <a href=\"https://contacts.google.com/\">Here</a></h1>",
    "/about": "<h1>Learn More About Us <a href=\"https://codecollege.co.za/about/\">Here</a></h1>",
    "/hello": "<h1>Say hello by emailing us <a href=\"https://mail.google.com/\">here</a></h1>",
    "/error": "<h1>Sorry the page you are looking for is not <a href=\"https://localhost:3000/pies\">here</a></h1>"
};   

//routeResponseMap: This is an object that maps different URL routes to their respective HTML responses.

const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");

const app = http.createServer((req, res) => {
        console.log("URL IS: ", req.url); //Only if you want the information to be displayed in terminal
        res.writeHead(200, {
            "Content-Type": "text/html"
        });
        if (routeResponseMap[req.url]) {
            res.end(routeResponseMap[req.url]);
            setTimeout(() => res.end(routeResponseMap[req.url]), 2000);
        } else {
            res.end("<h1>Page does not exist</h1>");
        }
    });
app.listen(port);
console.log(`The server has started and is listening on port number:${port}`);