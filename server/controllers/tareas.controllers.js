import { trusted } from "mongoose";
import Tareas from "../models/Tareas.js";

export const getTareas = async (req, res) => {
     const tareas = await Tareas.find();
    res.send(tareas);
}

export const postTareas = async (req, res) => {
    const {title, description} = req.body;
    const newTareas = new Tareas({title, description});
    await newTareas.save();
    return res.json(newTareas);
};

export const putTareas = async (req, res) => {
    const tareas = await Tareas.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(tareas);
    return res.send('recibido');
};

export const deleteTareas = async (req, res) => {
    const tareaEliminada = await Tareas.findByIdAndDelete(req.params.id);
    if(!tareaEliminada) return res.sendStatus(404);
    return res.sendStatus(204);
};

export const getTareasId = async (req, res) => {
    const tareaId = await Tareas.findById(req.params.id);
    if(!tareaId) return res.sendStatus(404);
    return res.json(tareaId);
};