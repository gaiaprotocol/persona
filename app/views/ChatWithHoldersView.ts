import { el, View } from "@common-module/app";
import Layout from "./Layout.js";

export default class ChatWithHoldersView extends View {
  constructor() {
    super();
    Layout.content = this.container = el(".chat-with-holders-view");
  }
}
