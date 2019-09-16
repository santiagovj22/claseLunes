const express = require('express');
const router = express.Router();

router.get('/products', async (req, res) =>{
    res.render('../views/partials/products');
})

module.exports = router;