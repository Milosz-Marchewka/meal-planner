import express from "express";
import loginRoutes from "./routes/login";

const app = express();
const port = 3000;

app.use("/login", loginRoutes);

app.listen(port, ()=>{
    console.log(`Server running at port ${port}`);
});