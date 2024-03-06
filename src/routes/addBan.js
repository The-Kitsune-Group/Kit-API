const db = require('../persistence');

module.exports = async (req, res) => {
	await db.addBan(req.params.user, req.params.timestamp);
	res.status(501).send('501 Not Implemented');
};