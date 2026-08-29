
const db = require('db');
function readUsers() {
    return db.query('SELECT * FROM users');
}
