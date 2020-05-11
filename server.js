if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config({path: __dirname + '/.env'})
  }
 
  const express = require('express')
  const app = express()
  const expressLayouts = require('express-ejs-layouts')
  const bodyParser = require('body-parser')
  const methodOverride = require('method-override')
  
  const indexRouter = require('./routes/index')
  const authorRouter = require('./routes/authors')
  const bookRouter = require('./routes/books')

  
const adminData=require('./routes/admin');
const  ShopRoutes=require('./routes/shop');
const  ForgotRoutes=require('./routes/forgot');
  
  app.set('view engine', 'ejs')
  app.set('views', __dirname + '/views')
  app.set('layout', 'layouts/layout')
  app.use(expressLayouts)
  app.use(methodOverride('_method'))
  app.use(express.static('public'))
  app.use(bodyParser.urlencoded({ limit: '10mb', extended: false }))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { 
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/authors', authorRouter)
app.use('/books', bookRouter)


app.use("/login",(req,res,next) => {
  res.render("login.ejs",{Login:'login'});
}); 


app.use("/admin",adminData);

app.get("/signup",(req,res,next) =>{
res.render("signup.ejs");
});

app.use("/shop",ShopRoutes);


app.get("/forgot_password",(req,res,next) =>{
  res.render("forgot.ejs");
});

app.use("/forgot",ForgotRoutes);



app.listen(process.env.PORT || 3000)
