export class Listener {
  constructor(target, callback) {
    this.#init(target, callback);
  }
  #init(target, callback) {
    target.addEventListener('click', callback, {once: true});
  }
}
