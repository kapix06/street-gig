const router = require("express").Router();
const Event = require('../models/Event')

// get all the Events
router.get('/', (req, res, next) => {
  Event.find()
    .then(events => {
      res.status(200).json(events)
    })
    .catch(err => next(err))
});

// create an event
router.post('/', (req, res, next) => {
  const { title, description } = req.body
  console.log("title",req.body)

  Event.create({ title, description })
    .then(event => {
      res.status(201).json(event)
    })
    .catch(err => next(err))
});

// get a specific Event
router.get('/:id', (req, res, next) => {
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
