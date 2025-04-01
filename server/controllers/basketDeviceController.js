import { Basket, BasketDevice, Device } from "../model/models";

class BasketDeviceController {
  async create(req, res) {
    const { deviceId } = req.body;
    const { id } = req.user;

    const basket = await Basket.findOne({ where: { userId: id } });

    const basketDevice = await BasketDevice.create({
      deviceId,
      basketId: basket.id,
    });
    return res.json(basketDevice);
  }

  async getAll(req, res) {
    const { id } = req.user;

    const basket = await Basket.findOne({ where: { userId: id } });

    const basketDevice = await BasketDevice.findAll({
      where: { basketId: basket.id },
      include: [{ model: Device, as: "device" }],
    });
    return res.json(basketDevice);
  }

  async deleteDeviceBasket(req, res) {
    const { id } = req.params;
    const deviceBasket = await BasketDevice.destroy({
      where: { id },
    });
    return res.json(deviceBasket);
  }
}

const basketDeviceController = new BasketDeviceController();
export default basketDeviceController;
