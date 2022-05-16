//installation du package bcrypt pour hasher les mdp
const bcrypt = require('bcrypt');
//installation du package jsonwebtoken pour creer des tokens et de les vérifier
const jwt = require('jsonwebtoken');
const db = require("../models");
// const models = require('../models')
const User = db.users;



exports.signup = (req, res,) => {

    console.log(req.body);
    bcrypt.hash(req.body.password, 10)
        .then(hash => {
            User.create({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: hash
            })
                .then(() => res.status(201).json({ message: 'Utilisateur créé' }))
                .catch(error => res.status(400).json({ error }));
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
                        userId: user.id,
                        token: jwt.sign(
                            { userId: user.id },
                            'RANDOM_TOKEN_SECRET',
                            { expiresIn: '24h' }
                        )
                    });
                })
                .catch(error => res.status(500).json({ error }));
        })
        .catch(error => res.status(500).json({ error }));
};