var express = require('express'),
    app = express();

app.get('/', function(req, res){
    res.send('Hello');
});

app.use(express.static(__dirname + '/public')); // puts all static content in /public

app.listen(3000);
