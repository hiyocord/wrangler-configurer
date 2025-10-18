import esbuild from 'esbuild';
import { nodeExternalsPlugin } from 'esbuild-node-externals';
import { execSync } from 'node:child_process';

await esbuild.build({
  entryPoints: [
    './src/index.ts',
    './src/cli.ts'
  ],
  outdir: "dist",
  bundle: true,
  minify: true,
  platform: 'node',
  sourcemap: true,
  format: 'esm',
  outExtension: {
    '.js': '.mjs'
  },
  packages: "external",
  tsconfig: "tsconfig.json",
  plugins: [
    nodeExternalsPlugin(),
    {
      name: "call tsc",
      setup(build) {
          build.onEnd(result => {
            execSync("tsc -p tsconfig.app.json", {
              stdio: "inherit",
            });
          })
      },
    }
  ]
})
