import express from 'express';

const router = express.Router();

router.get('/state', (req, res) => {
	res.json({
		message: 'api works'
	});
});

export default router;