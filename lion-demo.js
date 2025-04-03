import { html, LitElement } from 'lit';

// As a side-effect this way of importing defines the custom elements, eg. <lion-button>, ready for use
import '@lion/ui/define/lion-button.js';
import '@lion/ui/define/lion-tooltip.js';
import '@lion/ui/define/lion-input-amount.js';

export class LionDemo extends LitElement {
  static properties = {
    counter: { type: Number },
  };
  constructor() {
    super();
    this.counter = 5000;
  }
  render() {
    return html`
      <h1>Model value is: ${this.counter}</h1>
      <lion-input-amount
        .modelValue="${10000}"
        .formatOptions="${{ minimumFractionDigits: 0, maximumFractionDigits: 0 }}"
      >
        <span slot="after" data-description>EUR per month</span>
      </lion-input-amount>
    `;
  }
}
customElements.define('lion-demo', LionDemo);