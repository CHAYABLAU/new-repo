const router=require("express").Router();
const user =require("../controllers/user.controller")
const post=require("../controllers/post.controller")



router.post('/register',user.register)

 router.post('/login',user.login)

// router.delete('/deletePost/:id',post.deletePost)
// router.patch('/updatePost/:id',post.updatePost)

module.exports=router;