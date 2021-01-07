import { api, LightningElement, wire } from "lwc";
import getObjectList from "@salesforce/apex/ReturnSObjectList.getObjectList";

export default class ObjectSelect extends LightningElement {
  value = "";

  @api
  objectList = [];

  @wire(getObjectList, {})  
  wiredObjectList({ error, data }) {
    if (error) {
      this.error = error;
      console.log(error);
    } else if (data) {
      this.objectList = data;
    }
  }
  
  get options() {    
    let items = [];
    for (let i = 0; i < this.objectList.length; i++) {
      let item = {
        label: this.objectList[i],
        value: this.objectList[i]
      };
      items.push(item);
    }
    return items;
  }

  handleChange(evt) {
    this.value = evt.detail.value;
    //create event
    const event = new CustomEvent('objchange', {
      detail: this.value
    });
    //fire event
    this.dispatchEvent(event);
  }
}
