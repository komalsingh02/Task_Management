const express = require("express");
const router = express.Router();
const Task = require("../models/task");
const User = require("../models/user");
const authenticateToken = require("./auth");
router.post("/create-task", authenticateToken, async (req, res) => {
  try {
    const { title, desc } = req.body;
    const { id } = req.headers;
    const newTask = new Task({ title: title, desc: desc });
    const saveTask = await newTask.save();
    const taskId = saveTask._id;
    await User.findByIdAndUpdate(id, { $push: { tasks: taskId._id } });
    return res.status(200).json({ message: "Task Created" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server Error" });
  }
});

router.get("/get-all-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "tasks",
      options: { sort: { createdAt: -1 } },
    });
    res.status(400).json({ data: userData });
  } catch (error) {
    res.send(400).json({ message: "Internal Server Error" });
  }
});

router.delete("/delete-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const userId = req.headers.id;
    await Task.findByIdAndDelete(id);
    await User.findByIdAndUpdate(userId, { $pull: { tasks: id } });
    res.status(400).json({ message: "Task deleted Successfully" });
  } catch (error) {
    res.status(400).json({ message: "Internal Server error" });
  }
});

router.put("/update-imp-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const { title, desc } = req.body;
    await Task.findByIdAndUpdate(id, { title: title, desc: desc });
    res.status(200).json({ message: "Task updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(400).json({ message: "Internal Server error" });
  }
});

router.put("/update-imp-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const ImpTask = await TaskData.important;
    await Task.findByIdAndUpdate(id, { important: !ImpTask });
    res.status(200).json({ message: "Task updated Successfuly" });
  } catch (error) {
    res.status(400).json({ message: "Internal Server error" });
  }
});

//update_complete_task_to_incomplete
router.put("/update-complete-task/:id", authenticateToken, async (req, res) => {
  try {
    const { id } = req.params;
    const TaskData = await Task.findById(id);
    const CompleteTask = await TaskData.complete;
    await Task.findByIdAndUpdate(id, { important: !CompleteTask });
    res.status(200).json({ message: "Task updated Successfuly" });
  } catch (error) {
    res.status(400).json({ message: "Internal Server error" });
  }
});

//get-important-task
router.get("/get-important-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "tasks",
      match: { important: true },
      options: { sort: { createdAt: -1 } },
    });
    impTaskData = userData.tasks;
    res.status(400).json({ data: impTaskData });
  } catch (error) {
    res.send(400).json({ message: "Internal Server Error" });
  }
});

//get-completed-task
router.get("/get-complete-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "tasks",
      match: { complete: true },
      options: { sort: { createdAt: -1 } },
    });
    const compTaskdata = userData.tasks;
    res.status(400).json({ data: compTaskdata });
  } catch (error) {
    res.send(400).json({ message: "Internal Server Error" });
  }
});

//get-incompleted-task
router.get("/get-incomplete-task", authenticateToken, async (req, res) => {
  try {
    const { id } = req.headers;
    const userData = await User.findById(id).populate({
      path: "tasks",
      match: { incomplete: false },
      options: { sort: { createdAt: -1 } },
    });
    const incompTaskdata = userData.tasks;
    res.status(400).json({ data: incompTaskdata });
  } catch (error) {
    res.send(400).json({ message: "Internal Server Error" });
  }
});
module.exports = router;
