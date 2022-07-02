import express from 'express';

const router = express.Router();

router.get('/', function(req: any, res: any, next: any) {
  res.send({success:true})
});

module.exports = router;
