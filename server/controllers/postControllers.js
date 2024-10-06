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

const updatePost = async (id, post) => {
  const updatedPost = await Post.findByIdAndUpdate(id, post);
  return updatedPost;
};

const deletePost = async (id) => {
  const deletedPost = await Post.findByIdAndDelete(id);
  return deletedPost;
};

export { getPosts, getPost, createPost, updatePost, deletePost };
