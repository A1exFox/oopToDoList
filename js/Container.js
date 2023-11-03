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
      items.push(new Item(content, this.onClick.bind(this)));
    }
    return items;
  }

  onClick(target) {
    console.log(this);
    console.log(target);
  }

  #attachToPage() {
    const anchor = this._anchor;
    for (const item of this._items) {
      const element = item.getElement();
      anchor.insertAdjacentElement('beforeend', element);
    }
  }
}
