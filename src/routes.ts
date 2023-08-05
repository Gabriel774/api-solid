import { Router } from "express";
import { createUserController } from "./useCases/CreateUser";

const router = Router();

router.post("/users", (req, res) => {
  console.log(req.body, '1')
  return createUserController.handle(req, res);
});

export { router };
