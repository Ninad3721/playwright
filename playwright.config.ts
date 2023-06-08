import { defineConfig, devices, PlaywrightTestConfig } from '@playwright/test';

const config: PlaywrightTestConfig = {
  testMatch: ["assertion.test.ts"], // files that you want to test
  use:
  {
    headless: false,

  },
  reporter: [["html", { open: "never" }]]
}