import express from "express";
import {
  getPosts,
  getPost,
  createPost,
  updatePost,
  deletePost,
} from "../controllers/postControllers.js";

const router = express.Router();

router.get("/", getPosts);
router.get("/post/:id", getPost);
router.post("/post/create", createPost);
router.put("/post/:id", updatePost);
router.delete("/post/:id", deletePost);

export default router;
