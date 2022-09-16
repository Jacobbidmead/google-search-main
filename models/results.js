const mongoose = require('mongoose')

// Create the results moodel
module.exports = mongoose.model('search-results', {
  title: {
    type: String,
    required: true
  },
  description: String,
  url: String,
  links: [
    {
      title: String,
      url: String
    }
  ]
})
