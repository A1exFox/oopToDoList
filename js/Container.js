import {Item} from './Item.js';
import {Storate} from './Storage.js';
// Storate.set(['lorem10', 'call to mike', 'get laptop']);

export class Container {
  constructor(anchor) {
    this.#createItems();
    this._anchor = anchor;
    this.#attachToPage();
  }

  #createItems() {
    const dataArray = Storate.get();
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

  newItem() {}

  #removeItem(item) {
    const items = this._items;
    const contents = this._contents;
    const index = items.indexOf(item);
    items.splice(index, 1);
    contents.splice(index, 1);
    Storate.set(contents);
  }

  #attachToPage() {
    const anchor = this._anchor;
    const items = this._items;
    for (const item of items) {
      const element = item.getElement();
      anchor.insertAdjacentElement('afterbegin', element);
    }
  }
}
