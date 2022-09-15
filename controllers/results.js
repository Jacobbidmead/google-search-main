// Import Packages
const express = require('express')
const router = express.Router()

const data = [
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
    title: 'fish',
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
  }
]

// router.get('/', (req, res) => {
//   res.render('results', { data: data })
// })
// Function that selects only items with title related to Search
const titleIncludes = (data, text) =>
  data.filter(element =>
    element.title.toLowerCase().includes(text.toLowerCase())
  )

// Create POST controller
router.post('/', (req, res) => {
  let searchValue = req.body.search

  res.render('results', {
    data: titleIncludes(data, searchValue)
  })
})

// Export module
module.exports = router
