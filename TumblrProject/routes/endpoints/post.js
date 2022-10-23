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

        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    })
}
module.exports = routes;