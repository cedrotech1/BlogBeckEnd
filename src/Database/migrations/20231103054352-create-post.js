'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Posts', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      postTitle: {
        type: Sequelize.STRING
      },
      postImage: {
        type: Sequelize.STRING
      },
      postContent: {
        type: Sequelize.TEXT('long')
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
           model: 'Users',
          key: 'id', 
          as: 'userId'
        }
      },
      
      views: {
        type: Sequelize.INTEGER,
        defaultValue: 0,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Posts');
  }
};