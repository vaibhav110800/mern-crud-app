const express = require("express");
const app = express();
app.use(express.json()) // used to destructure property of request body

const cors = require("cors");
app.use(cors());

// connection
const connectDB = require("./database/database");
connectDB();

// routing
const router = require("./routes/router");
app.use("/api/", router);

// port
const port = 5000;
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
