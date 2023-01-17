require('dotenv').config
const express = require('express')
const bcrypt = require('bcrypt')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
const methodOverride = require('method-override')
const app = express()
const axios = require('axios')

const User = require('./models/users')
const Post = require('./models/posts')


app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.use(express.static('public'))
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cookieParser())
app.use(methodOverride('_method'))

app.get('/', (req, res) => {
    res.send('Hello')
})

//game route
app.get('/game', async (req, res) => {
    const userAccess = req.cookies['user-access']
    let posts = await Post.find()
    if(userAccess){
    
    res.render('feed', {posts: posts, userAuth: userAccess})
    }

    else{
        res.render('feed', {posts: posts})
    }
})
app.get('/post/submit', async (req, res) => {
    const userAccess = req.cookies['user-access']

    if(userAccess){
        res.render('formsubmit')
    }
    
    else{
        res.redirect('/login')
    }
})

//post id route
app.get('/game/:id', async (req, res) => {

    let post = await Post.findById(req.params.id)
    res.render('post', post)
})

//posting route
app.post('/gamepost', async (req, res) => {
    const{title, rating, review} = req.body
    const userAccess = req.cookies['user-access']
    
    if(userAccess){
    let user = await User.findById(userAccess._id).populate('posts')
    let newPost = await Post.create(
        {title: title,
        rating: rating,
        review: review,
        username: userAccess.username})

    await user.posts.push(newPost.id)
    user.save()
    res.redirect('/game')
    }

    else{
        res.redirect('/login')
    }
})


app.get('/login', (req, res) => {
    res.render('login')
})


app.get('/createaccount', (req, res) => {
    console.log('Hello')
    res.render('CreateAccount')
})


//profile route
app.get('/profile/:id', async (req, res) => {
    const userAccess = req.cookies['user-access']
    if(userAccess){
    let findUser = await User.findById(req.params.id).populate('posts')
    res.render('profile', {user: findUser, userAuth: userAccess})
    }

    else{
        res.redirect('/login')
    }
})

//Checking credentails route
app.post('/logincheck', async (req, res) => {
    const {username, password} = req.body
    console.log(req.body)
    let users = await User.find()
    

    let userAuthentification = await User.findOne({username: username})
    //compare crypted password to password entered
    if(userAuthentification){
        const dbPassword = userAuthentification.password
        let passwordCompare = await bcrypt.compare(password,dbPassword)
    }

        try{
            const userId = userAuthentification.id
            res.cookie("user-access", userAuthentification,{
                maxAge: 60*60*24*2*1000,
                httpOnly: true
            })
            res.redirect(`profile/${userAuthentification._id}`)
        } 

        catch(err){
            res.status(400).json('Invalid credientials')
        }

})


//creating account roure
app.post('/createaccount', async (req, res) => {
    
    const {username, password, posts} = req.body
    const hash = await bcrypt.hash(password, 10)
    let findUsers = await User.find()


    let duplicateUsername = findUsers.filter((item) => {
        if(item.username == username) return item
    })
    


    if(duplicateUsername.length == 0){
        let createUsers = await User.create({
            username: username,
            password: hash,
            posts: posts
        })
            try{
            
            res.redirect(`/login`)
            }
                catch(err){
                    res.status(400).json({error: err})
                }
    } 
    else if(duplicateUsername != 0){
        res.status(400).json('That Username already exists')
    }
 

    else{
        res.status(400).json('Username and email is already in use')
    }
})

app.delete('/gamedelete/:id', async  (req,res) => {
    let deletedPost = await Post.findByIdAndDelete(req.params.id)
    res.redirect('/game')
})

app.put('/gameupdate/:id', async (req,res) => {
    const {title, rating, review} = req.body

    let updatedPost = await Post.findByIdAndUpdate(req.params.id, {
        title: title,
        rating: rating,
        review: review,
    })

    res.redirect('/game')
})

//logout route 
app.post('/logout', (req, res) =>{
    res.clearCookie("user-access")
    res.redirect('/login')
})


mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true},
    () => {console.log(process.env.MONGO_URI)})

    
app.listen(process.env.PORT)