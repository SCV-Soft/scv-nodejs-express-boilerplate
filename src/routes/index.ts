import express from 'express';

var router = express.Router();

router.get('/', function(req: any, res: any, next: any) {
  res.send({success:true})
});

module.exports = router;
