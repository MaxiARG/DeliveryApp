const usersController = require('../Controllers/userController');

module.exports = (app) => {
    app.post('/api/users/create', usersController.register)
    app.post('/api/users/login', usersController.login)
}