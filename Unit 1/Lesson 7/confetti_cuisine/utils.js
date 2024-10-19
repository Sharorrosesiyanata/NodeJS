//The function in this file is responsible for returning 
//an error page if a file doesnt exist.
const fs = require("fs"),
    httpStatus = require("http-status-codes"),
    contentTypes = require("./contentTypes");//import modules for use in getFile

module.exports = {
    getFile: (file, res) => {//Export a function to read and return a response.
        fs.readFile(`./${file}`, (error, data) => {
            if (error) {
                res.writeHead(httpStatus.INTERNAL_SERVER_ERROR,
                    contentTypes.html);
                res.end("There was an error serving content!");
            }
            res.end(data);
        });
    }
};
