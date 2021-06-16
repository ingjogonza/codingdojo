const Author = require('../models/author.model');

module.exports.findAllAuthors = (req, res) => {
    Author.find()
    .then(allAuthors => res.json({authors: allAuthors}))
    .catch(err => res.json({authors: null}));
}

module.exports.createNewAuthor = (req, res) => {
    Author.create(req.body)
    .then(newAuthor => res.send({author: newAuthor}))
    .catch(err => res.send({errors: err}));
}

module.exports.getAuthorByID = (req, res) => {
    Author.findById(req.params.id)
    .then(singleAuthor => res.json({authorData: singleAuthor}))
    .catch(error => res.json({authorData: null}));
}

module.exports.updateExistingAuthor = (req, res) => {
    Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updateAuthor => res.json({ author: updateAuthor }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};

module.exports.deleteExistingProduct = (req, res) => {
    Author.findByIdAndDelete({ _id: req.params.id })
        .then(deleteAuthor => res.json({ authorDeleted: deleteAuthor }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
};
