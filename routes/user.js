const express = require('express');
const router = express.Router();
const multer  = require('multer')
router.get('/user', async (req, res) =>{
    res.render('../views/partials/user');
})

var upload = multer({ dest: 'uploads/' })
 
router.post('/user', upload.single('avatar'), function (req, res, next) {
     
})
 
router.post('/photos/upload', upload.array('photos', 12), function (req, res, next) {
  // req.files is array of `photos` files
  // req.body will contain the text fields, if there were any
})
 
router.post('/user', async (req,res) =>{
    
})
var cpUpload = upload.fields([{ name: 'avatar', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])
router.post('/cool-profile', cpUpload, function (req, res, next) {
  // req.files is an object (String -> Array) where fieldname is the key, and the value is array of files
  //
  // e.g.
   req.files['avatar'][0]
   req.files['gallery'] [0]
  //
  // req.body will contain the text fields, if there were any
})
module.exports = router;