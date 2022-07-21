const express = require("express");
const app = express();
const hbs = require('hbs');
const path = require("path");
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');
const templatepath = path.join(__dirname,'../templates/views');
const partialspath = path.join(__dirname, "../templates/partials");


app.set('view engine', 'hbs');
app.set('views' , templatepath)
hbs.registerPartials(partialspath);
app.use(express.static(static_path));

// routng
app.get('/', (req,res) => {
    res.render("index");
});
app.get('/about', (req,res) => {
    res.render("about");
});
app.get('/weather', (req,res) => {
    res.render('weather');
});
app.get("*", (req,res) => {
    res.render('404error', {
        errormsg: 'oops page Not found'
    });
});

app.listen(port, () => {
    console.log(`your server has run successfully at ${port}`);
});