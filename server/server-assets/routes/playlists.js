var router = require('express').Router()
var Playlist = require('../models/playlists')


//Get & Get by ID
router.get('/api/playlists/:id?', (req, res) => {
  if (req.params.id) {
    return Playlist.findById(req.params.id)
      .then(playlist => {
        return res.send(playlist)
      })
      .catch(err => {
        return res.status(404).send({ 'error': 'No playlist at that id' })
      })
  }
  Playlist.find({})
    .then(playlist => {
      return res.send(playlist)
    })
    .catch(err => {
      return res.status(404).send({ 'error': err })
    })
})


//Put

//Add a single song
router.put('/api/playlists/:id/songs', (req, res)=>{
  Playlist.findById(req.params.id)
    .then(playlist=>{
      playlist.songs.addToSet(req.body)
      playlist.save()
      res.send(playlist)
    })
    .catch(err => {
      return res.status(400).send(err)
    })
})

//Update entire song array from entire playlist
router.put('/api/playlists/:id', (req, res)=>{
  Playlist.findByIdAndUpdate(req.params.id, req.body,{new:true})
  .then(playlist=>{
    res.send(playlist)
  })
  .catch(err => {
    return res.status(400).send(err)
  })
})

//Delete
router.delete('/api/playlists/:id/songs/:songId', (req, res) =>{
  Playlist.findById(req.params.id)
  .then(function (playlist){
    let song = playlist.songs.id(req.params.songId)
    if(song){
      song.remove()
    }
    playlist.save().then(err => {
      res.send(playlist)
    })
  })
  .catch(err => {
    return res.status(400).send(err)
  })
  
})

module.exports = {
  router
}