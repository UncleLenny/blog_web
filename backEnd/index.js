const express= require('express')
const app=express()
const cors=require('cors')
const bodyParser=require('body-parser')
const path=require('path')
const session = require('express-session')
const mongoose=require('mongoose')
const cookieParser = require('cookie-parser')


//APP CONFIGURATIONS
app.use(cors({credentials: true, origin:"http://localhost:3000"}));
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))


//For all Static files (Css, Imgs, Js, Fonts etc)
app.use(express.static(path.join(__dirname, 'public')));

let {HOST, PORT}=require('../backEnd/config/configuration')
let app_routes=require('../backEnd/routes/app_routes')
let api_routes=require('../backEnd/routes/api_routes')
let admin_routes=require('../backEnd/routes/admin_routes')


// MONGODB CONNECTION
mongoose.connect('mongodb://127.0.0.1:27017/blog_web',{
    useNewUrlParser:true,
    useUnifiedTopology:true
})

mongoose.connection.on("error", console.error.bind(console, "Connection Error"))
mongoose.connection.on("open", function () {
    console.log("Mongodb Connected")
})


// SET ROUTES
// app.use('/', app_routes)
app.use('/api', api_routes)
// app.use('/admin', admin_routes)

app.listen(PORT, () => {
    console.log(`Running on ${HOST}${PORT}`);
})