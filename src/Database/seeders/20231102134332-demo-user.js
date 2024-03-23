'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Users', [
      {
        id:1,
      firstName: 'Alexis',
      lastName: 'HAKIZIMANA',
      profile: 'Alexis.jgp',
      email: 'test@alexis.com',
      password: '123',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 2,
      firstName: 'Steven',
      lastName: 'MUKAMA',
      profile: 'mukama.jgp',
      email: 'test@mukama.com',
      password: '345',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      id: 3,
      firstName: 'Viateur',
      lastName: 'MANIEAGENA',
      profile: 'viateur.jgp',
      email: 'test@viateur.com',
      password: '789',
      createdAt: new Date(),
      updatedAt: new Date()
    },
  ], 
  {}
  );
  await queryInterface.bulkInsert('Posts', [
    {
      id:1,
    postTitle: 'Coffee',
    postImage: 'coffee.jpg',
    postContent: 'Nyamara nibyo',
    postedBy: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  {
    id:2,
    postTitle: 'Codding',
    postImage: 'code.jpg',
    postContent: 'Codding is amazing',
    postedBy: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },
  
], 
{}
);
await queryInterface.bulkInsert('Comments', [
  {
    id:1,
  commentBody: 'Great training',
  postId: 2,
  CommentedBy: 3,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id:2,
  commentBody: 'Coffee is mine',
  postId: 1,
  CommentedBy: 3,
  createdAt: new Date(),
  updatedAt: new Date()
},

], 
{}
);
await queryInterface.bulkInsert('Replies', [
  {
    id:1,
  replyMessage: 'Thank you so much',
  commentId: 1,
  repliedBy: 2,
  createdAt: new Date(),
  updatedAt: new Date()
},
{
  id:2,
  replyMessage: 'Add more efforts',
  commentId: 2,
  repliedBy: 3,
  createdAt: new Date(),
  updatedAt: new Date()
},

], 
{}
);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
