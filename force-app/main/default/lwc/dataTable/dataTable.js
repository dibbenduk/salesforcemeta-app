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
    /*
    let items = [];
    let field = '';
    for (let i = 0; i < this.fields.length; i++) {
      field = this.fields[i].charAt(0).toUpperCase() + this.fields[i].slice(1);
      let item = {
        label: field,
        fieldName: field
      };
      items.push(item);
    }
    return items;
    */
    let vals = [];
    for (let x in this.records[0]) {
      let val = {
        label: x,
        fieldName: x
      };
      vals.push(val);
    }
    return vals;

    /*
   if(this.records !== undefined) {
    let arr1 = [];
    let arr2 = this.fields;
    console.log(this.records[0]);
    for (let x in this.records[0]) {
      arr1.push(x.toString());
    }
    console.log(arr1);
    console.log(arr2);

    let vals = [];
    let i = 0;
    let j = 0;
    while (i < arr2.length) {
      if (arr2[i] === arr1[j].toLowerCase()) {
        let val = {
          label: arr1[j],
          fieldName: arr1[j]
        };
        vals.push(val);
        i++, j++;
      } else {
        let val = {
          label: arr2[i],
          fieldName: arr2[i]
        };
        vals.push(val);
        i++;
      }
    }
    return vals;
  }*/
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
