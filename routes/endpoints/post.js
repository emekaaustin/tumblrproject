const Post = require('../../models/post')

const routes = function (app) {
    // app.get("/posts", async (req, res) => {
    //     try {

    //     }
    //     catch (err) {
    //         return res.status(500).json({msg: err.message})
    //     }
    // })

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
    //     console.log('Body: ', req.body);

    //         const data = req.body;
    //         const newPost = new Post(data);

    //         newPost.save((error)=>{
    //             if(error){
    //                 res.status(500).json({msg:'Sorry Internal Server Error'})

    //             }else{
    //                 res.json({
    //                     msg: 'We received data'
    //                 });
    //             }
    //         });           
    // });
    
    }
module.exports = routes;