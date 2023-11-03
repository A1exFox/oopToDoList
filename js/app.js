import {Container} from './Container.js';
import {Form} from './Form.js';

const list = document.querySelector('[data-list]');
const container = new Container(list);
const form = new Form(container);
