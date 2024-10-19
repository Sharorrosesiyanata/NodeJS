const homeController = require("./controllers/homeController");
const port = 3000;
const express = require("express");

//initialise express
const app = express();

app.use((req, res, next) => {
    console.log(`request made to: ${req.url}`);
    next();
});

//encoded urls to prevent any routing errors.
app.use(
    express.urlencoded({
        extended: false
    })
);

//data will be parsed to JSON format
app.use(express.json());


app.get("/items/:vegetable", homeController.sendReqParam);

app.post("/", homeController.postData);

app.listen(port, () => {
    console.log(`Server running on port: ${port}`);
});