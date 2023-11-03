import {Listener} from './Listener.js';

export class Item {
  constructor(content) {
    this._element = this.#createElement(content);
    const button = this.#getRemoveButton();
    this._listener = new Listener(button);
    // new Listener(button, this.onClick.bind(this));
  }

  getElement() {
    return this._element;
  }
  initListener(callback) {
    this._listener.init(callback);
  }

  #getRemoveButton() {
    const itemElement = this._element;
    const attribute = '[data-remove]';
    return itemElement.querySelector(attribute);
  }

  #createElement(content) {
    const element = document.createElement('li');
    element.classList.add('item');
    const html = `
    <p class="content">${content}</p>
    <button class="delete button" data-remove>×</button>`;
    element.insertAdjacentHTML('beforeend', html);
    return element;
  }
}
