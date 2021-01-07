import { LightningElement } from 'lwc';

export default class QueryButton extends LightningElement {
  num = 0;

  handleClick() {
    let str = 'click' + this.num.toString();
    this.num++;
    const event = new CustomEvent('btnclick', {
      detail: str
    });
    this.dispatchEvent(event);
  }
}