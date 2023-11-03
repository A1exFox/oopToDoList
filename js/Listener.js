export class Listener {
  constructor(target, callback) {
    this._callback = callback;
    this.#init(target);
  }
  #init(target) {
    const handler = this.#handler.bind(this);
    target.addEventListener('click', handler, {once: true});
  }
  #handler() {
    this._callback();
  }
}
