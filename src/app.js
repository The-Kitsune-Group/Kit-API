const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
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
app.post('/bans', addBan);
app.put('/bans/:id', updateBan);
app.delete('/bans/:id', deleteBan);
app.get('/settings/:id', getSettings);
app.post('/settings/:id', addSetting);
app.put('/settings/:id', updateSetting);
app.delete('/settings/:id', deleteSetting);


app.listen(port, () => {
	console.log(`API listening on port ${port}`);
});