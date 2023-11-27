import EventPost from "../models/EventPost.js";
import User from "../models/User.js";
import EventUser from "../models/EventRegisteredUser.js";


// CREATE
export const createEventPost = async (req,res) => {
    try {
        const { userId, description, picturePath,videoPath,attachmentPath} = req.body;  
        const user = await User.findById(userId);
        const newEventPost = new EventPost({
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
        await newEventPost.save();
        const eventpost = await EventPost.find().sort({createdAt:-1});
        res.status(201).json(eventpost);
    } catch (err) {
        res.status(409).json({message:err.message});
    }
}


// READ

export const getEventFeedPosts = async (req,res) => {
    try {
        const eventpost = await EventPost.find().sort({createdAt:-1});
        res.status(200).json(eventpost);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

export const getUserEventPosts = async (req,res) => {
    try {
        const {userId} = req.params;
        const eventpost = await EventPost.find({userId}).sort({createdAt:-1});
        res.status(200).json(eventpost);
    } catch (err) {
        res.status(404).json({message:err.message});
    }
}


// update
export const likeEventPost = async(req,res) => {
    try {
        const {id} = req.params;
        const {userId} = req.body;
        const eventpost = await EventPost.findById(id);
        const isLiked = eventpost.likes.get(userId);
        if(isLiked){
            eventpost.likes.delete(userId);
        }else{
            eventpost.likes.set(userId , true);
        }
        const updatedEventPost = await EventPost.findByIdAndUpdate(id , {likes:eventpost.likes},{new:true});
        res.status(200).json(updatedEventPost);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

export const postEventComment = async(req,res) => {
    try {
        const {eventpostId, userId} = req.params;
        const {comment} = req.body;
        const newComment = {
            userId,
            comment
        };
        const eventpost = await EventPost.findById(eventpostId);
        eventpost.comments.push(newComment);
        const updatedEventPost = await EventPost.findByIdAndUpdate(eventpostId , {comments:eventpost.comments},{new:true});
        res.status(200).json(updatedEventPost);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

//Delete

export const deleteEventComment = async(req,res) => {
    try {
        const {eventpostId} = req.params;
        const {comment} = req.body;
        const eventpost = await EventPost.findById(eventpostId);
        // console.log(post);
        const updatedEventPost = eventpost.comments.filter((item,i)=>{
            return item.comment !== comment;
        });    
        const updatedNewEventPost = await EventPost.findByIdAndUpdate(eventpostId , {comments:updatedEventPost},{new:true});
        res.status(200).json(updatedNewEventPost);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

export const deleteEventPost = async (req, res) => {
    try {
        const { eventpostId } = req.params;
        const { userId } = req.body; // Assuming userId is sent in the request body
        const eventpost = await EventPost.findById(eventpostId);

        // Check if the user requesting the deletion is the owner of the post
        if (eventpost.userId.toString() !== userId) {
            console.log("Permission denied! User requesting deletion is not the owner of the post.");
            return res.status(403).json({ message: "Permission denied. You can only delete your own posts." });
        }

        const deletedPost = await EventPost.findByIdAndDelete(eventpostId);
        const eventposts = await EventPost.find().sort({ createdAt: -1 });

        // Send a success message along with the updated list of posts
        res.status(201).json({ message: "Post deleted successfully", eventposts });
    } catch (err) {
        res.status(404).json({ error: err.message });
    }
}




export const getEventRegisteredUser = async (req, res) => {
    try {
      const { eventpostId } = req.params;
  
      // Validate the user ID here if needed
      if (!isValidEventPostId(eventpostId)) {
        return res.status(400).json({ error: 'Invalid Event ID' });
      }
  
      // Find the user by ID in the EventUser model
      const eventUser = await EventUser.findById(eventpostId);
  
      // Check if the user with the provided ID exists
      if (!eventUser) {
        return res.status(404).json({ error: 'User not found' });
      }
  
      // Respond with the user data
      res.status(200).json({
        firstName: eventUser.firstName,
        lastName: eventUser.lastName,
        email: eventUser.email,
      });
  
      console.info(`User retrieved successfully: ${eventUser.email}`);
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log("Failed to retrieve user");
    }
  };
