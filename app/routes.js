var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  
  res.render('index');

});


// Example routes - feel free to delete these

// Passing data into a page

router.get('/examples/template-data', function (req, res) {

  res.render('examples/template-data', { 'name' : 'Foo' });

});

// Branching

router.get('/examples/over-18', function (req, res) {

  // get the answer from the query string (eg. ?over18=false)
  var over18 = req.query.over18;

  if (over18 == "false"){

    // redirect to the relevant page
    res.redirect("/examples/under-18");

  } else {

    // if over18 is any other value (or is missing) render the page requested
    res.render('examples/over-18');

  }

});


/// PAYMENTS VERSION-1 ////

router.post('/payments-v1/claim-type', function (req, res) {
        if (req.body.claimtype === 'Travel') {
          res.redirect('/payments-v1/travel-type')
        } else if (req.body.claimtype ==='Oneoff') {
          res.redirect('/payments-v1/one-off-claim')
        } else {
          res.redirect('/payments-v1/suport-type')
        }

        });

router.post('/payments-v1/travel-type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/payments-v1/single-travel')
        } else {
          res.redirect('/payments-v1/multi-travel')
        }

        });

router.post('/payments-v1/support-type', function (req, res) {
        if (req.body.support === 'single') {
          res.redirect('/payments-v1/single-support')
        } else {
          res.redirect('/payments-v1/multi-support')
        }

        });

/// PAYMENTS VERSION-1 END ///



/// PAYMENTS VERSION-2 ///

/// EMPLOYED ROUTES ///
router.post('/payments-v2/employment-type', function (req, res) {
        if (req.body.claimtype === 'employed') {
          res.redirect('/payments-v2/user-details')
        } else {
          res.redirect('/payments-v2/self-user-details')
        }
      });

router.post('/payments-v2/claim-type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/payments-v2/travel-type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/payments-v2/support-single')
          } else {
            res.redirect('/payments-v2/one-off-claim')
          }
        });

router.post('/payments-v2/travel-type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/payments-v2/single-travel')
        } else {
          res.redirect('/payments-v2/multi-travel')
        }
      });

/// SELF EMPLOYED ROUTES ///
router.post('/payments-v2/self-claim-type', function (req, res) {
          if (req.body.claimtype === 'Travel') {
            res.redirect('/payments-v2/self-travel-type')
          } else if (req.body.claimtype ==='Support') {
            res.redirect('/payments-v2/self-support-single')
          } else {
            res.redirect('/payments-v2/self-one-off-claim')
          }
        });

router.post('/payments-v2/self-travel-type', function (req, res) {
        if (req.body.claim === 'travel1') {
          res.redirect('/payments-v2/self-single-travel')
        } else {
          res.redirect('/payments-v2/self-multi-travel')
        }
      });

/// RECEIPTS UPLOAD ///

/// EMPLOYED ///

router.post('/payments-v2/receipt-options', function (req, res) {
        if (req.body.receipts === 'picture') {
          res.redirect('/payments-v2/upload-receipts')
        } else {
          res.redirect('/payments-v2/upload-file')
        }
      });

/// SELF EMPLOYED ///

router.post('/payments-v2/self-receipt-options', function (req, res) {
        if (req.body.receipts === 'picture') {
          res.redirect('/payments-v2/self-upload-receipts')
        } else {
          res.redirect('/payments-v2/upload-file')
        }
      });


/// PAYMENTS VERSION-2 END ///


module.exports = router;


