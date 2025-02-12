const express = require('express')
const { uploadNewJersey, getAllJerseys } = require('../controllers/adminControllers')
const router = express.Router()
const upload = require('../middleware/multer')

router.post('/newJersey',upload.array('images',5),uploadNewJersey)
router.get('/getAllJerseys',getAllJerseys)

module.exports = router