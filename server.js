const express = require('express')
const app = express();
app.use(express.static('public'));
const routes = require('./routes/myRoutes')

app.use('/', routes)

app.set('view engine', 'ejs');

app.listen(3000)
