const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
  res.json({ success: true, message: 'Reactions endpoint - coming soon', reactions: [] });
});

module.exports = router;
