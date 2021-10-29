import express from 'express';
import * as qfil from '../qtools/qfil.js';

const router = express.Router();
router.use(express.json());

router.patch('/changeState', (req, res) => {
	const { showImages } = req.body;
	console.log(req.body);
	qfil.getJsonDataFromFile('siteData.json', (siteData) => {
		siteData.showImages = showImages;
		qfil.saveJsonDataToFile('siteData.json', siteData, () => {
			res.status(200);
		});
	});
});

export default router;