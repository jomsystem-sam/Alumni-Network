import express from "express";
import {deleteEventComment, getEventFeedPosts , getUserEventPosts , likeEventPost, postEventComment, deleteEventPost } from "../controllers/eventpost.js";
import { getEventRegisteredUsers } from '../controllers/auth.js';
import { verifyToken } from "../middleware/auth.js";
const router = express.Router();

// read
router.get("/" , verifyToken , getEventFeedPosts);
router.get("/:userId/eventposts" , verifyToken , getUserEventPosts);
router.get("/eventregistered/:eventpostId", getEventRegisteredUsers);

// update
router.patch("/:id/like" , verifyToken , likeEventPost);
router.patch("/:eventpostId/:userId/comment/delete" , verifyToken , deleteEventComment)
router.patch("/:eventpostId/delete" , verifyToken , deleteEventPost)
// POST
router.post("/:eventpostId/:userId/comment" , verifyToken, postEventComment);

export default router;