import { api, LightningElement, track } from "lwc";

export default class QueryField extends LightningElement {
  query = "SELECT - FROM -";
  @track _objName = "";
  @track _fieldName = "";
  @track _btnClick = "";

  set objName(value = "-") {
    this._objName = value;
    // console.log("query revd: " + this._objName);
    this.query = `SELECT - FROM ${this._objName}`;
  }

  @api get objName() {
    return this._objName;
  }

  set fieldName(value = "-") {
    this._fieldName = value;
    // console.log("query revd: " + this._fieldName);
    this.query = `SELECT ${this._fieldName} FROM ${this._objName}`;
  }

  @api get fieldName() {
    return this._fieldName;
  }

  set btnClick(value) {
    this._btnClick = "";
    if (!this.query.includes("-")) {
      const event = new CustomEvent("returnquery", { detail: this.query });
      this.dispatchEvent(event);
      // console.log("query " + this.query);
    }
  }

  @api get btnClick() {
    return this._btnClick;
  }

  queryChanged(e) {
    this.query = e.target.value;
  }
}
