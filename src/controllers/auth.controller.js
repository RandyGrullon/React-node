import User from "../models/User";
import Role from "../models/Role";
import jwt from "jsonwebtoken";
import config from "../config";

export const signUp = async (req, res) => {
  const { username, email, password, role } = req.body;
  const newUser = new User({
    username,
    email,
    password: await User.encryptPassword(password),
  });

  if (role) {
    const foundRoles = await Role.find({ name: { $in: role } });
    newUser.role = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.role = [role._id];
  }
  const userSaved = await newUser.save();
  console.log(userSaved);
  const token = jwt.sign({ id: userSaved.id }, config.SECRET, {
    expiresIn: 86400, //24horas
  });

  res.status(201).json({ token });
};

//crea un metodo para signin con varios http request 200 401 entre otros
export const signIn = async (req, res) => {
  const user = await User.findOne({
    username: req.body.username,
  }).populate("role");

  if (!user) return res.status(400).json({ message: "User not found" });

  const matchPassword = await User.comparePassword(
    req.body.password,
    user.password
  );
  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Invalid Password" });

  const token = jwt.sign({ id: user.id }, config.SECRET, {
    expiresIn: 86400, //24horas
  });

  res.json({ token });
};


