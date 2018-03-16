var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('cans')
    .select('id')
    .then((sheet) => {
      if (sheet.length < 1) {
        return res.sendStatus(404)
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(sheet))
    })
    .catch((err) => next(err))
});

module.exports = router;
