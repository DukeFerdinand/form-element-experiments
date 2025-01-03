import { html, LitElement } from "lit-element";

export class MyInput extends LitElement {
    static formAssociated = true;

    constructor() {
        super();

        // Form references. Both are instances of `HTMLFormElement`, obtained through different means
        this.form = null;
        this.internals = this.attachInternals();
    }

    get formReference() {
        return this.internals?.form || this.form
    }

    static properties() {
        return {
            name: {
                type: String,
                reflect: true
            }
        }
    }

    render() {
        console.log(this.name, this.formReference)
        return html`
            <input placeholder="${this.name}" name="${this.name}" />
        `
    }
}
