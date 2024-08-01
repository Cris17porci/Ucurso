import { configuration } from "./config.js";
import app from "./server.js";



app.listen(configuration.puerto, () => {
  console.log(`El usuario ${configuration.username} ha levantado la aplicacion en el puerto ${configuration.puerto}.`);
});
