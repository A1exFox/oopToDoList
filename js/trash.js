// const list = document.querySelector('[data-list]');
// const li = document.createElement('li');
// li.classList.add('item');
// const html = `<p class="content" data-item>
//   Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//   Perspiciatis voluptate tempore aliquid recusandae ipsum, porro
//   tenetur eos? Sit, totam alias?
// </p>
// <button class="delete button">×</button>`;

// li.insertAdjacentHTML('beforeend', html);
// addOnceEventListener(li);
// list.append(li);

// function onClick(event) {
//   if (!event.target.closest('.delete')) {
//     addOnceEventListener(li);
//     // li.removeEventListener('click', onClick);
//     return;
//   }
//   console.log(event.target);
// }

// function addOnceEventListener(element) {
//   element.addEventListener('click', onClick, {once: true});
// }

// import {Listener} from './Listener.js';

// export class Item {
//   constructor(content, anchor, selector) {
//     // this._element = this.#createElement(content, selector);
//     // this._removeElement = this.#getRemoveButton();
//     // this._listener = new Listener('click', this.OnClick);
//     // this.attach(anchor);
//     // listener.init(container, this.OnClick);
//   }

//   OnClick() {
//     console.log('click');
//   }

//   #getRemoveButton() {}

//   #createElement(content, selector) {
//     const element = document.createElement('li');
//     element.classList.add(selector);
//     const html = this.#getHTML(content);
//     element.insertAdjacentHTML('beforeend', html);
//     return element;
//   }

//   #getHTML(content) {
//     return `
//     <p class="content">${content}</p>
//     <button class="delete button" data-remove>×</button>`;
//   }
//   attach(anchor) {
//     anchor.insertAdjacentElement('beforeend', this._element);
//   }
// }
