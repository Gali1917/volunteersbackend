import { trusted } from "mongoose";
import Tareas from "../models/Tareas.js";
import { uploadImage, deleteImage } from "../libs/cloudinary.js";
import fs from "fs-extra";

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
        let image;

        if (req.files?.image) {
            const result = await uploadImage(req.files.image.tempFilePath);
            await fs.remove(req.files.image.tempFilePath);
            image = {
                url: result.secure_url,
                public_id: result.public_id
            }
        }
        const newTareas = new Tareas({ title, description, image });
        await newTareas.save();
        return res.json(newTareas);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: error.message });
    }
};

export const putTareas = async (req, res) => {
    // try {
    //     const updateTarea = await Tareas.findByIdAndUpdate(req.params.id, req.body, { new: true });
    //     return res.send(updateTarea);
    // } catch (error) {
    //     return res.status(500).json({ message: error.message });
    // }
    try {
        // Buscar la tarea por ID
        const tarea = await Tareas.findById(req.params.id);
    
        // Si no se encuentra la tarea, enviar un error 404
        if (!tarea) {
          return res.status(404).json({ message: 'Tarea no encontrada' });
        }
    
        // Actualizar los campos de la tarea
        tarea.title = req.body.title || tarea.title;
        tarea.description = req.body.description || tarea.description;
    
        // Si el campo de imagen está presente, subir la nueva imagen y eliminar la anterior
        if (req.files?.image) {
          const result = await uploadImage(req.files.image.tempFilePath);
          await fs.remove(tarea.image.public_id); // Eliminar la imagen antigua
          tarea.image = {
            url: result.secure_url,
            public_id: result.public_id
          };
          await fs.remove(req.files.image.tempFilePath); // Eliminar el archivo temporal
        }
    
        // Guardar la tarea actualizada en la base de datos
        const updatedTarea = await tarea.save();
    
        // Responder con la tarea actualizada
        return res.json(updatedTarea);
      } catch (error) {
        return res.status(500).json({ message: error.message });
      }
};

export const deleteTareas = async (req, res) => {
    try {
        const tareaEliminada = await Tareas.findByIdAndDelete(req.params.id);
        if (!tareaEliminada) return res.sendStatus(404);

        if (tareaEliminada.image.public_id) {
            await deleteImage(tareaEliminada.image.public_id);
        }
        return res.sendStatus(204);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};

export const getTareasId = async (req, res) => {
    try {
        const tareaId = await Tareas.findById(req.params.id);
        if (!tareaId) return res.sendStatus(404);
        return res.json(tareaId);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
};