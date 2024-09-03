import { Router } from "@common-module/app";
import { SupabaseConnector } from "@common-module/supabase";
import {
  UniversalWalletConnector,
  WalletTokenManager,
} from "@common-module/wallet";
import App from "./App.js";

export default async function init(config: { sepolia?: boolean }) {
  SupabaseConnector.init({
    supabaseUrl: "https://vmupqxwvlmseafwjkzck.supabase.co",
    supabaseKey:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZtdXBxeHd2bG1zZWFmd2premNrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjIwNjY0NzIsImV4cCI6MjAzNzY0MjQ3Mn0.iU_55iFWJ9XLeONxMq3mrdQoCFjyAvbdPe5Lbtcl3E4",
    tokenManager: WalletTokenManager,
  });

  UniversalWalletConnector.init({
    name: "Persona",
    icon: "https://persona.gaia.cc/images/icon-192x192.png",
    description:
      "Create your Persona with your own story, and build a community of supporters who believe in you.",
    walletConnectProjectId: "7538ca3cec20504b06a3338d0e53b028",
    chains: {
      base: {
        id: config.sepolia ? 84532 : 8453,
        symbol: "ETH",
        rpc: `https://${config.sepolia ? "sepolia" : "mainnet"}.base.org`,
        explorerUrl: `https://${config.sepolia ? "sepolia" : ""}.basescan.org`,
      },
    },
  });

  Router.route("", App);
}
