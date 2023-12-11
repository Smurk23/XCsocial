const router = require('express').Router();
const User = require('../../models/User')

router.get('/', (req, res) => {
    User.find()
    .populate('friends')
    .then(results => {
        res.json(results)
    })
})

router.get('/:id', (req, res) => {
    User.findById(req.params.id)
    .then(results => {
        res.json(results)
    })
})

router.post('/', (req, res) => {
    User.create(req.body)
    .then(results => {
        res.json(results)
    })
})

router.put('/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, req.body)
    .then(results => {
        res.json(results)
    })
})

router.delete('/:id', (req, res) => {
    User.findByIdAndDelete(req.params.id)
    .then(results => {
        res.json(results)
    })
})

router.post('/friends/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        $addToSet: {
            friends: req.body.friendId
        }
    })
    .then(results => {
        res.json(results)
    })
})

router.delete('/friends/:id', (req, res) => {
    User.findByIdAndUpdate(req.params.id, {
        $pull: {
            friends: req.body.friendId
        }
    })
    .then(results => {
        res.json(results)
    })
})


module.exports = router