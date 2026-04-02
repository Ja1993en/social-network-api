const { connect, connection } = require('mongoose');

connect('mongodb://localhost:27017/social-networkdb')


module.exports = connection
