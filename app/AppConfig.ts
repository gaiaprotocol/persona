export interface IAppConfig {
  isDevMode: boolean;
  isForSepolia: boolean;

  supabaseUrl: string;
  supabaseKey: string;
}

class AppConfig implements IAppConfig {
  public isDevMode!: boolean;
  public isForSepolia!: boolean;
  public supabaseUrl!: string;
  public supabaseKey!: string;

  public init(config: IAppConfig) {
    Object.assign(this, config);
  }
}

export default new AppConfig();
