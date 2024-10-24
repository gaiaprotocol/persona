import { el, View } from "@common-module/app";
import Layout from "./Layout.js";

export default class PersonaView extends View {
  constructor() {
    super();
    Layout.content = this.container = el(".persona-view");
  }

  public changeData(data: { walletAddress: string }): void {
    console.log(data);
  }
}
