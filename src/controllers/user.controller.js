import User from "../models/User";
export const createUser = async (req, res) => {
  res.json("hola barto");
};

export const getUsers = async (req, res) => {
  const users = await User.find().populate("role");
  res.json(users);
};

export const getUserById = async (req, res) => {
  const userFound = await User.findById(req.params.userId).populate("roles");
  if (!userFound) return res.status(204).json();
  res.status(200).json(userFound);
};

export const deleteUser = async (req, res) => {
  const { userId } = req.params;
  await User.findByIdAndDelete(userId);
  res.status(204).json();
};

export const updateUser = async (req, res) => {
  const updateUser = await User.findByIdAndUpdate(req.params.userId, req.body, {
    new: true,
  });
  res.status(200).json({
    message: "User updated",
    updateUser,
  });
};
