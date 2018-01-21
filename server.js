var express = require('express'),
    app = express(),
    bodyParser = require('body-parser'),
    mongoose = require('mongoose');

mongoose.connect('mongoose://localhost/workout-query');

app.use(express.static(__dirname + '/public')); // puts all static content in /public
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function(req, res){
    res.send('Hello');
});


app.post("/api/post", createPost);

function createPost(req, res) { // grab the payload that is posted
    var post = req.body; // express out of the box doesn't know how to parse this body
    console.log("you said this:", post);
    res.json(post);
}

//schemas allow for validation with certain structs, relational database
//mongoose model - api to talk to db
var PostSchema = mongoose.Schema({
    title: String, // can be stricter, with {type:String, required: true},
    body: String,
    tag: {type: String, enum: ['Leg', 'Back', 'Arms']},
    posted: {type: Date, default: Date.now}
});

//To interact w/ db, find, remove, update, create instances, etc.
var PostModel = mongoose.model("PostModel", PostSchema);


app.listen(3000);
