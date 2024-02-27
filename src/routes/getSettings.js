const db = require('../persistence');

module.exports = async (req, res) => {
	const settings = await db.getSettings(req.params.guild);
	res.send(settings);
};