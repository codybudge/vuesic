var mongooose = ('mongoose')
var Schema = mongooose.Schema
var schemaName = 'playlist'

var songSchema = new Schema({
    title: {type:String, required: true },
    albumArt: {type: String, required: true},
    artist: {type:String, required: true },
    preview: {type:String, required: true },
    album: {type:String, required: true },
    price: {type: String, required: true}
})

var playlist = new Schema({
  title: {type: String, required: true},
  songs: [songSchema]
})

playlist.pre('save', (next) => {
  this.markModified('songs')
})


module.exports = mongooose.module(schemaName, playlist)
