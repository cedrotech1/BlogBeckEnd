/**
 * @swagger
 * /PostgreSQL/API/replies/add/{id}:
 *   post:
 *     summary: Add a reply to a comment
 *     tags:
 *       - Replies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the comment to which the reply is added
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               replyMessage:
 *                 type: string
 *                 description: The message of the reply
 *     responses:
 *       '201':
 *         description: Reply added successfully
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
 *                   example: 'Your reply added'
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
 *         description: Internal Server Error, failed to add a reply
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
 *                   example: 'Failed to add a reply'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */


/**
 * @swagger
 * /PostgreSQL/API/replies/all:
 *   get:
 *     summary: Get all replies
 *     tags:
 *       - Replies
 *     responses:
 *       '200':
 *         description: Replies retrieved successfully
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
 *                   example: 'Replies retrieved successfully'
 *       '500':
 *         description: Internal Server Error, failed to retrieve replies
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
 *                   example: 'Failed to retrieve replies'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */


/**
 * @swagger
 * /PostgreSQL/API/replies/single/{id}:
 *   get:
 *     summary: Get a single reply by ID
 *     tags:
 *       - Replies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the reply to retrieve
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Reply retrieved successfully
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
 *                   example: 'Reply retrieved successfully'
 *       '404':
 *         description: Reply not found
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
 *                   example: 'Reply not found'
 *       '500':
 *         description: Internal Server Error, failed to retrieve a reply
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
 *                   example: 'Failed to retrieve a reply'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */

/**
 * @swagger
 * /PostgreSQL/API/replies/delete/{id}:
 *   delete:
 *     summary: Delete a reply by ID
 *     tags:
 *       - Replies
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: ID of the reply to delete
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Reply deleted successfully
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
 *                   example: 'Reply with this ID {id} deleted successfully'
 *       '404':
 *         description: Reply not found
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
 *                   example: 'Reply not found'
 *       '500':
 *         description: Internal Server Error, failed to delete a reply
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
 *                   example: 'Failed to delete a reply'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */

