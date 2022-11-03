const express = require('express');
const app = express();
const path = require('path');
const hbs = require('hbs');
const port = process.env.PORT || 3000;

const staticPath = path.join(__dirname, "../public");
const template__path = path.join(__dirname, "../templates/views");
const partial__path = path.join(__dirname, "../templates/partials");

app.use(express.static(staticPath));
app.set('view engine', 'hbs');
app.set('views', template__path);
hbs.registerPartials(partial__path);


//routing
app.get('/', (req, res)=>{
    res.render('index');
})
app.get('/about', (req, res)=>{
    // console.log('now working')
    res.render('about');
})
app.get('/developer', (req, res)=>{
    res.render("developer");

})
app.get('/notes', (req, res)=>{
    res.render("notes");

})
app.get('/register', (req, res)=>{
    res.render('register');

})
app.get('/login', (req, res)=>{
    res.render('login');
})
app.get('/technology', (req, res)=>{
    res.render('technology');
})
app.get('/motivation', (req, res)=>{
    res.render('motivation');
})

app.get('/chatbot', (req, res)=>{
    res.render('chatbot');
})

app.get('/classupdates', (req, res)=>{
    res.render('classupdates');
})

app.get('/rotation', (req, res)=>{
    res.render('rotation');
})
app.get('*', (req,res)=>{
    res.render('404error');
});



//listening
app.listen(port, ()=>{
    console.log(`listening to the port ${port}`);
 });