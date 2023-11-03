import {Item} from './Item.js';

export class Container {
  constructor(contents, anchor) {
    this._items = this.#getItems(contents);
    this._anchor = anchor;
    this.#attachToPage();
  }

  #getItems(contents) {
    const items = [];
    for (const content of contents) {
      const item = new Item(content);
      item.initListener(this.onClick.bind(this, item));
      items.push(item);
    }
    return items;
  }

  onClick(item) {}

  #attachToPage() {
    const anchor = this._anchor;
    for (const item of this._items) {
      const element = item.getElement();
      anchor.insertAdjacentElement('beforeend', element);
    }
  }
}
