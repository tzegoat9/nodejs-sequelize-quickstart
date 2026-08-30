
// Node Service Reading from Global Users (ts=1788097805)
const db = require('db');

function fetchActiveUsers() {
    return db.query("SELECT * FROM global_users WHERE status = 'active'");
}
