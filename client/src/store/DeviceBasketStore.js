import { makeAutoObservable } from "mobx";

export default class DeviceBasketStore {
  constructor() {
    this._deviceBasket = [];
    makeAutoObservable(this);
  }

  setDeviceBasket(deviceBasket) {
    this._deviceBasket = deviceBasket;
  }

  get deviceBasket() {
    return this._deviceBasket;
  }
}
