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

// app.post('/payments-v1/claim-type', function (req, res) {
//         if (req.body.claimtype === 'Travel') {
//           res.redirect('/payments-v1/travel-type')
//         } else if (req.body.claimtype ==='Oneoff') {
//           res.redirect('/payments-v1/one-off-claim')
//         } else {
//           res.redirect('/payments-v1/suport-type')
//         }

//         });

// app.post('/payments-v1/travel-type', function (req, res) {
//         if (req.body.claim === 'travel1') {
//           res.redirect('/payments-v1/single-travel')
//         } else {
//           res.redirect('/payments-v1/multi-travel')
//         }

//         });

// app.post('/payments-v1/support-type', function (req, res) {
//         if (req.body.support === 'single') {
//           res.redirect('/payments-v1/single-support')
//         } else {
//           res.redirect('/payments-v1/multi-support')
//         }

//         });


module.exports = router;


