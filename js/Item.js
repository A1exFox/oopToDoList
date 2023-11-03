import {Listener} from './Listener.js';

export class Item {
  constructor(content, callback) {
    this._element = this.#createElement(content);
    this._callback = callback;
    const button = this.#getRemoveButton();
    new Listener(button, this.onClick.bind(this));
  }

  getElement() {
    return this._element;
  }

  onClick() {
    this._callback(this);
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
