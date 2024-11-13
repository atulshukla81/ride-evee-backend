// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { authenticate } = require('../middleware/authMiddleware');

// Define routes for CRUD operations with appropriate middleware
router.post('/users', userController.createUser);
router.get('/users/:id', authenticate, userController.getUser);
router.put('/users/:id', authenticate, userController.updateUser);
router.delete('/users/:id', authenticate, userController.deleteUser);

module.exports = router;
