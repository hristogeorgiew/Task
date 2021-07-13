const bcrypt = require('bcrypt');
const database = require('../config/database');
const jwt = require('jsonwebtoken');

const userController = {
   
    register: async (req, res) => {
        try{
           const { name, email, password} = req.body;

           //validation
           if(!email || !password || !name) {
               return res.status(400).json({errorMessage: "Всички полета са задължителни"})
           }

           if(password.length < 6) {
                return res.status(400).json({errorMessage: "Минимум символи 6"})
           }

           database.query (`SELECT * FROM users Where email = '${email}' `, async function (err, result) {
            if (err) throw err;

            if(result.length > 0) {
                return res.status(400).json({errorMessage: "Потребителят вече съществува"})
            }

            const salt = await bcrypt.genSalt(); 
            const passwordHash = await bcrypt.hash(password, salt);

            //save new user
            database.query(`INSERT INTO users (name, email, password) Values ('${name}', '${email}', '${passwordHash}')`, async function (err, result) {
                if (err) throw err;
                console.log("1 record inserted");

                //sign the token
                    const token = jwt.sign({
                        user: result.insertId
                    }, process.env.JWT_SECRET);

                //send the token in a HTTP-only cookie
                res.cookie("token", token, {
                    httpOnly: true,
                }).send();
            });

          });

          

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    login: async (req, res) => {
        try{
            const { email, password} = req.body;

            //validate
            if(!email || !password) {
                return res.status(400).json({errorMessage: "Всички полета са задължителни"})
            }
            
            database.query (`SELECT * FROM users Where email = '${email}' `, async function (err, result) {
                if (err) throw err;
                if(result.length < 1) {
                    return res.status(401).json({errorMessage: "Невалидни данни"})
                }else {
                    //console.log(result[0].password)
                    const passwordCorrect = await bcrypt.compare(password, result[0].password);
                    
                    if(!passwordCorrect) {
                        return res.status(401).json({errorMessage: "Невалидни данни"})

                    }

                     //sign the token
                     const token = jwt.sign({
                        user: result[0].id
                    }, process.env.JWT_SECRET);

                //send the token in a HTTP-only cookie
                res.cookie("token", token, {
                    httpOnly: true,
                }).send();
                }
                
            })


        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    logout: async (req, res) => {
        try{
            
            res.cookie("token", "", {
                httpOnly: true,
                expires: new Date(0)
            }).send();

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },

    loghedin: async (req, res) => {
        try{
            

        } catch (err) {
            return res.status(500).json({msg: err.message})
        }
    },
}

module.exports = userController;
