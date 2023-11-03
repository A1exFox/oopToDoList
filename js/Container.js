import {Item} from './Item.js';
import {Storage} from './Storage.js';

export class Container {
  static anchor = document.querySelector('[data-list]');
  constructor() {
    this.#initItems();
    this.#attachToAnchor();
  }

  #initItems() {
    const dataArray = Storage.get();
    const callback = this.#removeItem.bind(this);
    const contents = [];
    const items = [];
    for (const data of dataArray) {
      contents.push(data);
      items.push(new Item(data, callback));
    }
    this._contents = contents;
    this._items = items;
  }

  newItem(content) {
    const isExistContent = this._contents.includes(content);
    if (isExistContent) {
      alert(`${content} is exist.`);
      return;
    }
    const callback = this.#removeItem.bind(this);
    this._contents.push(content);
    this._items.push(new Item(content, callback));
    Storage.set(this._contents);
    this.#attachToAnchor(this._contents);
  }

  #removeItem(item) {
    const items = this._items;
    const contents = this._contents;
    const index = items.indexOf(item);
    items.splice(index, 1);
    contents.splice(index, 1);
    Storage.set(contents);
  }

  #attachToAnchor() {
    const items = this._items;
    for (const item of items) {
      const element = item.getElement();
      Container.anchor.insertAdjacentElement('afterbegin', element);
    }
  }
}
