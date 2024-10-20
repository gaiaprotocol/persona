import { RouterV2 } from "@common-module/app";
import { WalletService } from "@common-module/wallet";
import Home from "./Home.js";
import EditPersonaView from "./profile/EditPersonaView.js";
import PersonaView from "./profile/PersonaView.js";

export default async function init() {
  WalletService.init({
    name: "Persona by Gaia",
    icon: "",
    description: "",
    chains: {
      base: {
        id: 8453,
        symbol: "ETH",
        rpc: "https://mainnet.base.org",
        explorerUrl: "https://basescan.org",
      },
    },
    walletConnectProjectId: "7538ca3cec20504b06a3338d0e53b028",
  });

  RouterV2.route("", Home);
  RouterV2.route("admin", EditPersonaView);
  RouterV2.route("{walletAddressOrEnsName}", PersonaView);
}
