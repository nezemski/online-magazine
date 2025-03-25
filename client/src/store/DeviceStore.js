import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [
      {
        id: 1,
        name: "Холодильники",
      },
      {
        id: 2,
        name: "Телефоны",
      },
    ];
    this._brands = [
      {
        id: 1,
        name: "Bork",
      },
      {
        id: 2,
        name: "Apple",
      },
    ];
    this._devices = [
      {
        id: 1,
        name: "Bork3",
        price: 120000,
        raiting: 5,
        img: "https://alif05.ru/upload/iblock/103/gqwug9x56egkh3icxlbcg48z5ugvi0re.jpg",
      },
      {
        id: 2,
        name: "Iphone 12 Pro",
        price: 50000,
        raiting: 4.9,
        img: "https://apple-com.ru/image/cache/catalog/product/iphone%2012%20pro/6335c378162da522ea6f4d1663f75220-2272x3112.jpg.webp",
      },
    ];
    this._selectedType = {};
    makeAutoObservable(this);
  }

  setTypes(types) {
    this._types = types;
  }

  setDevices(devices) {
    this._devices = devices;
  }

  setBrands(brands) {
    this._brands = brands;
  }

  setSelectedType(type) {
    this._selectedType = type;
  }

  get types() {
    return this._types;
  }

  get brands() {
    return this._brands;
  }

  get devices() {
    return this._devices;
  }

  get selectedType() {
    return this._selectedType;
  }
}
