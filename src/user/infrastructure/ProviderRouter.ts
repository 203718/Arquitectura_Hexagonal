import express from "express";

import { providerController } from "./dependencies";

export const providerRouter = express.Router();

providerRouter.get("/", providerController.getProviders.bind(providerController));


