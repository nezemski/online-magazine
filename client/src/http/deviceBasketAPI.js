import { $authHost } from ".";

export const createDeviceBasket = async (deviceBasket) => {
  const { data } = await $authHost.post("api/basket", deviceBasket);
  return data;
};

export const fetchDeviceBasket = async (basketId) => {
  const { data } = await $authHost.get("api/basket", { params: { basketId } });
  return data;
};

export const deleteDeviceBasket = async (deviceBasketId) => {
  const { data } = await $authHost.delete(`api/basket/${deviceBasketId}`);
  return data;
};
