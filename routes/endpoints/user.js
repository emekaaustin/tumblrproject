const Users = require('../../models/user')

const routes = function (app) {
    app.get("/users", async (req, res) => {
        try {
            const { fullname, username, email, password } = req.body;

        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    })

    app.post("/user", async (req, res) => {
        try {
            const { fullname, username, email, password } = req.body;

            if(!fullname || !username || !email || !password) 
            return res.status(400).json({msg: "One or more fields are empty"})

            const newUser = new Users({
                fullname, username, email, password
            })

            await newUser.save()

            res.json({
                msg: "User saved"
            })
        }
        catch (err) {
            return res.status(500).json({msg: err.message})
        }
    })
}
module.exports = routes;