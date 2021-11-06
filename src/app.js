import express from 'express';
import path from 'path';
const __dirname = path.resolve(path.dirname(''));
import * as qfil from './qtools/qfil.js';
import apiRouter from './routes/api.js';

const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, './public/views'));

app.use('/api', apiRouter);

const staticDirectory = path.join(__dirname, './public');
app.use(express.static(staticDirectory));

qfil.getJsonDataFromFile('siteData.json', (siteData) => {

	const port = process.env.PORT || siteData.port;

	app.get('/info', (req, res) => {
		res.render('info',
			{
				...siteData,
				message: "Welcome to info page."
			});
	});
	app.get('/settings', (req, res) => {
		res.render('settings',
			{
				...siteData,
				message: "Welcome to settings page."
			});
	});
	app.get('/', (req, res) => {
		res.render('index',
			{
				...siteData,
				message: 'Welcome to the home page.',
			});
	});

	// API
	app.get('/state', (req, res) => {
		res.json({
			test: "111"
		});
	});

	app.listen(port, () => {
		console.log(`Listening on port http://localhost:${port}`);
	});
});