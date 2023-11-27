import Post from "../models/Posts.js";
import User from "../models/User.js";


// CREATE
export const createPost = async (req,res) => {
    try {
        const { userId, description, picturePath,videoPath,attachmentPath} = req.body;  
        const user = await User.findById(userId);
        const newPost = new Post({
            userId,
            firstName:user.firstName,
            lastName:user.lastName,
            location:user.location,
            description,
            picturePath,
            attachmentPath,
            videoPath,
            userPicturePath:user.picturePath,
            likes:{},
            comments:[]
        })
        await newPost.save();
        const post = await Post.find().sort({createdAt:-1});
        res.status(201).json(post);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}


// READ

export const getFeedPosts = async (req,res) => {
    try {
        const post = await Post.find().sort({createdAt:-1});
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

export const getUserPosts = async (req,res) => {
    try {
        const {userId} = req.params;
        const post = await Post.find({userId}).sort({createdAt:-1});
        res.status(200).json(post);
    } catch (err) {
        res.status(404).json({message:err.message});
    }
}


// update
export const likePost = async(req,res) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const post = await Post.findById(id);
        const isLiked = post.likes.get(userId);
        if(isLiked){
            post.likes.delete(userId);
        }else{
            post.likes.set(userId , true);
        }
        const updatedPost = await Post.findByIdAndUpdate(id , {likes:post.likes},{new:true});
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

export const postComment = async(req,res) => {
    try {
        const {postId, userId} = req.params;
        const {comment} = req.body;
        const newComment = {
            userId,
            comment
        };
        const post = await Post.findById(postId);
        post.comments.push(newComment);
        const updatedPost = await Post.findByIdAndUpdate(postId , {comments:post.comments},{new:true});
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

//Delete

export const deleteComment = async(req,res) => {
    try {
        const {postId} = req.params;
        const {comment} = req.body;
        const post = await Post.findById(postId);
        // console.log(post);
        const updatedPost = post.comments.filter((item,i)=>{
            return item.comment !== comment;
        });    
        const updatedNewPost = await Post.findByIdAndUpdate(postId , {comments:updatedPost},{new:true});
        res.status(200).json(updatedNewPost);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

// export const deletePost = async(req,res) => {
//     try {
//         const {postId} = req.params;
//         const deletedPost = await Post.findByIdAndDelete(postId)
//         const post = await Post.find().sort({createdAt:-1});
//         res.status(201).json(post);
//     } catch (err) {
//         res.status(404).json({error:err.message});
//     }
// }


// export const deletePost = async (req, res) => {
//     try {
//         const { postId } = req.params;
//         const { userId } = req.body; // Assuming userId is sent in the request body
//         const post = await Post.findById(postId);

//         // Check if the user requesting the deletion is the owner of the post
//         if (post.userId.toString() !== userId) {
//             console.log("Permission denied ! User requesting deletion is not the owner of the post.")
//             return res.status(403).json({ message: "Permission denied. You can only delete your own posts." });
//         }

//         const deletedPost = await Post.findByIdAndDelete(postId);
//         const posts = await Post.find().sort({ createdAt: -1 });
//         res.status(201).json(posts);
//     } catch (err) {
//         res.status(404).json({ error: err.message });
//     }
// }

export const deletePost = async (req, res) => {
    try {
        const { postId } = req.params;
        const { userId } = req.body; // Assuming userId is sent in the request body
        const post = await Post.findById(postId);

        // Check if the user requesting the deletion is the owner of the post
        if (post.userId.toString() !== userId) {
            console.log("Permission denied! User requesting deletion is not the owner of the post.");
            return res.status(403).json({ message: "Permission denied. You can only delete your own posts." });
        }

        const deletedPost = await Post.findByIdAndDelete(postId);
        const posts = await Post.find().sort({ createdAt: -1 });

        // Send a success message along with the updated list of posts
        res.status(201).json({ message: "Post deleted successfully", posts });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}
