import {QueueChildMessage} from './types';

export default class Queue {
  data: Array<QueueChildMessage | null>;
  offset: number;

  constructor() {
    this.data = [];
    this.offset = 0;
  }

  push = (item: QueueChildMessage) => this.data.push(item);

  shift = () => {
    const item = this.data[this.offset];

    this.data[this.offset] = null;
    this.offset++;

    return item;
  };

  flush = () => {
    if (this.offset === this.data.length) {
      this.data = [];
      this.offset = 0;
    }
  };
}
