import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'gateway',
  remotes: ['hawk'],
};

export default config;
