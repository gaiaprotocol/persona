import { DomNode, el } from "@common-module/app";
import { Button } from "@common-module/app-components";
import { WalletLoginPopup } from "@common-module/wallet-login";

export default class Intro extends DomNode {
  constructor() {
    super(".intro");
    this.append(
      el("h1", "Welcome to Persona"),
      el(
        "p",
        "Create your Persona with your own story, and build a community of supporters who believe in you.",
      ),
      new Button({
        title: "Get Started",
        onClick: () => new WalletLoginPopup("Login with Crypto Wallet"),
      }),
    );
  }
}
