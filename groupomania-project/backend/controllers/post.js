const Post = require('../models/post')
const fs = require('fs')

exports.createPost = (req, res) => {
    const postObject = JSON.parse(req.body.post)
    const post = new Post({
        ...postObject,
        imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`,
        usersLiked: [],
        usersDisliked: []
    })
    post.save()
        .then(() => res.status(201).json({ message: 'Objet enregistré' }))
        .catch(error => res.status(400).json({ error }));
}

exports.updatePost = (req, res) => {
    const postObject = req.file ?
        {
            ...JSON.parse(req.body.post),
            imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
        } : { ...req.body }
    Post.updateOne({ _id: req.params.id }, { ...postObject, _id: req.params.id })
        .then(() => res.status(200).json({ message: 'Objet modifié !' }))
        .catch(error => res.status(400).json({ error }));
}

exports.deletePost = (req, res) => {
    Post.findOne({ _id: req.params.id })
        .then(post => {
            if (!post) {
                return res.status(404).json({ message: 'Objet non trouvé' })
            }
            if (post.userId !== req.auth.userId) {
                return res.status(401).json({ message: 'Requête non autorisée' })
            }
            const filename = post.imageUrl.split('/images/')[1];
            // avec fs.unlink, on supprime le fichier
            fs.unlink(`images/${filename}`, () => {
                //suppression de l'objet dans la base de donnée une fois que le fichier a été supprimé
                Post.deleteOne({ _id: req.params.id })
                    .then(() => res.status(200).json({ message: 'Objet supprimé !' }))
                    .catch(error => res.status(400).json({ error }));
            })
        })
        .catch(error => res.status(500).json({ error }));
}

exports.getPost = (req, res,) => {
    Post.find()
        .then(sauces => res.status(200).json(sauces))
        .catch(error => res.status(400).json({ error }));
};

exports.likePost = (req, res) => {
    const like = req.body.like

    Post.findOne({ _id: req.params.id })
        .then((post) => {
            if (like == 1 && !post.usersLiked.includes(res.locals.userId)) {
                Post.updateOne(
                    { _id: req.params.id },
                    {
                        $push: { usersLiked: req.body.userId },
                        $inc: { likes: +1 }
                    }
                )
                    .then(() => res.status(200).json({ message: 'Sauce liked' }))
                    .catch((error) => res.status(400).json({ error }));
            }
        })
        .catch((error) => res.status(404).json({ error }))

    if (like == 0) {
        Post.findOne({ _id: req.params.id })
            .then((sauce) => {
                if (sauce.usersLiked.includes(req.body.userId)) {
                    Post.updateOne({ _id: req.params.id },
                        {
                            $pull: { usersLiked: req.body.userId },
                            $inc: { likes: -1 }
                        })
                        .then(() => res.status(200).json({ message: 'Like annulé' }))
                        .catch((error) => res.status(400).json({ error }))
                }
            })
            .catch((error) => res.status(404).json({ error }))
    }
}