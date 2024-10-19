const port = 3000;
const express = require("express");

//Initialise express
const app = express();

app.use((req, res, next) => {
    let url ="http://localhost:3000/"
    console.log(`request made to: ${req.url}`);
    next();
});

//encodes urls to prevent any routing errors
app.use(
    express.urlencoded({
        extended: false
    })
);

//data will be parsed to JSON format
app.use(express.json());


app.post("/", (req, res) => {
    console.log(req.body);
    console.log(req.query);
    res.send("POST Successful!");

});
// app.post("/contact", (req, res) => { //Handle requests with the Express.js post method.
//     res.send("Contact information submitted successfully.");
//     });

// app.get("/", (req, res) => { //Respond with path parameters.
//     console.log("Query string is " , req.query)
//     res.send("Welcome");
// });

app.get("/items/:vegetable", (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
});

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});

//Params uses colons : and query uses ?
//run - /items/carrots