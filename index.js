const assert = require('assert')
    , moment = require('moment')
    , downloadCounts = require('npm-download-counts')

    , pkg    = 'levelup'
    , start  = moment().subtract('months', 1).toDate() // start date for lookup
    , end    = new Date()                              // end date for lookup

downloadCounts(
    pkg
  , start
  , end
  , function (err, data) {
      // `data` is an array of objects with `day` and `count` properties
      // each element of the array represents a day in your date range
      data.forEach(function (d, i) {
        console.log('On %s, %s was downloaded ~%d times', d.day, pkg, d.count)
      })
    }
)