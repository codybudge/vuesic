var mongoose = require('mongoose')
var connectionString = 'mongodb://cody:cody@ds016298.mlab.com:16298/vuesic'
var connection = mongoose.connection


mongoose.connect(connectionString)

connection.on('error', err=>{
  console.log('ERROR FROM DATABASE: ', err)
})


connection.once('open', ()=>{
  console.log('This is ground control to Major Tom')
})