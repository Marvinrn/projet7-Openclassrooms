//installation du package bcrypt pour hasher les mdp
const bcrypt = require('bcrypt');
//installation du package jsonwebtoken pour creer des tokens et de les vérifier
const jwt = require('jsonwebtoken');

const User = require('../models/user')


require('dotenv').config();


exports.signup = (req, res,) => {

    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            const user = new User({
                email: req.body.email,
                password: hash,
            })
            user.save()
                .then(response => {
                    if (response) {
                        res.status(200).json({
                            user: {
                                email: user.email,
                                isAdmin: user.isAdmin
                            },
                            userId: user.id,
                            token: jwt.sign(
                                { userId: user.id },
                                process.env.MY_TOKEN,
                                { expiresIn: '24h' }
                            )
                        })
                    }

                })
                .catch(error => res.status(401).json({ error }))
        })
        .catch(error => res.status(500).json({ error }));
};


exports.login = (req, res,) => {
    //on récupère le user dans la base correspondant au mail entré
    User.findOne({ where: { email: req.body.email } })
        .then(user => {
            //renvoie une erreur si le user n'est pas bon
            if (!user) {
                console.log(req.body.email);
                return res.status(401).json({ message: 'Utilisateur non trouvé' })
            }
            // si l'utilisateur est trouvé, on va comparer les mdp hashés
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    // si comparaison n'est pas bonne, on renvoi une erreur
                    if (!valid) {
                        console.log(req.body);
                        return res.status(401).json({ message: 'Mot de passe invalide' })
                    }
                    // si comparaison est bonne, on renvoi son userId et un token d'authentification
                    res.status(200).json({
                        user: {
                            email: user.email,
                            isAdmin: user.isAdmin
                        },
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            process.env.MY_TOKEN,
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};