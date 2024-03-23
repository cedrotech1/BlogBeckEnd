'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comments extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Comments.belongsTo(models.Posts, {
				foreignKey: "postId",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "posts"
			});
      Comments.belongsTo(models.Users, {
				foreignKey: "userId",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "CommentedBy"
			});
      Comments.hasMany(models.Replies, {
        foreignKey: 'commentId',
        });
    }
  }
  Comments.init({
    commentBody: DataTypes.TEXT('long'),
    postId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'Comments',
  });
  return Comments;
};