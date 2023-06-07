import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["lamdatest.test.ts"] // files that you want to test

}