'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Posts extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Posts.belongsTo(models.Users, {
				foreignKey: "userId",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "postedBy"
			});
      Posts.hasMany(models.Comments, {
        foreignKey: 'postId',
        
        });
      Posts.hasMany(models.Likes, {
        foreignKey: 'postId',
        });
        Posts.hasMany(models.unLikes, {
          foreignKey: 'postId',
          });
    }
  }
  Posts.init({
    postTitle: DataTypes.STRING,
    postImage: DataTypes.STRING,
    postContent: DataTypes.TEXT('long'),
    userId: DataTypes.INTEGER,
    views: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Posts',
  });
  return Posts;
};