import { serveWithOptions } from "https://raw.githubusercontent.com/yjgaia/deno-module/main/api.ts";

serveWithOptions(async (req) => {
  const url = new URL(req.url);
  const uri = url.pathname.replace("/api/", "");

  if (uri === "save-persona") {
  }
});
