
import config from "../config/config.js";
import User from "../models/User.js";

export const postLogin = (req, res) => {
  try {
    const { name, email, password, number, document, ocupation, country } = req.body;
    if (!email || !password) {
      return res.status(400).json({ error: "Datos invalidos!" });
    }
    User.findOne({ email }, (err, user) => {
      if (err) {
        return res
          .status(500)
          .json({ error: "Error al procesar la solicitud" });
      }
      if (!user) {
        return res.status(404).json({ error: "Usuario no encontrado" });
      }
      user.comparePassword(password, (err, isMatch) => {
        if (err) {
          return res
            .status(500)
            .json({ error: "Error al procesar la solicitud" });
        }
        if (!isMatch) {
          return res.status(401).json({ error: "Datos invalidos" });
        }
        const token = jwt.sign({ _id: user._id }, config.secret);
        res.json({ token });
      });
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: error.message });
  }
};

export const postSignup = async (req, res) =>{
    const user = await new User(req.body);
    user.save((err) =>{
        if(err){
            return res.status(500).json({ error: "Error al procesar la solicitud"});
        }
        const token = jwt.sign({ _id: user._id }, config.secret);
        res.json({token});
    });
};



