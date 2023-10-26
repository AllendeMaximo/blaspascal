const express = require('express')
const app = express();
app.use(express.static('public'));

const fs = require('fs')
app.set('view engine', 'ejs');

fs.readFile('./Datos-ONIET---Hoja-1---JSON.json', (err, data) => {

    if (err) throw err;

    const objetoJSON = JSON.parse(data);

    app.get('/', (req,res) => {
        res.render('index', {empresas : objetoJSON})
    })

});


app.listen(3000)
