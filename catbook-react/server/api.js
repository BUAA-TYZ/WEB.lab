/*
|--------------------------------------------------------------------------
| api.js -- server routes
|--------------------------------------------------------------------------
|
| This file defines the routes for your server. 
|
*/

const express = require("express");

// import models so we can interact with the database
const Story = require("./models/story");
const Comment = require("./models/comment");
const User = require("./models/user");
const auth = require("./auth");

// api endpoints: all these paths will be prefixed with "/api/"
const router = express.Router();

router.get("/stories", (req, res) => {
  // empty selector means get all documents
  Story.find({}).then((stories) => res.send(stories));
});

router.post("/story", (req, res) => {
  const newStory = new Story({
    creator_id: req.user._id,
    creator_name: req.user.name,
    content: req.body.content,
  });

  newStory.save().then((story) => res.send(story));
});

router.get("/comment", (req, res) => {
  Comment.find({ parent: req.query.parent }).then((comments) => {
    res.send(comments);
  });
});

router.get("/user", (req, res) => {
  User.findById(req.query.userid).then((user) => {
    res.send(user);
  });
});

router.post("/comment", (req, res) => {
  const newComment = new Comment({
    creator_id: req.user._id,
    creator_name: req.user.name,
    parent: req.body.parent,
    content: req.body.content,
  });

  newComment.save().then((comment) => res.send(comment));
});

router.post("/upuser", (req, res) => {
  if (req.user) {
    User.findByIdAndUpdate(req.user._id, { happiness: req.body.happiness })
      .then((updatedDoc) => {
        console.log(req.body.happiness);
        console.log("Document updated successfully:", updatedDoc);
        res.send(updatedDoc);
      })
      .catch((error) => {
        console.error("Error updating document:", error);
      });
  }
});

router.post("/login", auth.login);
router.post("/logout", auth.logout);

router.get("/whoami", (req, res) => {
  if (req.user) {
    res.send(req.user);
  } else {
    // user is not logged in
    res.send({});
  }
});

// anything else falls to this "not found" case
router.all("*", (req, res) => {
  console.log(`API route not found: ${req.method} ${req.url}`);
  res.status(404).send({ msg: "API route not found" });
});

module.exports = router;
