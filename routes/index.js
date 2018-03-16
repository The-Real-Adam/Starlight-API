const knex = require('../knex');
const express = require('express');
const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  knex('cans')
    .select('id','name','serial', 'size', 'requiresMaintenance', 'outOfService', 'source', 'startDate', 'hazardous', 'action', 'timestamp', 'createdBy', 'createdDate', 'modifiedBy', 'modifiedDate', 'attachment', 'deleted')
    .then((can) => {
      if (can.length < 1) {
        return res.sendStatus(404)
      }
      res.setHeader('Content-Type', 'application/json')
      res.send(JSON.stringify(can))
    })
    .catch((err) => next(err))
});

module.exports = router;
