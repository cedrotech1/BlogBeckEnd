'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Replies extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Replies.belongsTo(models.Users, {
				foreignKey: "userId",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "repliedBy"
			});
      Replies.belongsTo(models.Comments, {
				foreignKey: "commentId",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "comment"
			});
    }
  }
  Replies.init({
    replyMessage: DataTypes.TEXT('long'),
    commentId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
  },

   {
    sequelize,
    modelName: 'Replies',
  });
  return Replies;
};