import config from "../config/configSecret.js";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
import Role from "../models/Role.js";

export const signup = async (req, res) => {
  const { name, email, password, number, document, ocupation, country, roles } =
    req.body;

  const newUser = new User({
    name,
    email,
    password: await User.encryptPassword(password),
    number,
    document,
    ocupation,
    country,
  });

  if (roles) {
    const foundRoles = await Role.find({ name: { $in: roles } });
    newUser.roles = foundRoles.map((role) => role._id);
  } else {
    const role = await Role.findOne({ name: "user" });
    newUser.roles = [role._id];
  }
  const saveUser = await newUser.save();
  console.log(saveUser);
  const token = jwt.sign({ id: saveUser._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.status(200).json({ token });
};

export const signin = async (req, res) => {
  const userFound = await User.findOne({ email: req.body.email }).populate(
    "roles"
  );
  if (!userFound) return res.status(401).json({ message: "Usuario on encontrado" });
  const matchPassword = await User.comparePassword(
    req.body.password,
    userFound.password
  );
  if (!matchPassword)
    return res.status(401).json({ token: null, message: "Clave invalida" });
  const token = jwt.sign({ id: userFound._id }, config.SECRET, {
    expiresIn: 86400,
  });
  res.json({ token });
};
