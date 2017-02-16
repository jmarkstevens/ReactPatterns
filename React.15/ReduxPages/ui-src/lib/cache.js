//Singleton test

let instance = null;
export default class Cache{
  constructor() {
    if (!instance) instance = this;
    this.time = new Date();
    return instance;
  }
}
