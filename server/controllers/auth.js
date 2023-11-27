import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import EventUser from "../models/EventRegisteredUser.js";

// register User
export const register = async (req,res) => {
    try{
        const { 
            firstName,
            lastName,
            email,
            password,
            picturePath,
            location,
            occupation
         } = req.body;
        const salt = await bcrypt.genSalt();
        const passwordHash = await bcrypt.hash(password , salt);
        const newUser = new User({
            firstName,
            lastName,
            email,
            password:passwordHash,
            picturePath,
            friends:[],
            location,
            occupation,
            viewedProfile:Math.floor(Math.random()*1000),
            impressions:Math.floor(Math.random()*1000)
        });
       const savedUser =  await newUser.save();
       res.status(201).json(savedUser);
    } catch(err){
        res.status(500).json({error:err.message});
    }
};

export const login = async (req,res) => {
    try{
        const {email , password} = req.body;
        const user = await User.findOne({email:email})
        if(!user) return res.status(400).json({msg:"User does not exist"});
        const isMatch = await bcrypt.compare(password , user.password);
        if(!isMatch) return res.status(400).json({msg:"Invalid credentials"});
        const token = jwt.sign({id:user._id} , process.env.JWT_SECRET);
        delete user.password;
        res.status(200).json({token , user});
    } catch(err){
        res.status(500).json({error:err.message});
    }
}


//Update User Profile
export const updateUserProfile = async (req, res) => {
    try {
      const {
        firstName,
        lastName,
        email,
        location,
        occupation,
      } = req.body;
      const { userId } = req.params; // Extract the user ID from URL parameters
      // Validate the user ID here if needed
      (!isValidUserId(userId)) 
      {
      return res.status(400).json({ error: 'Invalid user ID' });
      }
      // Generate a new password hash if a new password is provided
      let passwordHash;
      if (password) {
        const salt = await bcrypt.genSalt();
        passwordHash = await bcrypt.hash(password, salt);
      }
      // Construct an object with the fields to update
      const updateFields = {
        firstName,
        lastName,
        email,
        location,
        occupation,
      };
      // Add the password field if a new password was provided
      if (passwordHash) {
        updateFields.password = passwordHash;
      }
      // Update the user in the database
      const updatedUser = await User.findByIdAndUpdate(userId, updateFields, { new: true });
      if (!updatedUser) {
        return res.status(404).json({ error: 'User not found' });
      }
      res.status(200).json(updatedUser);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  };

  export const eventregistered = async (req, res) => {
    try {
      const { eventName, firstName, lastName, email, eventpostId } = req.body;
  
      // Check if the user with the provided email already exists
      const existingUser = await EventUser.findOne({ email });
      if (existingUser) {
        console.log("Registration failed, User already exists");
        return res.status(400).json({ error: "User already exists" });
      }
  
      // Create a new user with eventName, firstName, lastName, email, and eventpostId
      const newEventRegisteredUser = new EventUser({
        eventName,
        firstName,
        lastName,
        email,
        eventpostId,
      });
  
      // Save the event registered user to the database
      const savedUser = await newEventRegisteredUser.save();
  
      // Respond with the saved user data (excluding the password)
      res.status(201).json({
        eventName: savedUser.eventName,
        firstName: savedUser.firstName,
        lastName: savedUser.lastName,
        email: savedUser.email,
        eventpostId: savedUser.eventpostId,
      });
  
      console.info(`User registered successfully: ${savedUser.email}`);
    } catch (err) {
      res.status(500).json({ error: err.message });
      console.log("Registration failed");
    }
  };

  export const getEventRegisteredUsers = async (req, res) => {
    try {
      // Extract the event name from the request parameters
      const { eventpostId } = req.params;
  
      // Find all users registered for the specified event
      const registeredUsers = await EventUser.find({ eventpostId });
  
      // Extract required fields from each user and create a new array
      const userData = registeredUsers.map(user => ({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
      }));
  
      // Respond with the list of user data
      res.status(200).json(userData);
    } catch (err) {
      // Handle errors and respond with an error message
      res.status(500).json({ error: err.message });
    }
  };

 
  

   