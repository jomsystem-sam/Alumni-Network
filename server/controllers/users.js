import User from "../models/User.js";
import mongoose from "mongoose";
import bcrypt from 'bcrypt';


// Read
export const getUser = async (req,res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        res.status(200).json(user);
    } catch(err){
        res.status(404).json({error:err.message});
    }
}

export const getUsersFriends = async(req,res) => {
    try{
        const {id} = req.params;
        const user = await User.findById(id);
        const friends = await Promise.all(
            user.friends.map((id)=>User.findById(id))
        )
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return { _id, firstName, lastName, occupation, location, picturePath };
            }
        )
        res.status(200).json(formattedFriends);
    } catch(err){
        res.status(404).json({error:err.message});
    }
}


// update
export const addRemoveFriend = async(req,res) => {
    try {
        const {id , friendId} = req.params;
        const user = await User.findById(id);
        const friend = await User.findById(friendId);
        if(user.friends.includes(friendId)){
            user.friends = user.friends.filter((id) => id !== friendId)
            friend.friends = friend.friends.filter((id) => id !== id)
        }else{
            user.friends.push(friendId);
            friend.friends.push(id);
        }
        await user.save(); 
        await friend.save();

        const friends = await Promise.all(
            user.friends.map((id)=>User.findById(id))
        )
        
        const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
            return { _id, firstName, lastName, occupation, location, picturePath };
            }
        )
        res.status(200).json(formattedFriends);
    } catch (err) {
        res.status(404).json({error:err.message});
    }
}

// export const editProfile = async (req, res) => {
//     try {
//       const {
//         firstName,
//         lastName,
//         email,
//         // currentpassword,
//         // password,
//         location,
//         occupation,
//         // picturePath,
//       } = req.body;
  
//       const { id } = req.params;
  
//       // Use findByIdAndUpdate to find and update the user
//       const updatedUser = await User.findByIdAndUpdate(
//         id,
//         {
//           $set: {
//             firstName,
//             lastName,
//             email,
//             // picturePath, // Make sure picturePath is defined in your req.body
//             location,
//             occupation,
//           },
//         },
//         { new: true, runValidators: true }
//       );
  
//       // Check if the user exists
//       if (!updatedUser) {
//         console.log("User not found");
//         return res.status(404).json({ error: 'User not found' });
//       }
  
//       // If a new password is provided, hash and update the password
//       // if (password) {
//       //   const salt = await bcrypt.genSalt();
//       //   const passwordHash = await bcrypt.hash(password, salt);
//       //   updatedUser.password = passwordHash;
//       //   await updatedUser.save();
//       // }
  
//       res.status(200).json(updatedUser);
//     } catch (err) {
//       res.status(500).json({ error: err.message });
//     }
//   };

export const editProfile = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        location,
        occupation,
        // picturePath,
      } = req.body;
  
      const { id } = req.params;
  
      // Convert the id string to ObjectId
      const userId = mongoose.Types.ObjectId(id);
  
      // Use findOneAndUpdate to find and update the user
      const updatedUser = await User.findOneAndUpdate(
        { _id: userId },
        {
          $set: {
            firstName,
            lastName,
            email,
            // picturePath, // Make sure picturePath is defined in your req.body
            location,
            occupation,
          },
        },
        { new: true, runValidators: true }
      );
  
      // Check if the user exists
      if (!updatedUser) {
        console.log("User not found");
        return res.status(404).json({ error: 'User not found' });
      }
  
      // If you need to handle password updates, you can include that logic here
  
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };
