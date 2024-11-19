import express from 'express';
import cors from 'cors'; // Importa el paquete cors para gestionar permisos de acceso
import path from 'path';
import { fileURLToPath } from 'url';
import datosRoutes from './routes/datos.routes.js'; // Importa las rutas de datos

// Define el módulo de ES para obtener el directorio actual
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

// Configuración de CORS
const corsOptions = {
    origin: '*', // Permitir acceso desde cualquier origen
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE'], // Métodos permitidos
    credentials: true // Permitir el uso de credenciales si es necesario
};

app.use(cors(corsOptions)); // Aplica las configuraciones de CORS
app.use(express.json()); // Permite interpretar objetos JSON en las solicitudes
app.use(express.urlencoded({ extended: true })); // Permite interpretar formularios codificados en URL

// Rutas
app.use('/api/datos', datosRoutes); // Ruta principal para datos

// Middleware para manejar rutas no encontradas
app.use((req, res, next) => {
    res.status(404).json({
        message: 'Endpoint not found'
    });
});

// Exporta la aplicación para que pueda ser usada en otros archivos
export default app;
