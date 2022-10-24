const Posts = require('../../models/posts')

const routes = function (app) {
    app.get("/posts", async (req, res) => {
        try {

        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    })

    app.post("/post", async (req, res) => {
        try {
            const { title, message, hashtag } = req.body;

            if(!title || !message || !hashtag) 
            return res.status(400).json({msg: "One or more fields are empty"})

            const newPost = new Posts({
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
    })
}
module.exports = routes;