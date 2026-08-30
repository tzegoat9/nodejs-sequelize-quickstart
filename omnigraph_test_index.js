
// Node Service Reading from Global Users (ts=1788100252)
const GlobalUser = require('./models/GlobalUser');

function fetchActiveUsers() {
    return GlobalUser.findAll({ where: { status: 'active' } });
}
