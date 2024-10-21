import { BodyNode, DomNode, el, View } from "@common-module/app";
import Navbar from "../components/Navbar.js";
import PersonaLogo from "../components/PersonaLogo.js";
import { WalletAvatar } from "@common-module/wallet";

export default class Layout extends View {
  private static current: Layout;

  public static set content(content: DomNode) {
    Layout.current.contentContainer.append(content);
  }

  private contentContainer: DomNode;

  constructor() {
    super();
    Layout.current = this;

    this.container = el(
      ".layout",
      el(
        "header",
        new PersonaLogo(),
        new WalletAvatar("0xbb22b6f3ce72a5beb3cc400d9b6af808a18e0d4c", {
          size: 40,
        }),
      ),
      this.contentContainer = el("main"),
      new Navbar(),
    ).appendTo(BodyNode);
  }
}
