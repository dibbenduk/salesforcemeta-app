import { api, LightningElement, track, wire } from "lwc";
import getObjectFieldList from "@salesforce/apex/ReturnSObjectList.getObjectFieldList";

export default class FieldSelect extends LightningElement {
  @track selectedFields = [];
  @track _objName = '';
  @track fieldList = [];

  set objName(value) {
    this._objName = value;
    // console.log("field revd: " + this._objName);
  }
  
  @api get objName() {
    return this._objName;
  }
  
  @wire(getObjectFieldList, { strName: '$_objName' })
  wiredFieldList({ error, data }) {
    if (error) {
      this.error = error;
      console.log(error);
    } else if (data) {
      this.fieldList = data;
      this.selectedFields = [];
    }
  }

  get options() {
    let items = [];
    for (let i = 0; i < this.fieldList.length; i++) {
      let item = {
        label: this.fieldList[i],
        value: this.fieldList[i]
      };
      items.push(item);
    }
    return items;
  }

  handleChange(e) {    
    this.selectedFields = e.detail.value;
    //create event
    const event = new CustomEvent('fieldselected', {
      detail: this.selectedFields
    });
    //fire event
    this.dispatchEvent(event);
  }
}
