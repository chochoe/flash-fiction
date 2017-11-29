module.exports = function(sequelize, DataTypes) {
    var stories = sequelize.define("stories", {
        title: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        id: {
            type: DataTypes.INTEGER,
            autIncrement: true,
            primaryKey: true
        },
        snippet: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        Author: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        Genre: {
            type: DataTypes.STRING,
            allowNull: false
        },
        upVotes: {
            type: DataTypes.STRING,
            default: 0
        },
        downVotes: {
            type: DataTypes.INTEGER,
            default: 0
        }
    });

    return Authors;
};