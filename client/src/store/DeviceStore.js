import { makeAutoObservable } from "mobx";

export default class DeviceStore {
  constructor() {
    this._types = [];
    this._brands = [];
    this._devices = [];
    this._selectedType = {};
    this._selectedBrand = {};
    this._page = 1;
    this._totalCount = 0;
    this._limit = 3;
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

  setSelectedBrand(brands) {
    this._selectedBrand = brands;
  }

  setPage(page) {
    this._page = page;
  }

  setTotalCount(totalCount) {
    this._totalCount = totalCount;
  }

  setLimit(limit) {
    this._limit = limit;
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

  get selectedBrand() {
    return this._selectedBrand;
  }

  get page() {
    return this._page;
  }

  get totalCount() {
    return this._totalCount;
  }

  get limit() {
    return this._limit;
  }
}
