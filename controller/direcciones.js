const fs = require('fs')

exports.home = (req,res) => {
    res.send('INICIO !!!')
}

exports.empresas = (req,res) => {
    fs.readFile('./Datos-ONIET---Hoja-1---JSON.json', (err, data) => {

        if (err) throw err;
    
        const objetoJSON = JSON.parse(data);
    
        res.render('index', {empresas : objetoJSON})

    });
}

exports.filter = (req,res) => {
    fs.readFile('./Datos-ONIET---Hoja-1---JSON.json', (err, data) => {

        if (err) throw err;
    
        const objetoJSON = JSON.parse(data);
    
        res.render('filter', {empresas : objetoJSON, month : req.params.month})

    });
}