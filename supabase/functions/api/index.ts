import { serveWithOptions } from "../_shared/api.ts";

serveWithOptions(async (req) => {
  const url = new URL(req.url);
  const uri = url.pathname.replace("/api/", "");

  if (uri === "save-persona") {
  }
});
