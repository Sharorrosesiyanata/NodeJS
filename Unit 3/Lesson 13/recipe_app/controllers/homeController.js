exports.sendReqParam = (req, res) => {
    let veg = req.params.vegetable;
    res.send(`This is the page for ${veg}`);
  };
  
exports.sendPost = (req, res) => {
  console.log(req.body);
  console.log(req.query);
  res.send("POST Successful!");
} 
exports.respondWithName = (req, res) => {
    res.render("index", {firstName: req.params.myName});
};//Respond with a custom EJS view.

