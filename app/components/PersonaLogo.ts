import { DomNode, Router } from "@common-module/app";

export default class PersonaLogo extends DomNode {
  constructor() {
    super("a.persona-logo");
    this.onDom("click", () => Router.go("/"));

    const imageHeight = 28;
    const svgHeight = 15;

    const dataUrl =
      "data:image/png;base64,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";
    const svg = '<svg fill="none" height="' + svgHeight +
      '" viewBox="0 0 2286 385" xmlns="http://www.w3.org/2000/svg" style="display: block;"><path fill-rule="evenodd" fill="currentColor" d="M2277.758 378.542c-5 0-42.5 0-76-1-9.5-.5-12.5-1-12.5-3.5 0-1.5 1.5-3 3.5-3.5 2-1 5-3.5 2-11l-39.5-100.5c-1-1.5-2-2.5-4-2.5h-91c-2.5 0-4 1.5-5 4l-22 62.5c-5 14-8.5 27.5-8.5 35.5 0 9 5.5 13 16.5 13h3.5c4.5 0 6 1.5 6 3.5 0 2.5-4 3.5-7.5 3.5-11 0-34-1.5-39.5-1.5-5 0-27 1.5-48 1.5-5.5 0-8-1-8-3.5 0-2 2-3.5 6-3.5 2.5 0 7 0 10-.5 21.5-2 30-18.5 38.5-39.5l100-263.5c5.5-14.5 7-17 10.5-17 2.5 0 4.5 2 10 16 7 16.5 75 191 101.5 253.5 16.5 39.5 31 46 38 48.5 6.5 2.5 13.5 2.5 17 2.5s6 1 6 3.5-2 3.5-7.5 3.5m-131-142.5-39.5-110.5c-2.5-7-3-7-5.5 0l-37.5 110.5c-1 2 0 3 1 3h80c2 0 2-1.5 1.5-3m-236.5-170.5c-11.5 2.5-15 7.5-15 37.5l-1 251c0 25-1 27.5-4.5 27.5s-8.5-3.5-33-26.5c-2-1-71.5-70-115-112.5-52-54-102-106-114.5-119l6.5 195.5c1 34.5 4 47.5 16.5 50.5 8 2 16.5 2 20.5 2s6 1.5 6 3.5c0 2.5-2.5 3.5-8 3.5-27 0-45-1.5-48.5-1.5s-22 1.5-43.5 1.5c-4.5 0-7.5-.5-7.5-3.5 0-2 2-3.5 7-3.5 3.5 0 9 0 15.5-2 11-3.5 13.5-17 13.5-53.5 0-238.5.5-161.5 0-244.5 0-15.5 1.5-20.5 5.5-20.5 3.5 0 12 10 15.5 13.5 4.5 5 74 76 144 147.5 39 38 89 89.5 102 101.5l-5.5-208c-.5-27-3.5-36-17-39.5-8.5-1.5-16-2-19.5-2-5 0-6-2-6-4 0-2.5 4-3 9-3 21.5 0 42.5 1.5 47 1.5 5 0 20.5-1.5 40-1.5 5.5 0 7 .5 7 3 0 2-1.5 3.5-4.5 4s-7 .5-12.5 1.5m-574 318.5c-122.5 0-172.5-91-172.5-167 0-66.5 51.5-166 175-166 99 0 174.5 59 174.5 159.5 0 95.5-70.5 173.5-177 173.5m-.5-317.5c-69.5 0-125.5 43-125.5 137.5 0 98 54.5 163 138.5 163 33.5 0 117.5-17 117.5-144 0-100.5-62-156.5-130.5-156.5m-303.5 127c52 40 65.5 66.5 65.5 102 0 18-7.5 50-38 71-19.5 12.5-43.5 17.5-67.5 17.5-21 0-40.5-2.5-59.5-11-6.5-3-6.5-5-6.5-17 0-23 1.5-40 2-47 .5-4.5 1.5-7 4-7s3.5 1.5 3.5 5c0 3 0 9 1.5 15 6.5 32.5 36 45 65 45 41.5 0 61.5-28.5 61.5-53.5 0-28.5-13-46-49.5-75.5l-20-15.5c-48-38.5-58-65-58-94.5 0-46 36.5-77 92.5-77 17.5 0 29.5 1.5 40.5 4 9.5 2 13.5 2.5 17 2.5s4.5 1 4.5 3-2 19.5-2 48.5c0 7.5-1 10.5-3.5 10.5s-3-2-3.5-5.5c-.5-4.5-1.5-15-6-23.5-2.5-4.5-14-23.5-56-23.5-30 0-52.5 18-52.5 48 0 23.5 12 38 53.5 69.5zm-118.5 185h-35c-23.5 0-34.5-1.5-45.5-6-21-9-36-31.5-62-65-19.5-24-39.5-51-48-61.5-2-2-3-3-6-3l-51.5-.5c-2 0-2.5.5-2.5 2.5v7c0 40 0 76.5 2.5 94.5 1.5 12 3 22 19.5 24 5 .5 10.5 1 14.5 1 4.5 0 6.5 1.5 6.5 3 0 2.5-2 4-7 4-26 0-54-1.5-56-1.5-8 0-30 1.5-43.5 1.5-5 0-7-1-7-4 0-1.5 3-3 6-3 3.5 0 7 0 11-1 8.5-1.5 11.5-7 13-19 2.5-18 2-59 2-96.5v-75c0-66 0-78-1-91.5s-4.5-21-20-24c-3-.5-8-1-12-1-3.5 0-5.5-1-5.5-3s1.5-3.5 6-3.5c21.5 0 52 1.5 53 1.5 4.5 0 38.5-1.5 52.5-1.5 28 0 58.5 2.5 82 19 9.5 7 30 27 30 61 0 27.5-13.5 62.5-53 94.5 36.5 45 66.5 82 92 108.5 24 24.5 39 28.5 53 30.5 3.5.5 14 1 15.5 1 4 0 5.5 1.5 5.5 3.5 0 2.5-2 3.5-9 3.5m-145-221.5c0-54.5-29-84.5-73.5-84.5-12.5 0-23 1-29 2.5-1.5.5-3 2-3 4.5v136c0 2.5.5 5 2.5 6 6.5 3.5 26.5 6.5 44.5 6.5 10.5 0 23-.5 33.5-7.5 15-9.5 25-31.5 25-63.5m-283.5 222.5c-33 0-47-1-64.5-1-17.5-.5-40.5-1.5-59-1.5-11.5 0-21 1.5-33 1.5-4.5 0-7-1-7-3.5 0-2 2-3.5 4.5-3.5 3 0 6.5-.5 10-1.5 9-2 15-8.5 16-39.5.5-17 1-37.5 1-75.5v-75c0-65.5 0-77.5-1-91-1-14-4.5-21-19-24-3-.5-8-1-12-1-3.5 0-6.5-1.5-6.5-3 0-3 2.5-4 7.5-4 10 0 23.5 1 51.5 1.5 2.5 0 91.5 0 101.5-.5s15.5-1 19.5-2.5c3-1 3.5-1.5 5.5-1.5 1 0 2 1 2 3.5 0 3-3 10-4 22.5-.5 8.5-1 16.5-1.5 26 0 4.5-1 7.5-3.5 7.5s-3.5-2-3.5-5.5c-.5-7.5-2-12.5-3.5-16-3-10-7.5-13.5-32.5-15-6.5-.5-56-1-57-1-1.5 0-2.5 1-2.5 4v113.5c0 3 .5 5 3 5 6 0 57-.5 67.5-1.5 11.5-.5 19-2 23-7.5 2-3 3.5-4 5.5-4 1 0 2 .5 2 3s-2 12-3.5 26.5c-1.5 14-1.5 24-2 30.5-.5 4-1.5 5.5-3.5 5.5-2.5 0-3-3-3-6.5 0-3-.5-8-1.5-12-2-6.5-5-13.5-24-15-11.5-1-52-2-60-2-3 0-3.5 1.5-3.5 3.5v36.5c0 15.5-.5 59.5 0 68 1 18.5 3.5 28 14 32.5 7.5 3.5 19.5 4.5 36.5 4.5 9.5 0 25.5.5 38-3 15-4.5 18.5-14.5 22.5-33 1-5 2.5-7 4.5-7 3 0 3 4.5 3 7.5 0 3.5-4 35-5.5 43.5-2 10-5.5 11-22 11m-362.5-172c-2.5 0-8 0-10.5-.5-2.5 0-5.5-1-5.5-3.5 0-4 3-4.5 13.5-4.5 48.5 0 86.5-33 86.5-85.5 0-12.5-1.5-46-28-73s-57-25-68.5-25c-8.5 0-17 1-21.5 3-3 1-4 4.5-4 9.5v205.5c0 48 0 87.5 2.5 108.5 1.5 14.5 4.5 25.5 19.5 27.5 7 1 18 2 22.5 2 3 0 4 1.5 4 3 0 2.5-2.5 4-8 4-27.5 0-59-1.5-61.5-1.5-1.5 0-33 1.5-48 1.5-5.5 0-8-1-8-4 0-1.5 1-3 4-3 4.5 0 10.5-1 15-2 10-2 12.5-13 14.5-27.5 2.5-21 2.5-60.5 2.5-108.5v-88c0-78 0-92-1-108-1-17-5-25-21.5-28.5-4-1-12.5-1.5-17-1.5-2 0-4-1-4-3 0-3 2.5-4 8-4 22.5 0 52.5 1.5 56.5 1.5 11 0 40-1.5 63-1.5 62.5 0 85 21 93 28.5 11 10.5 25 33 25 65.5 0 65-52 113-123 113"/></svg>';
    this.htmlElement.innerHTML = '<img height="' + imageHeight + '" src="' +
      dataUrl + '">' + svg;
  }
}