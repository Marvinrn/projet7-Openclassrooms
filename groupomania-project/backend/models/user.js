module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define("User", {
        userName: {
            type: DataTypes.STRING,
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
        },
        password: {
            type: DataTypes.STRING,
        }
    },
        {
            timestamps: false
        });
    return User;
};