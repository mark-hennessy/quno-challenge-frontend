import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
  testDir: "e2e",
  use: {
    baseURL: "http://localhost:3000",
    headless: false,
    viewport: { width: 414, height: 736 },
    ignoreHTTPSErrors: true,
    video: "off",
  },
};

export default config;
