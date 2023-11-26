import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'hawk',
  exposes: {
    './Module': 'app/department/hawk/src/app/remote-entry/entry.module.ts',
  },
};

export default config;
