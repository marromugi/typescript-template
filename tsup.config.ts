import { defineConfig } from "tsup";

export default defineConfig(async () => {
  return {
    // entry: await globby("./src/components/**/index.ts"),
    minify: true,
    sourcemap: true,
    treeshake: true,
    dts: true,
    clean: true,
    format: ["esm", "cjs"],
  };
});
