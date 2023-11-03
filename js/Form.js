export class Form {
  static formElement = document.querySelector('[data-form]');
  static inputElement = document.querySelector('[data-input]');
  constructor(container) {
    this._container = container;
    this.#initListener();
  }
  #submitHandler(event) {
    event.preventDefault();
    const newItem = Form.inputElement.value;
    if (!newItem) return;
    this._container.newItem(newItem);
    Form.inputElement.value = '';
  }

  #initListener() {
    const handler = this.#submitHandler.bind(this);
    Form.formElement.addEventListener('submit', handler);
  }
}
