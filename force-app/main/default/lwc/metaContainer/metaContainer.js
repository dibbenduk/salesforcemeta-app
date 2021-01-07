import { LightningElement } from 'lwc';

export default class MetaContainer extends LightningElement {
  selectedObject;

  selectedFields;

  handleObjChange(evt) {
    this.selectedObject = evt.detail;
    // console.log("parent revd: " + this.selectedObject);
  }

  handlefieldChange(evt){
    this.selectedFields = evt.detail;
    // console.log("parent revd: " + this.selectedFields);
  }
}