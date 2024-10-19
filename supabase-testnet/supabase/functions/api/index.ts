import {
  Context,
  startServer,
} from "https://raw.githubusercontent.com/yjgaia/deno-module/main/api.ts";
import { serveWalletApi } from "https://raw.githubusercontent.com/yjgaia/wallet-login-module/main/deno/wallet.ts";
import { serveContractApi } from "https://raw.githubusercontent.com/yjgaia/contract-module/main/deno/contract.ts";

startServer(
  serveWalletApi,
  serveContractApi(
    {
      "base-sepolia": "https://sepolia.base.org",
    },
    {},
    {},
  ),
  async (context: Context) => {
    const url = new URL(context.request.url);
    const uri = url.pathname.replace("/api/", "");

    //TODO: Add your API endpoints here
  },
);
