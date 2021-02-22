const router = require('express').Router();
const user = require('../controllers/usersController')

router.post('/login', user.login)
router.patch('/getUserById:id', user.updateUser)
router.get('/findUserById/:id', user.findUserById)
router.post('/signUp', user.createUser)

module.exports = router