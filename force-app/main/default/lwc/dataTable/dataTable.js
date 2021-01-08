import { api, LightningElement, wire, track } from "lwc";
import getRecords from "@salesforce/apex/ReturnSObjectList.getRecords";

export default class DataTable extends LightningElement {
  @track _finalQuery = "";
  fields = [];
  records = [];

  set finalQuery(value) {
    if (value !== undefined) {
      this._finalQuery = value;
      // console.log("datatable revd: " + this._finalQuery);
      this.fields = value.split(" ")[1].split(",");
      // console.log(this.fields);
    }
  }

  get columns() {

    let vals = [];
    for (let x in this.fields) {
      let val = {
        label: this.fields[x],
        fieldName: this.fields[x]
      };
      vals.push(val);
    }
    return vals;
  }

  @wire(getRecords, { que: "$_finalQuery" })
  wiredRecords({ error, data }) {
    if (error) {
      this.error = error;
      console.log(error);
    } else if (data) {
      this.records = data;
      console.log(data);
    }
  }

  get data() {
    return this.records;
  }

  @api get finalQuery() {
    return this._finalQuery;
  }
}
