const express= require('express');
const userRoute=require('./routes/user.routes');
const app=express();
const dotenv=require('dotenv');
dotenv.config();
const connectToDB=require('./config/db');
connectToDB();
const cookieParser=require('cookie-parser')
app
app.set('view engine','ejs');
 app.use(express.json());
 app.use(express.urlencoded({extended: true}))
 app.use(cookieParser());
 const indexRouter=require('./routes/index.routes')

app.use('/test',userRoute);
app.use('/',indexRouter)


app.listen(4000,()=>{
    console.log('Server is running on port 4000');
})