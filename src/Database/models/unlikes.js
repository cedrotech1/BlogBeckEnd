'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class unLikes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      unLikes.belongsTo(models.Posts, {
        foreignKey: "postId",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        as: "unLikedPost"
      });
      unLikes.belongsTo(models.Users, {
				foreignKey: "userId",
				onDelete: "CASCADE",
        onUpdate: "CASCADE",
				as: "unLikedBy"
			});
    }
  }
  unLikes.init(
    {
      postId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "unLikes",
    }
  );
  return unLikes;
};