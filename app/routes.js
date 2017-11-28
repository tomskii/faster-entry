var express = require('express')
var router = express.Router()

// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

router.get('/checkbox', function (req, res) {
  var cheese = req.session.data['like-cheese']

  if (cheese == 'No') {
    res.redirect('/check-answers');
  }
  else {
    res.render('checkbox');
  }
})

  router.get('/passport-nationality', function (req, res) {
    //var passportnationality = req.query.passportnationality
    var nationality = req.session.data['british-citizen']
  if (nationality == 'No') {
     res.redirect('/faster-entry/apply/ineligible')
   } else {
     res.render('faster-entry/apply/choice')
     }
  })

  router.get('/convictions', function (req, res) {
    var convictions = req.session.data['convictions']
  if (convictions == 'No') {
     res.redirect('/faster-entry/apply/restrictions')
   } else {
     res.render('faster-entry/apply/convictions-more-than-one')
     }
  })

  router.get('/convictions-more', function (req, res) {
    var convictionsmore = req.session.data['convictionsmore']
  if (convictionsmore == 'No') {
     res.redirect('/faster-entry/apply/convictions-ten-years')
   } else {
     res.render('faster-entry/apply/ineligible-convictions')
     }
  })

  router.get('/convictions-ten', function (req, res) {
    var convictionsten = req.session.data['convictionsten']
  if (convictionsten == 'No') {
     res.redirect('/faster-entry/apply/convictions-warning')
   } else {
     res.render('faster-entry/apply/ineligible-convictions')
     }
  })

  router.get('/restrictions', function (req, res) {
    var restrictions = req.session.data['restrictions']
  if (restrictions == 'No') {
     res.redirect('/faster-entry/apply/penalties')
   } else {
     res.render('faster-entry/apply/ineligible-restrictions')
     }
  })

  router.get('/penalties', function (req, res) {
    var penalties = req.session.data['penalties']
  if (penalties == 'No') {
     res.redirect('/faster-entry/apply/passport-number')
   } else {
     res.render('faster-entry/apply/ineligible-restrictions')
     }
  })

  router.get('/passport-nationality_v2', function (req, res) {
    //var passportnationality = req.query.passportnationality
    var nationality = req.session.data['british-citizen']
  if (nationality == 'No') {
     res.redirect('/faster-entry/apply/ineligible')
   } else {
     res.render('faster-entry/apply/convictions')
     }
  })


  // global-entry journey

  router.get('/passport-nationality_ge', function (req, res) {
    //var passportnationality = req.query.passportnationality
    var nationality = req.session.data['british-citizen']
  if (nationality == 'No') {
     res.redirect('/faster-entry/global-entry/ineligible')
   } else {
     res.render('faster-entry/global-entry/convictions')
     }
  })

  router.get('/convictions_ge', function (req, res) {
    var convictions = req.session.data['convictions']
  if (convictions == 'No') {
     res.redirect('/faster-entry/global-entry/restrictions')
   } else {
     res.render('faster-entry/global-entry/convictions-more-than-one')
     }
  })

  router.get('/restrictions_ge', function (req, res) {
    var restrictions = req.session.data['restrictions']
  if (restrictions == 'No') {
     res.redirect('/faster-entry/global-entry/penalties')
   } else {
     res.render('faster-entry/global-entry/ineligible-restrictions')
     }
  })

  router.get('/convictions-more_ge', function (req, res) {
    var convictionsmore = req.session.data['convictionsmore']
  if (convictionsmore == 'No') {
     res.redirect('/faster-entry/global-entry/convictions-ten-years')
   } else {
     res.render('faster-entry/global-entry/ineligible-convictions')
     }
  })

  router.get('/convictions-ten_ge', function (req, res) {
    var convictionsten = req.session.data['convictionsten']
  if (convictionsten == 'No') {
     res.redirect('/faster-entry/global-entry/convictions-warning')
   } else {
     res.render('faster-entry/global-entry/ineligible-convictions')
     }
  })

  router.get('/penalties_ge', function (req, res) {
    var penalties = req.session.data['penalties']
  if (penalties == 'No') {
     res.redirect('/faster-entry/global-entry/passport-number')
   } else {
     res.render('faster-entry/global-entry/ineligible-restrictions')
     }
  })

  // global-entry journey

  router.get('/passport-nationality_nexus', function (req, res) {
    //var passportnationality = req.query.passportnationality
    var nationality = req.session.data['british-citizen']
  if (nationality == 'No') {
     res.redirect('/faster-entry/nexus/ineligible')
   } else {
     res.render('faster-entry/nexus/convictions')
     }
  })

  router.get('/convictions_nexus', function (req, res) {
    var convictions = req.session.data['convictions']
  if (convictions == 'No') {
     res.redirect('/faster-entry/nexus/restrictions')
   } else {
     res.render('faster-entry/nexus/convictions-more-than-one')
     }
  })

  router.get('/restrictions_nexus', function (req, res) {
    var restrictions = req.session.data['restrictions']
  if (restrictions == 'No') {
     res.redirect('/faster-entry/nexus/penalties')
   } else {
     res.render('faster-entry/nexus/ineligible-restrictions')
     }
  })

  router.get('/convictions-more_nexus', function (req, res) {
    var convictionsmore = req.session.data['convictionsmore']
  if (convictionsmore == 'No') {
     res.redirect('/faster-entry/nexus/convictions-ten-years')
   } else {
     res.render('faster-entry/nexus/ineligible-convictions')
     }
  })

  router.get('/convictions-ten_nexus', function (req, res) {
    var convictionsten = req.session.data['convictionsten']
  if (convictionsten == 'No') {
     res.redirect('/faster-entry/nexus/convictions-warning')
   } else {
     res.render('faster-entry/nexus/ineligible-convictions')
     }
  })

  router.get('/penalties_nexus', function (req, res) {
    var penalties = req.session.data['penalties']
  if (penalties == 'No') {
     res.redirect('/faster-entry/nexus/passport-number')
   } else {
     res.render('faster-entry/nexus/ineligible-restrictions')
     }
  })

module.exports = router
