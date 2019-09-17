const express = require('express');
const router = express.Router();

router.get('/login', async (req, res) =>{
    res.render('../views/partials/login');
})

module.exports = router;