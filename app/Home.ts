import { BodyNode, Button, el, RouterV2, ViewV2 } from "@common-module/app";
import { WalletService } from "@common-module/wallet";

export default class Home extends ViewV2 {
  constructor() {
    super();
    this.container = el(
      ".home-view",
      new Button({
        title: "Log in",
        onClick: async () => {
          await WalletService.login();
          RouterV2.go("admin");
        },
      }),
    ).appendTo(BodyNode);

    if (WalletService.loggedIn) RouterV2.go("admin");
  }
}
