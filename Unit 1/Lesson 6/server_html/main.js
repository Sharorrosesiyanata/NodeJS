const port = 3000;
const http = require("http");
const httpStatus = require("http-status-codes");
const fs = require("fs");

const sendErrorResponse = res => {
    res.writeHead(httpStatus.NOT_FOUND, {
        "Content-Type": "text/html"
    });
    res.write("<h1>File Not Found!</h1>");
    res.end();
};

http
    .createServer((req, res) => {
        let url = req.url;
        if (url.indexOf(".html") !== -1) {//if the file is an HTML file
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/html"
            });
            customReadFile(`./views${url}`, res);//responds with index.html
        } else if (url.indexOf(".js") !== -1) {//JSfile
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/javascript"
            });
            customReadFile(`./public/js${url}`, res);//test.js
        } else if (url.indexOf(".css") !== -1) {//CSSfile
            res.writeHead(httpStatus.OK, {
                "Content-Type": "text/css"
            });
            customReadFile(`./public/css${url}`, res);//test.css
        } else if (url.indexOf(".png") !== -1) {//IMAGEfile
            res.writeHead(httpStatus.OK, {
                "Content-Type": "image/png"
            });
            customReadFile(`./public/images${url}`, res);
        } else {
            sendErrorResponse(res);//error message
        }
    })
    .listen(3000);
console.log(`The server is listening on port number: ${port}`);

const customReadFile = (file_path, res) => {
    if (fs.existsSync(file_path)) {
        fs.readFile(file_path, (error, data) => {
            if (error) {
                console.log(error);
                sendErrorResponse(res);
                return;
            }
            res.write(data);
            res.end();
        });
    } else {
        sendErrorResponse(res);
    }
};