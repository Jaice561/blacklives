const Blacklive = require('../models/blacklive');

module.exports = {
    create,
    index,
    delete: deleteOne,
    show,
    update
}

function create(req, res) {
    req.body.user = req.user._id
    Blacklive.create(req.body)
    .then(blacklive => {res.json(blacklive)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Blacklive.find({user: req.user._id})
    .then(blacklive => {res.json(blacklive)})
    .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
    Blacklive.findByIdAndDelete(req.params.id)
    .then(blacklive => {res.json(blacklive)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
   Blacklive.findById(req.params.id)
    .then(blacklive => {res.json(blacklive)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Blacklive.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(blacklive => {res.json(blacklive)})
    .catch(err => {res.json(err)})
}