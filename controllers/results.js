// Import Packages
const express = require('express')
const router = express.Router()
const Results = require('../models/results')

// router.get('/', (req, res) => {
//   res.render('results', { data: data })
// })
// Function that selects only items with title related to Search
// const titleIncludes = (allResults, text) =>
//   allResults.filter(result =>
//     result.title.toLowerCase().includes(text.toLowerCase())
//   )

// Create POST controller
router.post('/', async (req, res) => {
  let searchValue = req.body.search
  let results = await Results.find({
    title: searchValue
  })

  res.render('results', {
    resultsList: results
  })
})

// Export module
module.exports = router
