const express = require('express');
const database = require('../config/database');
const router = express.Router();
const customerController = require('../controller/customerController.js');
const auth = require("../middleware/auth");

router.post('/', auth, customerController.customer);
router.get("/", auth, async (req, res) => {
    try {
        database.query (`SELECT * FROM customer`, async function (err, result) {
            if (err) throw err;
            res.json(result)
        })

    } catch (err) {
      console.error(err);
      res.status(500).send();
    }
  });

module.exports = router;