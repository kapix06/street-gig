const router = require("express").Router();
const Event = require('../models/Event');
const express = require('express');
const cors = require('cors');
const fileUploader = require("../config/cloudinary.config");
const mongoose = require('mongoose');
const User = require("../models/User.model");

router.get("/", (req, res, next) => {
  res.json("All good in here");
});

// get all the Events
router.get('/events', (req, res, next) => {
  Event.find()
    .then(eventsFromDB => {res.status(200).json(eventsFromDB)
    })
    .catch(err => next(err))
});


// POST "/api/upload" => Route that will receive an image, send it to Cloudinary via the fileUploader and return the image URL
router.post("/upload", fileUploader.single("imageUrl"), (req, res, next) => {
  // console.log("file is: ", req.file)
 
  if (!req.file) {
    next(new Error("No file uploaded!"));
    return;
  }
  
  // Get the URL of the uploaded file and send it as a response.
  // 'secure_url' can be any name, just make sure you remember to use the same when accessing it on the frontend
  
  res.json({ secure_url: req.file.path });
});


// get a specific USER --for Edit User
router.get('/user/:id', (req, res, next) => {
  User.findById(req.params.id)
  .populate("events")
    .then(user => {
      res.status(200).json(user)
    })
    .catch(err => next(err))
});

// update a User
router.put('/user/:id', (req, res, next) => {
  const { name, location, description } = req.body
  User.findByIdAndUpdate(req.params.id, {
    name,
    location,
    description,
  }, { new: true })
    .then(updatedUser => {
      console.log(updatedUser)
      res.status(200).json(updatedUser)
    })
    .catch(err => next(err))
});



// create an Event
router.post('/events', (req, res, next) => {
  //const { title, description } = req.body
  console.log("titlePPP",req.body)
 const { title, description, address, date, genre, imageUrl, user} = req.body
Event.create({ title, description, address, date, genre, imageUrl, owner: user })
    .then(createdEvent => {
      res.status(201).json(createdEvent)
    })
    .catch(err => next(err))
});



// get a specific Event
router.get('/events/:id', (req, res, next) => {
  Event.findById(req.params.id)
    .then(event => {
      res.status(200).json(event)
    })
    .catch(err => next(err))
});

// update an event
router.put('/:id', (req, res, next) => {
  const { title, description } = req.body
  Event.findByIdAndUpdate(req.params.id, {
    title,
    description
  }, { new: true })
    .then(event => {
      res.status(200).json(event)
    })
    .catch(err => next(err))
});

// delete an Event
router.delete('/:id', (req, res, next) => {
  Event.findByIdAndDelete(req.params.id)
    .then(() => {
      res.status(200).json({ message: 'Event deleted' })
    })
    .catch(err => next(err))
});




module.exports = router;
