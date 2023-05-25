import Provider  from "./Provider";

export interface ProviderRepository {
  getProviders(): Promise<Provider | null>;
}
