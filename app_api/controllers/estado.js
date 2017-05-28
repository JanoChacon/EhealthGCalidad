var mongoose = require('mongoose');  
var User  = mongoose.model('User');
var Estado = require('../models/estados');

var LocalStrategy    = require('passport-local').Strategy;



//Post, inserta una nueva persona en la bd
exports.addEstado = function(req, res) {  
	console.log('POST');
	console.log(req.body); 
	
	var estado = new Estado({
		temperatura: req.body.temperatura,
		pulso: req.body.pulso,
		ubicacion: req.body.ubicacion,
		date: req.body.date,
		user: req.body.user
	});

    estado.save(function(err, estado) {
			Estado.find({}, function(err, estados) {
        User.populate(estados, {path: "user"},function(err, estados){
            res.estado(200).send(estados);
        }); 
    });
    });
  };

	

