const Patchnote = require('../models/PatchNote')
const User = require('../models/user')


module.exports = {
    create,
    index,
    show,
    createComment,
    delete2: deleteComment,
    update,
    delete: deletePatch,
    update2
}

async function create(req,res){
    const patch = await Patchnote.create(req.body);
    res.status(201).json(patch)
}

async function index(req,res) {
    const patches = await Patchnote.find({});
    res.json(patches)
}

async function show(req,res){
    const patch = await Patchnote.findById(req.params.id)
        res.json(patch)
}

async function createComment(req,res){
    Patchnote.findById(req.params.id, function(err, patch) {
        patch.comments.push(req.body);
        patch.save(function(err) {
            res.json(patch)
        })
    })
}

async function deleteComment(req, res){
    const patch = await Patchnote.findById(req.params.id)
    const comment = await patch.comments.remove(req.params.id2)
    patch.save(function(err) {
        res.status(200).json(patch)
    })
}

async function update(req, res){
    const patch = await Patchnote.findByIdAndUpdate(req.params.id, req.body, {new: true})
    res.status(200).json(patch)
}

async function deletePatch(req, res){
    const deletedPatch = await Patchnote.findByIdAndRemove(req.params.id);
    res.status(200).json(deletedPatch)
}

async function update2(req, res){
    const patch = await Patchnote.findById(req.params.id)
    const oldComment = patch.comments.find((comment) => {
        return req.params.id2 == comment._id
    })
    const index = patch.comments.indexOf(oldComment)
    const updatedComment = patch.comments.create(req.body)
    console.log(updatedComment) 
    patch.comments.splice(index, 1, updatedComment)
    patch.save(function(err) {
        res.status(200).json(patch)
    })
}