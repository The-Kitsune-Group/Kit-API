module.exports = async (req, res) => {
	res.status(405).send('405 Method Not Allowed');
};