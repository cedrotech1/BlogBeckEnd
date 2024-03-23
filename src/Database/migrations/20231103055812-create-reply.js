'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Replies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      replyMessage: {
        type: Sequelize.TEXT('long')
      },
      commentId: {
        type: Sequelize.INTEGER,
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
        references: {
           model: 'Comments',
          key: 'id', 
          as: 'commentId'
        }
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
    await queryInterface.dropTable('Replies');
  }
};