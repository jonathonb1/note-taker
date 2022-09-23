const express = require("express");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Initialize app/port
const app = express();
const PORT = process.env.PORT || 3000;

//body parsing, static, and route middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

// Start server on port
app.listen(PORT, () => console.log(`Listening on PORT: ${PORT}`));