import { BodyNode, el, View } from "@common-module/app";

export default class App extends View {
  constructor() {
    super();

    this.container = el(
      "#app",
      "Hello, world!",
    ).appendTo(BodyNode);
  }
}
