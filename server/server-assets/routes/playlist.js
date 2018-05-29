var router = require('express').Router()
var Playlist = require('../models/playlist')


//Get & Get by ID
router.get('/api/playlist/:id?', (req, res) => {
  if (req.params.id) {
    Playlist.findById(req.params.id)
      .then(playlist => {
        return res.send(playlist)
      })
      .catch(err => {
        return res.status(404).send({ 'error': 'No playlist at that id' })
      })
  }
  Playlist.find({})
    .then(playlist => {
      return res.send(playlists)
    })
    .catch(err => {
      return res.status(404).send({ 'error': err })
    })
})




//Post CREAT NEW PLAYLIST 
router.post('api/playlist', (req, res) => {
  Playlist.create(req.body)
    .then(newPlaylist => {
      return res.send(newPlaylist)
    })
    .catch(err => {
      return res.status(400).send(err)
    })
})


//Put

//Add a single song
router.put('/api/playlists/:id/songs', (req, res)=>{
  Playlist.findById(req.params.id)
    .then(playlist=>{
      playlist.songs.$addToSet(req.body)
      playlist.save()
    })
    .catch(err => {
      return res.status(400).send(err)
    })
})

//Update entire song array from entire playlist
router.put('/api/playlists/:id', (req,res)=>{
  Playlist,findByIdAndUpdate(req.params.id, req.body,{new:true})
  .then(playlist=>{
    res,send(playlist)
  })
  .catch(err => {
    return res.status(400).send(err)
  })
})


//Delete
router.delete('/api/playlists/:id', (req, res) =>{
  Playlist.findbyIdAndRemove(req.params.id)
  .then(oldPlaylist => {
    res.send("Successfully deleted")
  })
  .catch(err => {
    res.send(err)
  })
})