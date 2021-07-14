require('dotenv').config();
const express = require('express');
const database = require('./config/database');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const app = express();

//Connect to our database
database.connect( (error) => {
    if(error){
        throw error;
    }else {
        console.log("MYSQL Connected...");
    }
})

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cookieParser());
app.use(
    cors({
      origin: [
        "http://localhost:3000",
        
      ],
      credentials: true,
    })
  );


//Routes
app.use('/user', require('./routes/userRouter'));
app.use('/customer', require('./routes/customerRouter'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})