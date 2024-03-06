const waitPort = require('wait-port');
// const fs = require('fs');
const { MongoClient } = require('mongodb');

const {
	MONGO_INITDB_ROOT_USERNAME: USER,
	MONGO_INITDB_ROOT_PASSWORD: PASSWORD,
} = process.env;

let client;

async function init() {
	const user = USER;
	const password = PASSWORD;
	const port = 5432;

	await waitPort({
		host: 'localhost',
		port: port,
		timeout: 10000,
		waitForDns: true,
	});

	client = new MongoClient(`mongodb://${user}:${password}@mongodb:${port}/kit`);

	return client.connect().then(async () => {
		// Run the SQL instruction to create the table if it does not exist
		// await client.query('CREATE TABLE IF NOT EXISTS todo_items (id varchar(36), name varchar(255), completed boolean)');
		console.log('Connected to db and created table todo_items if it did not exist');
	}).catch(err => {
		console.error('Unable to connect to the database:', err);
	});
}

// End the connection
async function teardown() {
	return client.close().then(() => {
		console.log('Client ended');
	}).catch(err => {
		console.error('Unable to end client:', err);
	});
}

async function addBan(user, timestamp) {
	return user, timestamp;
}

// Get bans
async function getBans() {
	return 69;
	/* client.query('SELECT * FROM todo_items').then(res => {
		return res.rows.map(row => ({
			id: row.id,
			name: row.name,
			completed: row.completed
		}));
	}).catch(err => {
		console.error('Unable to get items:', err);
	}); */
}

async function deleteBan(user) {
	// TODO remove userban
	return user;
}

async function getSettings(guild) {
	// TODO get guildsettings
	return guild;
}

async function updateSetting(guild, settings) {
	return guild, settings;
}

module.exports = {
	init,
	teardown,
	addBan,
	getBans,
	deleteBan,
	getSettings,
	updateSetting,
};