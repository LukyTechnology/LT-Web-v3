import express from "express";

const app = express();
const PORT = 4000;

app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set("views", "public");
app.set("view engine", "ejs");



app.get("/", (req, res) => {
  res.render("index")
})
app.get("/setup", (req, res) => {
  res.render("setup")
})



app.listen(PORT, function(err) {
  if(err) { console.log("Server has errors! Check it: " + err) }
  else { console.log("Server started on port " + PORT + "!") }
})