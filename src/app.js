const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const db = require('./persistence');
const app = express();
const port = 8022;

// Require route scripts
const getBans = require('./routes/getBans.js');
const addBan = require('./routes/addBan.js');
const updateBan = require('./routes/updateBan.js');
const deleteBan = require('./routes/deleteBan.js');
const getSettings = require('./routes/getSettings.js');
const addSetting = require('./routes/addSetting.js');
const updateSetting = require('./routes/updateSetting.js');
const deleteSetting = require('./routes/deleteSetting.js');

// Enable middleware
app.use(bodyParser.json());
app.use(cors());
app.use(morgan('dev'));

// Define all routes
app.get('/bans', getBans);
app.post('/bans/:user', addBan);
app.put('/bans/:user', updateBan);
app.delete('/bans/:user', deleteBan);
app.get('/settings/:guild', getSettings);
app.post('/settings/:guild', addSetting);
app.put('/settings/:guild', updateSetting);
app.delete('/settings/:guild', deleteSetting);

// droop the snoot
app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});

// Shutdown sequence
const gracefulShutdown = () => {
	db.teardown()
		.catch(() => { return; })
		.then(() => process.exit());
};

// Catch most common shutdown signals
process.on('SIGINT', gracefulShutdown);
process.on('SIGTERM', gracefulShutdown);
process.on('SIGUSR2', gracefulShutdown);