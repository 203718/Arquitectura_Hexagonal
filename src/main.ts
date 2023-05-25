import express from "express";

import { productRouter } from "./user/infrastructure/ProductRouter";
import { providerRouter } from "./user/infrastructure/ProviderRouter";

const app = express();
app.use(express.json());

app.use("/products", productRouter);
app.use("/providers", providerRouter);

app.listen(3000, () => {
  console.log(`[Application] Server online in port 3000`);
});
  