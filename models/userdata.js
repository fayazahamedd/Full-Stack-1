const mongoose = require('mongoose')

const userdatSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String
  },
  pass: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('userdata', userdatSchema)












let userdata = [];

module.exports = class UserData{

    constructor(u,e,p){

        this.user = u;
        this.email = e;
        this.pass = p;
        
    }

    save(){

        userdata.push(this);
    }

    static fetchAll(){

        return userdata;
    }
}