const PostMessage = require("../models/postsMessage");

const getPosts = async (req, res) => {
  try {
    const postMessage = await PostMessage.find();
    console.log(postMessage);
    res.status(200).json(postMessage);
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
};

const createPost = async (req, res) => {
  const post = req.body;
  const newPost = new PostMessage(post);
  try {
    await PostMessage.create(newPost);
    res.status(201).send(newPost);
  } catch (err) {
    res.status(409).json({ message: err.message });
  }
};

module.exports = { getPosts, createPost };
