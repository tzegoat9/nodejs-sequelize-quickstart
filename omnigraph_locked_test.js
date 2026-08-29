
const { sequelize, Settings } = require('./models');

async function updateSettingsWithLock() {
    return Settings.transaction(async (t) => {
        await Settings.update({ value: 'test' }, { transaction: t });
    });
}
module.exports = { updateSettingsWithLock };
