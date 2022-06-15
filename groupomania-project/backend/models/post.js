module.exports = (sequelize, DataTypes) => {
    const Post = sequelize.define("Post", {
        userId: {
            type: DataTypes.STRING,
        },
        title: {
            type: DataTypes.STRING,
            unique: true,
        },
        content: {
            type: DataTypes.STRING,
        },
        likes: {
            type: DataTypes.NUMBER,
            defaultValue: 0
        },
        dislikes: {
            type: DataTypes.NUMBER,
            defaultValue: 0
        },
    },
        {
            timestamps: false
        });
    return Post;
};