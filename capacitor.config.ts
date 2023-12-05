import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.myapp.app',
  appName: 'my-ionic-app',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
