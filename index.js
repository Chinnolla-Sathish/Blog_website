import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

app.use(express.static("public")); // the use of this statement is it specify the where the static files are located [express.statc is a middle ware]

app.use(bodyParser.urlencoded({extended:true}));
var message = "";
var count=0;
app.get("/",(req,res)=>{
  res.render("index.ejs");
});

app.get("/createPost",(req,res)=>{
  res.render("createPost.ejs");
});

app.post("/createPost",(req,res)=>{
  message = req.body["message"];
  console.log(message);
  res.render("createPost.ejs",{message});
});
app.get("/viewPost",(req,res)=>{
  res.render("viewPost.ejs",{message});
});
app.get("/updatePost",(req,res)=>{

  res.render("updatePost.ejs",{message:message});

  });
app.post("/updatePost",(req,res)=>{
  message = req.body["update_message"];
   count=1;
  res.render("updatePost.ejs",{message:message ,count:count});
  count=0;

});
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
