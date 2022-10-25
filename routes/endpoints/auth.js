const Users = require('../../models/user')
const Post = require('../../models/post')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const routes = function (app) {
    app.post("/register", async (req, res) => {
        try {
            const { email, password } = req.body

            if(!email || !password)
            return res.status(400).json({msg: "One or more fields are empty"})

            const user_email = await Users.findOne({ email })
            if (user_email) return res.status(400).json({ msg: "This email already exists!" })

            if (password.length < 6)
                return res.status(400).json({ msg: "Password must be at least 6 characters!" })

            const passwordHash = await bcrypt.hash(password, 12)

            const newUser = new Users({
                email, password: passwordHash
            })

            const access_token = createAccessToken({ id: newUser._id })
            const refresh_token = createRefreshToken({ id: newUser._id })

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_Token',
                maxAge: 30 * 7 * 24 * 60 * 60 * 1000
            })

            // console.log(newUser)

            await newUser.save()

            res.json({
                msg: 'Registration Success!',
                access_token,
                user: {
                    ...newUser._doc,
                    password: ''
                }
            })
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    });

    app.post("/login", async (req, res) => {
        try {
            const { email, password } = req.body

            const user = await Users.findOne({ email })
                .populate("followers following", "-password")

            if (!user) return res.status(400).json({ msg: "This email does not exist!" })

            const isMatch = await bcrypt.compare(password, user.password)
            if (!isMatch) return res.status(400).json({ msg: "Password is incorrect!" })

            const access_token = createAccessToken({ id: user._id })
            const refresh_token = createRefreshToken({ id: user._id })

            res.cookie('refreshtoken', refresh_token, {
                httpOnly: true,
                path: '/api/refresh_token',
                maxAge: 30 * 7 * 24 * 60 * 60 * 1000
            })

            res.json({
                msg: 'Login Success!',
                access_token,
                user: {
                    ...user._doc,
                    password: ''
                }
            })
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    });

    app.post("/post", async(req, res) => {
        try {
            const { title, message, hashtag } = req.body;

            if(!title || !message || !hashtag) 
            return res.status(400).json({msg: "One or more fields are empty"})

            const newPost = new Post({
                title, message, hashtag
            })

            await newPost.save()

            res.json({
                msg: "Post saved"
            })
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    });


    // app.get("/refresh_token", (req, res) => {
    //     try {

    //     }
    //     catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // })

    app.post("/logout", (req, res) => {
        try {
            res.clearCookie('refreshtoken', { path: '/refresh_token' })
            return res.json({ msg: "Logged out!" })
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    });

    const createAccessToken = (payload) => {
        return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '1d' })
    }

    const createRefreshToken = (payload) => {
        return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET, { expiresIn: '30d' })
    }
}
module.exports = routes;