import { Router } from "express";

// CONTROLLERS
import createUserController from "../controllers/createUser.controller";
import deleteUserController from "../controllers/deleteUser.controller";
import listUsersController from "../controllers/listUsers.controller";
import updateUserController from "../controllers/updateUser.controller";
import userLoginController from "../controllers/userLogin.controller";

// MIDDLEWARES
import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.post("", createUserController);

router.get("", listUsersController);

router.put("/:id", verifyAuthTokenMiddleware, updateUserController);

router.delete("/:id", verifyAuthTokenMiddleware, deleteUserController);

router.post("/login", userLoginController);

export default router;
