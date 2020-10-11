const express = require('express');
const router = express.Router();
const api = require('./api')

router.use('/api', api)

router.get('/', (req, res) =>{
  res.json('index');
});

module.exports = router; 
