import {Listener} from './Listener.js';

export class Item {
  constructor(content, callback) {
    this._element = this.#createElement(content);
    this._callback = callback;
    const button = this.#getRemoveButton();
    const onclick = this.#removeElement.bind(this);
    new Listener(button, onclick);
  }

  getElement() {
    return this._element;
  }

  #removeElement() {
    this._element.remove();
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
