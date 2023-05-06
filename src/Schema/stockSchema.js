const mongoose = require('mongoose');

const stockSchema = new mongoose.Schema({
  name: {
 type : String,
  },
  last : {
    type :Number,
  },
  buy: {
    type :Number,
  },
  sell: {
    type :Number,
  },
  volume: {
    type :Number,
  },
  base_unit:  {
    type : String,
     }
});

module.exports = mongoose.model('Stock', stockSchema);


