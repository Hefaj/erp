import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'gateway',
  remotes: ['account', 'hawk'],
};

export default config;
