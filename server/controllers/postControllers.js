const getPosts = async () => {
  const posts = await Post.find();
  return posts;
};

const getPost = async (id) => {
  const post = await Post.findById(id);
  return post;
};

const createPost = async (post) => {
  const newPost = await Post.create(post);
  return newPost;
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
