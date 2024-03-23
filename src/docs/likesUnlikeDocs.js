/**
 * @swagger
 * /PostgreSQL/API/posts/like/{postId}:
 *   post:
 *     summary: Like a post
 *     tags:
 *       - Likes
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         description: ID of the post to like
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Like added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Your like added'
 *       '500':
 *         description: Internal Server Error, failed to add like
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
 *                   example: 'Failed to add'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */


/**
 * @swagger
 * /PostgreSQL/API/posts/dislike/{postId}:
 *   post:
 *     summary: Dislike a post
 *     tags:
 *       - Likes
 *     parameters:
 *       - in: path
 *         name: postId
 *         required: true
 *         description: ID of the post to dislike
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: Dislike added successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: 'Your dislike added'
 *       '500':
 *         description: Internal Server Error, failed to add dislike
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
 *                   example: 'Failed to add dislike'
 *                 error:
 *                   type: string
 *                   example: 'Error message details'
 */


