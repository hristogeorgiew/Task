const database = require('../config/database');
const jwt = require('jsonwebtoken');

const userController = {
   
    customer: async (req, res) => {
        try{
           const name = req.body;
           database.query(`INSERT INTO customer (name) Values ('${name.name}')`, async function (err, result) {
            if (err) throw err;
            res.json(result);
           })

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = userController;
