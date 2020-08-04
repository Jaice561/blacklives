const Comment = require('../models/comment');

module.exports = {
    create,
    index,
    delete: deleteOne,
    show,
    update
}

function create(req, res) {
    Comment.create(req.body)
    .then(comment => {res.json(comment)})
    .catch(err => {res.json(err)})
}

function index(req, res) {
    Comment.find({})
    .then(comment => {res.json(comment)})
    .catch(err => {res.json(err)})
}

function deleteOne(req, res) {
    Comment.findByIdAndDelete(req.params.id)
    .then(comment => {res.json(comment)})
    .catch(err => {res.json(err)})
}

function show(req, res) {
   Comment.findById(req.params.id)
    .then(comment => {res.json(comment)})
    .catch(err => {res.json(err)})
}

function update(req, res) {
    Comment.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then(comment => {res.json(comment)})
    .catch(err => {res.json(err)})
}