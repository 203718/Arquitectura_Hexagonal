import Provider from "../domain/Provider";
import { ProviderRepository } from "../domain/ProviderRepository";


export class ProviderRepositoryImp implements ProviderRepository {
  async getProviders(): Promise<Provider | null> {
    const providers = Provider.findAll();

    if (!providers) return null;
    return providers as any; 
  }

}
