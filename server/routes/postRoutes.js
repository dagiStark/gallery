import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
  likePost
} from "../controllers/postControllers.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/post/:id", getPost);
router.post("/", createPost);
router.patch("/:id", updatePost);
router.patch("/:id/like-post", likePost);
router.delete("/:id", deletePost);

export default router;
