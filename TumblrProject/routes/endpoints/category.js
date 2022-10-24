const Categories = require('../../models/category')
const Posts = require("../../models/posts")

const routes = function (app) {
    app.post("/category", async (req, res) => {
        try {
            // console.log(req.body)
            const { name } = req.body

            const cat = await Categories.findOne({ name })
            if (cat) return res.status(400).json({ msg: "This category already exits" })

            const newCategory = new Categories({ name })
            console.log(newCategory)
            await newCategory.save()

            res.json({
                msg: "New category added"
            })
        }
        catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    })

    app.get("/categories", async (req, res) => {
        try {
            const categories = await Category.find()
            res.json(categories)
        }
        catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    })

    app.put("/category", async (req, res) => {
        try {
            const { name } = req.body;
            await Category.findOneAndUpdate({ _id: req.params.id }, { name })

            res.json({ msg: "Updated a category" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    })

    app.delete("/category", async (req, res) => {
        try {
            const posts = await Posts.findOne({ category: req.params.id })
            if (posts) return res.status(400).json({
                msg: "Please delete all products with a relationship."
            })

            await Categories.findByIdAndDelete(req.params.id)
            res.json({ msg: "Deleted a Category" })
        } catch (err) {
            return res.status(500).json({ msg: err.message })
        }
    })
}

module.exports = routes;