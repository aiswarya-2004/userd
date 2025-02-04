const express = require('express');
const router = express.Router();
const { registerUser, loginUser, getUser } = require('../controllers/auth');
const authMiddleware = require('../middleware/auth');

// Public routes
router.post('/register', registerUser);
router.post('/login', loginUser);

// Protected route
router.get('/user', authMiddleware, getUser);

module.exports = router;