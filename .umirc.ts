import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  npmClient: 'pnpm',
  utoopack: {
    optimization: {
      moduleIds: "named",
      concatenateModules: false,
    }
  }
  // mako: {}
});
