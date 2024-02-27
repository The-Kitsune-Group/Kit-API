const db = require('../persistence');

module.exports = async (req, res) => {
	const bans = await db.getBans();
	res.send(bans);
};