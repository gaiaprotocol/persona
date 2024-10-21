import { el, View } from "@common-module/app";
import Layout from "./Layout.js";

export default class NotificationsView extends View {
  constructor() {
    super();
    Layout.content = this.container = el(".notifications-view");
  }
}
