import { connectDB } from './db.js';
import { PORT } from './config/config.js';
import app from './config/app.js';

connectDB();

app.listen(PORT);
console.log("Servidor corriendo por puerto ", PORT);
