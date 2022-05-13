module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        prenom: {
            type: DataTypes.STRING,
        },
        nom: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        }
    });
    return User;
};