/**
 * @swagger
 * /PostgreSQL/API/comments/add/{id}:
 *   post:
 *     summary: Add a comment to a post
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the post to which the comment will be added
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               commentBody:
 *                 type: string
 *                 description: The body of the comment
 *     responses:
 *       '201':
 *         description: Comment added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '201'
 *                 message:
 *                   type: string
 *                   example: 'Your comment added'
 *       '404':
 *         description: Post not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '404'
 *                 message:
 *                   type: string
 *                   example: 'Post not found'
 *       '500':
 *         description: Internal Server Error, failed to add a comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '500'
 *                 message:
 *                   type: string
 *                   example: 'Failed to add a comment'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */


/**
 * @swagger
 * /PostgreSQL/API/comments/all:
 *   get:
 *     summary: Get all comments
 *     tags:
 *       - Comments
 *     responses:
 *       '201':
 *         description: Comments retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '201'
 *                 message:
 *                   type: string
 *                   example: 'Comments retrieved successfully'
 *       '500':
 *         description: Internal Server Error, failed to retrieve comments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '500'
 *                 message:
 *                   type: string
 *                   example: 'Failed to retrieve comments'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */

/**
 * @swagger
 * /PostgreSQL/API/comments/single/{id}:
 *   get:
 *     summary: Get a single comment by ID
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to retrieve
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Comment retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '200'
 *                 message:
 *                   type: string
 *                   example: 'Comment retrieved successfully'
 *       '404':
 *         description: Comment not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '404'
 *                 message:
 *                   type: string
 *                   example: 'Comment not found'
 *       '500':
 *         description: Internal Server Error, failed to retrieve a comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '500'
 *                 message:
 *                   type: string
 *                   example: 'Failed to retrieve a comment'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */


/**
 * @swagger
 * /PostgreSQL/API/comments/delete/{id}:
 *   delete:
 *     summary: Delete a comment by ID
 *     tags:
 *       - Comments
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to delete
 *         schema:
 *           type: integer
 *     responses:
 *       '200':
 *         description: Comment deleted successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '200'
 *                 message:
 *                   type: string
 *                   example: 'Comment with this ID {id} deleted successfully'
 *       '404':
 *         description: Comment not found
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '404'
 *                 message:
 *                   type: string
 *                   example: 'Comment not found'
 *       '500':
 *         description: Internal Server Error, failed to delete a comment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '500'
 *                 message:
 *                   type: string
 *                   example: 'Failed to delete a comment'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */

