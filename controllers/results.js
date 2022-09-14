// Import Packages
const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('results')
})
// Create POST controller

// Export module
module.exports = router
