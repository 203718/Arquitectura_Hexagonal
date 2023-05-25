import { ProviderRepository } from "../domain/ProviderRepository";

export class GetProvidersUseCase {
  constructor(
    readonly providerRepository: ProviderRepository
  ) {}

  async run() {
    const providers = await this.providerRepository.getProviders();
    return providers;
  }
}
