import {Item} from './Item.js';

export class Container {
  constructor(contents, anchor) {
    this._items = this.#getItems(contents);
    this._anchor = anchor;
    this.#attachToPage();
  }

  #getItems(contents) {
    const items = [];
    const callback = this.#removeItems.bind(this);
    for (const content of contents) {
      items.push(new Item(content, callback));
    }
    return items;
  }

  #removeItems(item) {
    const items = this._items;
    const index = items.indexOf(item);
    items.splice(index, 1);
  }

  #attachToPage() {
    const anchor = this._anchor;
    const items = this._items;
    for (const item of items) {
      const element = item.getElement();
      anchor.insertAdjacentElement('beforeend', element);
    }
  }
}
