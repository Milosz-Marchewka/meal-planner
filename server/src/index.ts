import express from "express";
import cors from "cors";
import loginRoutes from "./routes/login/loginRoutes";

const PORT = 3000;
const app = express();
app.use(cors());
app.use(express.json());

app.use("/login", loginRoutes);

app.listen(PORT, ()=>{
    console.log(`Server running at port ${PORT}`);
});