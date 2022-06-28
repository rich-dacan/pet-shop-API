import { Router } from "express";

import createPetController from "../controllers/createPet.controller";
import listUsersPetsController from "../controllers/listUsersPets.controller";

import verifyAuthTokenMiddleware from "../middlewares/verifyAuthToken.middleware";

const router = Router();

router.get("/:owner_id", verifyAuthTokenMiddleware, listUsersPetsController);
router.post("/:owner_id/new", verifyAuthTokenMiddleware, createPetController);

export default router;
