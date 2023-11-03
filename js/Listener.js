export class Listener {
  constructor(target) {
    this._target = target;
  }
  init(callback) {
    this._target.addEventListener('click', callback, {once: true});
  }
}
