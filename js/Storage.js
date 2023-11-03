export class Storage {
  static #getData() {
    const data = localStorage.getItem('todo') || '[]';
    return data;
  }
  static #setData(data) {
    localStorage.setItem('todo', data);
  }
  static get() {
    const string = this.#getData();
    const data = JSON.parse(string);
    return data;
  }
  static set(data) {
    const string = JSON.stringify(data);
    this.#setData(string);
  }
}
