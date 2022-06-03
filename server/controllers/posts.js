const mongoose = require("mongoose");

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
    res.status(404).json({ message: err.message });
  }
};

const updatePost = async (req, res) => {
  const { id: _id } = req.params;
  const post = req.body;
  if (!mongoose.Types.ObjectId.isValid(_id)){
    return res.status(400).send({ message: "invalid id" });
  }
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, {...post,_id}, {
    new: true,
  });
  res.json(updatedPost);
};

module.exports = { getPosts, createPost, updatePost };
