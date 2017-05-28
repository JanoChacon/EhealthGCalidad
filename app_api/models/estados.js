var mongoose = require('mongoose'),  
    Schema   = mongoose.Schema;
var User = mongoose.model('User');

var estadoSchema = mongoose.Schema({
    ubicacion: { 
      type : String
     },
    latitud:    { 
      type: String 
    },
    longitud:    { 
      type: String
    },
    fecha:  {
      type: Date, 
      default: Date.now
    },
    user : { 
      type : Schema.Types.ObjectId, 
      ref : "User" 
    }
});


mongoose.model('Estado', estadoSchema);

