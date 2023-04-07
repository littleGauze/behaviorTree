export default class Singleton {
  static _instance: any = null

  static getInstance<T>(): T {
    if (!this._instance) {
      this._instance = new this()
    }
    return this._instance
  }
}