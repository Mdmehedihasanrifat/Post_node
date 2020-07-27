var express=require('express');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs');
var friends=['lily','hope','brad'];
app.listen('3000',process.env.IP,function () {
console.log("server is ok");
});

app.get('/',function (req,res) {

    res.render('home');

});


app.post("/addfriend",(req,res)=> {
friends.push(req.body.name);
    res.redirect('/friends');

});


app.get('/friends',function (req,res) {


    res.render('friends',{friends:friends});

});

