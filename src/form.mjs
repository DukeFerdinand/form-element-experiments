import {html, LitElement} from 'lit-element'

export class MyForm extends LitElement {
    firstUpdated() {
        const form = this.shadowRoot.querySelector('form')
        const inputs = this.renderRoot.querySelector('slot').assignedElements()

        for (const input of inputs) {
            input.form = form
        }
    }

    render() {
        return html`
            <form>
                <slot></slot>
            </form>
        `
    }
}
