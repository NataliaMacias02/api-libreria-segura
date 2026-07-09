require("dotenv").config();

const express = require("express");
const connectDB = require("./src/config/database");

const bookRoutes = require("./src/routes/bookRoutes");
const userRoutes = require("./src/routes/userRoutes");
const cartRoutes = require("./src/routes/cartRoutes");
const orderRoutes = require("./src/routes/orderRoutes");

const app = express();

const PORT = process.env.PORT || 5100;

// Conectar a MongoDB
connectDB();

// Middleware
app.use(express.json());

// Ruta principal
app.get("/", (req, res) => {
    res.status(200).json({
        message: "API Pasarela Comercio Segura",
        status: "OK",
        version: "1.0.0",
        endpoints: {
            books: "/api/books",
            users: "/api/users",
            carts: "/api/carts",
            orders: "/api/orders"
        }
    });
});

// Rutas de la API
app.use("/api/books", bookRoutes);
app.use("/api/users", userRoutes);
app.use("/api/carts", cartRoutes);
app.use("/api/orders", orderRoutes);

// Iniciar servidor
app.listen(PORT, () => {
    console.log("Hello World");
    console.log(`Servidor ejecutándose en el puerto ${PORT}`);
});