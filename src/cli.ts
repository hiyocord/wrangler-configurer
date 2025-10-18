#!/usr/bin/env node
import { pathToFileURL } from "node:url";
import { resolve } from "node:path";
import { existsSync } from "node:fs";
import { generate } from "./generator";


(async () => {
  const configPath = resolve(process.cwd(), "wrangler.config.ts");

  if (!existsSync(configPath)) {
    console.error("wrangler.config.ts not found");
    process.exit(1);
  }

  const fileUrl = pathToFileURL(configPath).href;

  try {
    const module = await import(fileUrl);
    const config = module.default ?? module;

    generate(config.params)
  } catch (err) {
    console.error("Failed to load wrangler.config.ts:", err);
    process.exit(1);
  }
})()
