import User from "../models/User.js";

export const createUser = (req, res) =>{
  res.json('Usuario creado');
}

export const deleteUser = async (req, res) =>{
  try{
    const usuarioEliminado = await User.findByIdAndDelete(req.params.id);
    if (!usuarioEliminado) return res.sendStatus(404);
      return res.sendStatus(204);
  } catch (error) {
      return res.status(500).json({ message: error.message });
  }
}