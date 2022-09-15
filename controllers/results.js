// Import Packages
const express = require('express')
const router = express.Router()

const allResults = [
  {
    title: 'JS tutorials',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'cats',
    description: 'The best JavaScript tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: ''
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  },
  {
    title: 'Fish',
    description: 'The best fish tutorials in the galaxy!',
    url: 'https://www.w3schools.com',
    links: [
      {
        title: 'JS for Beginners',
        url: 'https://www.w3schools.com/js'
      },
      {
        title: 'JS for the Web',
        url: 'https://www.w3schools.com/js'
      }
    ]
  }
]

// router.get('/', (req, res) => {
//   res.render('results', { data: data })
// })
// Function that selects only items with title related to Search
const titleIncludes = (allResults, text) =>
  allResults.filter(result =>
    result.title.toLowerCase().includes(text.toLowerCase())
  )

// Create POST controller
router.post('/', (req, res) => {
  let searchValue = req.body.search

  res.render('results', {
    resultsList: titleIncludes(allResults, searchValue)
  })
})

// Export module
module.exports = router
