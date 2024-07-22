import { BodyNode, Button, el, RouterV2, ViewV2 } from "@common-module/app";
import { WalletService } from "@common-module/wallet";
import { EditPersonaForm } from "gaiaprotocol";

export default class EditPersonaView extends ViewV2 {
  constructor() {
    super();
    this.container = el(
      "",
      new EditPersonaForm(),
      new Button({
        title: "Log out",
        onClick: async () => {
          await WalletService.logout();
          RouterV2.go("");
        },
      }),
    ).appendTo(BodyNode);

    if (!WalletService.loggedIn) RouterV2.go("");
  }
}
