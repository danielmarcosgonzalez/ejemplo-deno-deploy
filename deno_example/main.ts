import express from "npm:express@4.18.2";
import { Request, Response } from "npm:express@4.18.2";

const app = express();

app.use(express.json());

app
  .get("/",async(req: Request, res: Response)=>{
    res.status(404).send("Hola mundo");
  })

  app.listen(3000, () => {
    console.log("Server listening on port 3000");
  });