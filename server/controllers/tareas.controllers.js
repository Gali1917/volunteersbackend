import { trusted } from "mongoose";
import Tareas from "../models/Tareas.js";

export const getTareas = async (req, res) => {
    try {
        const tareas = await Tareas.find();
        res.send(tareas);
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message });
    }
}

export const postTareas = async (req, res) => {
    try {
        const { title, description } = req.body;
        const newTareas = new Tareas({ title, description });
        await newTareas.save();
        return res.json(newTareas);
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message });
    }
};

export const putTareas = async (req, res) => {
    try {
        const updateTarea = await Tareas.findByIdAndUpdate(req.params.id, req.body, { new: true });
        return res.send(updateTarea);
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message });
    }
};

export const deleteTareas = async (req, res) => {
    try {
        const tareaEliminada = await Tareas.findByIdAndDelete(req.params.id);
        if (!tareaEliminada) return res.sendStatus(404);
        return res.sendStatus(204);
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message });
    }
};

export const getTareasId = async (req, res) => {
    try {
        const tareaId = await Tareas.findById(req.params.id);
        if (!tareaId) return res.sendStatus(404);
        return res.json(tareaId);
    } catch (error) {
        return res.sendStatus(500).json({ message: error.message });
    }
};