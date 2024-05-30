import express from "express"
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser"
import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { connectDB } from "./db/connect.js";
import {options} from "./swagger-doc/options.js"

// Import routes
// const routes = require("./routes");
import routeHandler from "./routes/index.js";

// Middlewares
import { errorMiddleware, notFoundMiddleware } from "./middlewares/index.js";

// API config
const app = express();
const port = process.env.PORT || 8080;
app.use(cors());
app.use(express.json());
app.use(cookieParser(process.env.COOKIE_SECRET))
app.use(morgan("dev", { skip: (req, res) => process.env.NODE_ENV === "test" }));

// API routes
app.get("/", (req, res) => {
  res.send("Tennis League");
});
app.use("/api/v1", routeHandler);

// Swagger documentation route
const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

// Handle errors
app.use(notFoundMiddleware);
app.use(errorMiddleware);

// Start Api
const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URL);
    app.listen(port, () =>
      console.log(`Server start on port: ${port}`)
    );
  } catch (error) {
    console.log(error);
  }
};

startServer();

export default app;