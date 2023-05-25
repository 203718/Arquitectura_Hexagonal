import { Request, Response } from "express";

import { GetProvidersUseCase } from "../application/GetProvidersUseCase";

export class ProviderController {
  constructor(readonly getProvidersUseCase: GetProvidersUseCase) {}

  async getProviders(req: Request, res: Response) {
    const providers = await this.getProvidersUseCase.run();
    res.status(200).send(providers);
  }


}
