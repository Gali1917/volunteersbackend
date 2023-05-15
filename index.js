import { connectDB } from "./server/db.js";
import { PORT } from "./server/config/config.js";
import app from "./server/config/app.js";

connectDB();

app.listen(PORT);
console.log("Servidor corriendo por puerto ", PORT);
