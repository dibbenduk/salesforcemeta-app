import { LightningElement, track } from "lwc";

export default class MetaContainer extends LightningElement {
  selectedObject;

  selectedFields;

  buttonClick;

  finalQuery;

  handleObjChange(evt) {
    this.selectedObject = evt.detail;
    // console.log("parent revd: " + this.selectedObject);
  }

  handlefieldChange(evt) {
    this.selectedFields = evt.detail;
    // console.log("parent revd: " + this.selectedFields);
  }

  handleButtonClick(evt) {
    this.buttonClick = evt.detail;
    // console.log("parent revd: "+ this.buttonClick);
  }

  handleReturnQuery(evt) {
    this.finalQuery = evt.detail;
    // console.log("parent revd: " + this.finalQuery);
  }
}
