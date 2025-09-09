// import model

const Post=require('../models/postModel');
 const Comment=require('../models/commentModel');

 //busness logic

 exports.createComment=async(req,res)=>{

    try{
        // fetch data from request ki body
        const{post,user,body}=req.body;
        //create comment object
        const comment=new Comment({
            post,user,body
        });
        const savedComment=await comment.save();
        const updatedPost=await Post.findByIdAndUpdate(post,{$push:{comments:savedComment._id}},{new:true})
        .populate("Comments")
        .exec();
        res.json({
            post:updatedPost

        });
    } catch (error){
        return res.status(500).json({
            error:"Error While Creaing comment",
        }) ;
        
    }
 };