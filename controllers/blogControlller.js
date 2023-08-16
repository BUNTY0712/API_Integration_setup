// const mongoose = require("mongoose");
const blogModel = require("../models/BlogModel");
// const userModel = require("../models/userModel");
// import blogModel from '../models/blogModel';

// GET ALL BLOGS
exports.getAllBlogsController = async (req, res) => {
  try {
    const blogs = await blogModel.find({});
    if (!blogs) {
      return res.status(200).send({
        success: false,
        message: "No Blog Found",
      });
    }
    return res.status(200).send({
      success: true,
      BlogCount: blogs.length,
      message: "All Blogs lists",
      blogs,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error While Getting Blogs",
      error,
    });
  }
};

//Create Blog
exports.createBlogController = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    //validation
    if (!title || !description || !image) {
      return res.status(400).send({
        success: false,
        message: "Please Provide All Fields",
      });
    }
    // const existingUser = await userModel.findById(user);
    // validation
    // if (!existingUser) {
    //   return res.status(404).send({
    //     success: false,
    //     message: "unable to find user",
    //   });
    // }
    const newBlog = new blogModel({ title, description, image});
    // const session = await mongoose.startSession();
    // session.startTransaction();
    // await newBlog.save({ session });
    // existingUser.blogs.push(newBlog);
    // await existingUser.save({ session });
    // await session.commitTransaction();
    await newBlog.save();
    return res.status(201).send({
      success: true,
      message: "Blog Created!",
      newBlog,
    });
  } catch (error) {
    console.log(error);
    return res.status(200).send({
      success: false,
      message: "ERROR While Creating Blog",
      error,
    });
  }
};

//Update Blog
exports.updateBlogController = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, image } = req.body;
    const blog = await blogModel.findByIdAndUpdate(
      id,
      { ...req.body },
      { new: true }
    );
    // update ke liye humlogo ko 3 parameter pass krna padta h 1st particular id jisse humlog change kr rahe h or {new:true} krna padta h
    return res.status(200).send({
      success: true,
      message: "Blog updated!",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error while updating Blog",
    });
  }
};

//Single Blog
exports.getBlogByIdController = async (req, res) => {
  try {
    const { id } = req.params;
    const blog = await blogModel.findById(id);
    if (!blog) {
      return res.status(404).send({
        success: false,
        message: "blog not found with this is",
      });
    }
    return res.status(200).send({
      success: true,
      message: "fetch single blog",
      blog,
    });
  } catch (error) {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "error while getting single blog",
      error,
    });
  }
};

//Delete Blog
exports.deleteBlogController = async (req, res) => {
  try {
    await blogModel.findOneAndDelete(req.params.id);
    return res.status(200).send({
      success: true,
      message: "Blog Deleted",
    });
  } catch {
    console.log(error);
    return res.status(400).send({
      success: false,
      message: "Error While Deleting Blog",
      error,
    });
  }
};
