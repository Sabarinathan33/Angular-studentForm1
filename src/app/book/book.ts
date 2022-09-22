export class Book {
  id: number;
  title: string;
  author: string;
  price: number;
  constructor(values: Object = {}) {
    Object.assign(this, values);
  }
}