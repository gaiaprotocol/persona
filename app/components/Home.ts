import { DomNode } from "@common-module/app";

export default class Home extends DomNode {
  constructor() {
    super(".home");
    this.text = "Home";
  }
}
