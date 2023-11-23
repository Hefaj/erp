import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'account',
  exposes: {
    './Module': 'app/account/account/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
