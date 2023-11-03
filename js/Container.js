import {Item} from './Item.js';
import {Storate} from './Storage.js';
// Storate.set(['lorem10', 'call to mike', 'get laptop']);

export class Container {
  constructor(anchor) {
    this._items = this.#createItems();
    this._anchor = anchor;
    this.#attachToPage();
  }

  #createItems() {
    const contents = Storate.get();
    const items = contents.map((content) => this.#createItem(content));
    return items;
  }
  #createAndSetItem(content) {}
  #createItem(content) {
    const callback = this.#removeItem.bind(this);
    this._contents = this._contents || [];
    this._contents.push(content);
    return new Item(content, callback);
  }

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
