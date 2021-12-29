import { createConnection } from 'typeorm';
import express from 'express';

import { Organisation } from './entities/Organisation';
import { organisationRouter } from './routes/create_organisation';
import { User } from './entities/User';


const app = express();

const main = async () => {
	try {
		await createConnection({
			type: 'postgres',
			host: 'localhost',
			port: 5432,
			username: 'postgres',
			password: "passcode",
			database: 'rakdb',
			entities: [Organisation,User],
			synchronize: true,
		});
		console.log('Connected to Postgres');

		app.use(express.json());

		const cors = require('cors');

		app.use(cors({
			origin: '*'
		}));

		app.use(organisationRouter);
		

		app.listen(8080, () => {
			console.log('Now running on port 8080');
		});
	} catch (error) {
		console.error(error);
		throw new Error('Unable to connect to db');
	}
};

main();