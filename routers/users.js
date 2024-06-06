const express = require('express');
const router = express.Router();
const usersController = require('../controllers/users');

router.get('/users', usersController.getAllUsers);
router.post('/users', usersController.createUser);
router.get('/users/:id', usersController.getOneUser);
router.delete('/users/:id', usersController.deleteUser);

module.exports = router;
