import { BodyNode, el, View } from "@common-module/app";
import { WalletLoginManager } from "@common-module/wallet";
import Home from "./components/Home.js";
import Intro from "./components/Intro.js";

export default class App extends View {
  constructor() {
    super();
    this.render();
    WalletLoginManager.on("loginStatusChanged", () => this.render());
  }

  private render() {
    this.container?.remove();
    this.container = el(
      "#app",
      WalletLoginManager.loggedIn ? new Home() : new Intro(),
    ).appendTo(BodyNode);
  }
}
