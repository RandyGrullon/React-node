import Task from "../models/Task";

export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const newTask = new Task({ title, description });
  const taskSaved = await newTask.save();
  res.status(201).json({
    message: "Task saved",
    taskSaved,
  });
};

export const getTasks = async (req, res) => {
  const task = await Task.find();
  res.json(task);
};

export const getTaskById = async (req, res) => {
  const task = await Task.findById(req.params.taskId);
  res.status(200).json(task);
};

export const updateTaskById = async (req, res) => {
  const updatedTask = await Task.findByIdAndUpdate(
    req.params.taskId,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json({
    message: "Task updated",
    updatedTask,
  });
};

export const deleteTaskById = async (req, res) => {
    const { taskId } = req.params;
    await Task.findByIdAndDelete(taskId);
    res.status(200).json({
      message: "Task deleted",
    });
};
