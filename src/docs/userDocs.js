/**
 * @swagger
 * /PostgreSQL/API/users/signUp:
 *   post:
 *     summary: Create a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: First name of the user
 *               lastName:
 *                 type: string
 *                 description: Last name of the user
 *               email:
 *                 type: string
 *                 format: email
 *                 description: Email of the user
 *               password:
 *                 type: string
 *                 format: password
 *                 description: Password of the user (at least 8 characters, containing a mix of letters and numbers)
 *               profile:
 *                 type: string
 *                 format: binary
 *                 description: The profile picture of the user (optional)
 *     responses:
 *       '200':
 *         description: User registered successfully
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
 *                   example: 'User Registered'
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: John
 *                     lastName:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                     profile:
 *                       type: string
 *                       example: http://example.com/profile.jpg
 *       '400':
 *         description: Bad request
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '400'
 *                 message:
 *                   type: string
 *                   example: 'Invalid email format'
 *       '500':
 *         description: Server error
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
 *                   example: 'Failed to proceed registration'
 */


/**
 * @swagger
 * /PostgreSQL/API/users/login:
 *   post:
 *     summary: Login to the system
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *                 format: email
 *               password:
 *                 type: string
 *                 format: password
 *     responses:
 *       '200':
 *         description: User login successful
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
 *                   example: 'User Login Success'
 *                 users:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: John
 *                     lastName:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                 token:
 *                   type: string
 *                   example: 'eyJhbGciOiJIUzI1NiIsIn...'
 *       '404':
 *         description: User not found or incorrect password
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
 *                   example: 'User Not Found'
 *       '500':
 *         description: Login failed
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
 *                   example: 'Login Failed'
 */


/**
 * @swagger
 * /PostgreSQL/API/users/get/users:
 *   get:
 *     summary: Get all users
 *     tags: [Users]
 *     responses:
 *       '200':
 *         description: Users retrieved successfully
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
 *                   example: 'Users retrieved successfully'
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       id:
 *                         type: integer
 *                         example: 1
 *                       firstName:
 *                         type: string
 *                         example: John
 *                       lastName:
 *                         type: string
 *                         example: Doe
 *                       email:
 *                         type: string
 *                         example: john.doe@example.com
 *                       profile:
 *                         type: string
 *                         example: http://example.com/profile.jpg
 *       '500':
 *         description: Internal server error
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
 *                   example: 'Internal Server Error'
 */


/**
 * @swagger
 * /PostgreSQL/API/users/get/single/{id}:
 *   get:
 *     summary: Get a single user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to retrieve
 *     responses:
 *       '200':
 *         description: Single user retrieved successfully
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
 *                   example: 'Single user retrieved successfully'
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: John
 *                     lastName:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                     profile:
 *                       type: string
 *                       example: http://example.com/profile.jpg
 *       '404':
 *         description: User not found
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
 *                   example: 'User not found'
 *       '500':
 *         description: Internal server error
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
 *                   example: 'Internal Server Error'
 */


/**
 * @swagger
 * /PostgreSQL/API/users/update/{id}:
 *   put:
 *     summary: Update a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to update
 *     requestBody:
 *       required: true
 *       content:
 *         multipart/form-data:
 *           schema:
 *             type: object
 *             properties:
 *               firstName:
 *                 type: string
 *               lastName:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               profile:
 *                 type: string
 *                 format: binary
 *               role:
 *                 type: string
 *     responses:
 *       '200':
 *         description: User update successful
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
 *                   example: 'User Update succeed'
 *       '400':
 *         description: Bad request, check the request parameters
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 status:
 *                   type: string
 *                   example: '400'
 *                 message:
 *                   type: string
 *                   example: 'Email Used In Our Database'
 *       '404':
 *         description: User not found
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
 *                   example: 'User not found'
 *       '500':
 *         description: Failed to update user data
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
 *                   example: 'Failed to Update User data'
 */


/**
 * @swagger
 * /PostgreSQL/API/users/delete/{id}:
 *   delete:
 *     summary: Delete a user by ID
 *     tags: [Users]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID of the user to delete
 *     responses:
 *       '200':
 *         description: User deleted successfully
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
 *                   example: 'User with User ID: 1 deleted successfully'
 *                 data:
 *                   type: object
 *                   properties:
 *                     id:
 *                       type: integer
 *                       example: 1
 *                     firstName:
 *                       type: string
 *                       example: John
 *                     lastName:
 *                       type: string
 *                       example: Doe
 *                     email:
 *                       type: string
 *                       example: john.doe@example.com
 *                     profile:
 *                       type: string
 *                       example: http://example.com/profile.jpg
 *       '404':
 *         description: User not found
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
 *                   example: 'User not found'
 *       '500':
 *         description: Error occurred
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
 *                   example: 'Error occurred'
 */
