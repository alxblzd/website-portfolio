const express = require('express')
var favicon = require('serve-favicon')
var path = require('path')



const app = express()

const port = 3000

app.use(express.static(__dirname + '/public'));
// set the view engine to ejs
app.set('view engine', 'ejs');

// use res.render to load up an ejs view file

// index page

app.get('/', (req, res) => {
  res.render('index');
})

app.get('', (req, res) => {
  res.render('index');
})

app.get('/index', (req, res) => {
  res.render('index');
})

app.get('/projects', (req, res) => {
  res.render('projects');
})

// TUTORIAL

app.get('/tutorial', (req, res) => {
  res.render('tutorials');
})


app.get('/tutorials', (req, res) => {
  res.render('tutorials');
})


app.get('/tutorials/ansible_cheats', (req, res) => {
  res.render('tutorial_ansible_cheat');
})


app.get('/tutorials/linux_disks', (req, res) => {
  res.render('tutorial_linux_disks');
})


//WORK IN PROGRESS

app.get('/links', (req, res) => {
  res.render('inprogress');
})

app.get('/infos', (req, res) => {
  res.render('inprogress');
})

app.get('/inprogress', (req, res) => {
  res.render('inprogress');
})

//TUTORIALS LINKS









app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})