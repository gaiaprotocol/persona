import { GaiaProtocolConfig } from "gaiaprotocol";

export interface IAppConfig {
  isDevMode: boolean;
  isTestnet: boolean;
}

class AppConfig implements IAppConfig {
  public isDevMode!: boolean;
  public isTestnet!: boolean;

  public init(config: IAppConfig) {
    Object.assign(this, config);

    GaiaProtocolConfig.init(config.isDevMode, config.isTestnet);
  }
}

export default new AppConfig();
