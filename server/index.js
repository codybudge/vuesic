var express = require('express')
var bp = require('body-parser')
var app = express()
var cors = require('cors')
var port = process.env.PORT || 3000

app.use(express.static(__dirname + "../www/dist"))

var whitelist= ['http://localhost:8080', 'https://hotlinemusic.herokuapp.com/']
var corsOptions = {
	origin: function (origin, callback) {
		var originIsWhitelisted = whitelist.indexOf(origin) !== -1;
		callback(null, originIsWhitelisted);
	},
	credentials: true
};
app.use(cors(corsOptions))

app.use(cors())
//Fire up database connection
require('./server-assets/db/mlab-config')


//REGISTER MIDDLEWEAR
app.use(bp.json())
app.use(bp.urlencoded({ 
  extended: true}))

var playlist = require('./server-assets/routes/playlists')

app.use(playlist.router)

//catch all
app.get('*', (req, res, next)=>{
  res.status(404).send({error: 'No matching routes'})
})

//port listener
app.listen(port, ()=>{
  console.log('server running on port', port)
})