import { Router } from "express";
import { postLogin } from "../controllers/user.controllers";
import { postSignup } from "../controllers/user.controllers";

const router = Router();

router.post('/login', postLogin);
router.post('/signup', postSignup);

export default router;


// import express from "express";
// import jwt from "jsonwebtoken";
// import config from "../config/config";
// import User from "../models/User";

// const router = express.Router();

// router.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   if (!email || !password) {
//     return res.status(400).json({ error: "Datos invalidos!" });
//   }

//   User.findOne({ email }, (err, user) => {
//     if (err) {
//       return res.status(500).json({ error: "Error al procesar la solicitud" });
//     }
//     if (!user) {
//       return res.status(404).json({ error: "Usuario no encontrado" });
//     }
//     user.comparePassword(password, (err, isMatch) => {
//       if (err) {
//         return res
//           .status(500)
//           .json({ error: "Error al procesar la solicitud" });
//       }
//       if (!isMatch) {
//         return res.status(401).json({ error: "Datos invalidos" });
//       }
//       const token = jwt.sign({ _id: user._id }, config.secret);
//       res.json({ token });
//     });
//   });
// });

// router.post('/signup', (req, res) =>{
//     const user = new User(req.body);
//     user.save((err) =>{
//         if(err){
//             return res.status(500).json({ error: "Error al procesar la solicitud"});
//         }
//         const token = jwt.sign({ _id: user._id }, config.secret);
//         res.json({token});
//     });
// });

// module.exports = router;