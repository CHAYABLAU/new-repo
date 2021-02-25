const Post=require('../models/post.model')

const createPost = async (req, res) => {
    let newPost = new Post(req.body)
    try {
       await newPost.save();
    //    let user=await User.findById(new.owner)
    //    user.tasks.push(newTask._id)
       res.status(200).json(newPost)
    } catch (error) {
        res.status(404).send(error)
    }
}
const updatePost=async(req,res)=>{
    const updateid = req.params.id
  try {
    await Post.update({ _id: updateid }, req.body)
    Post.findById(updateid).then((currentPost) => {
      res.status(200).json({ currentPost })
    })
  } catch (error) {
    res.send("canot update Post" + error)
  }
}
const deletePost = ((req, res) => {
    let currPost = req.params.id;

    Post.remove({ _id: currPost }).then(() => {
        res.status(200).send({ massage: "deleted" })
    }).catch((error) => {
        res.status(400).send({ massage: 'dosnt deleted', error })
        console.log(error)
    })
})

module.exports={createPost,updatePost,deletePost}