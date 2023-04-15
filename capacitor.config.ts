import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'capacitor-app',
  webDir: 'build',
  bundledWebRuntime: false,
  server: {
    // url: SUA URL IPV4:LOCAL,
    cleartext: true
  }
};

export default config;
