import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();
    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getPost = async (id) => {
  const post = await Post.findById(id);
  return post;
};

const createPost = async (req, res) => {
  try {
    const post = req.body;
    const newPost = await PostMessage.create(post);
    await newPost.save();
    res.status(201).json(newPost);
  } catch (error) {
    res.status(201).json({ message: error.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No post with that id" });
  try {
    const updatePost = await PostMessage.findByIdAndUpdate(_id, post, {
      new: true,
    });
    res.json(updatePost);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

const deletePost = async (req, res) => {
  try {
    const { id: _id } = req.params;
    if (!mongoose.Types.ObjectId.isValid(_id))
      return res.status(404).json({ message: "No post with that id" });
    await PostMessage.findByIdAndDelete(_id);
    res.json({ message: "Message deleted successfully" });
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

const likePost = async (req, res) => {
  const { id: _id } = req.params;
  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).json({ message: "No post with that id" });

  try {
    const post = await PostMessage.findById(_id);
    const updatedPost = await PostMessage.findByIdAndUpdate(
      _id,
      { likeCount: post.likeCount + 1 },
      { new: true }
    );
    res.json(updatedPost);
  } catch (error) {
    res.status(500).json({ Error: error.message });
  }
};

export { getPosts, getPost, createPost, updatePost, deletePost, likePost };
