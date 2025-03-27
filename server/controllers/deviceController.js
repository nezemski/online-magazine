import path from "path";
import { v4 as uuid } from "uuid";
import { Device, DeviceInfo } from "../model/models";
import ApiError from "../error/ApiError";
import getDirname from "../utils/getDirname";

class DeviceController {
  async create(req, res, next) {
    try {
      let { name, price, brandId, typeId, info: infoJSON } = req.body;
      const { img } = req.files;
      const fileName = uuid() + ".jpg";
      img.mv(
        path.resolve(getDirname(import.meta.url), "..", "static", fileName)
      );

      const device = await Device.create({
        name,
        price,
        brandId,
        typeId,
        img: fileName,
      });

      if (infoJSON) {
        const info = JSON.parse(infoJSON);
        info.forEach((i) =>
          DeviceInfo.create({
            title: i.title,
            description: i.description,
            deviceId: device.id,
          })
        );
      }

      return res.json(device);
    } catch (error) {
      console.error("Error creating device: ", error);
      next(ApiError.badRequest(error.message));
    }
  }

  async getAll(req, res) {
    let { typeId, brandId, limit = 10, page = 1 } = req.query;
    let offset = limit * page - limit;
    let devices;

    if (!brandId && !typeId) {
      devices = await Device.findAndCountAll({ limit, offset });
    }

    if (!brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { typeId },
        limit,
        offset,
      });
    }

    if (brandId && !typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId },
        limit,
        offset,
      });
    }

    if (brandId && typeId) {
      devices = await Device.findAndCountAll({
        where: { brandId, typeId },
        limit,
        offset,
      });
    }

    return res.json(devices);
  }

  async getOne(req, res) {
    const { id } = req.params;
    const device = await Device.findOne({
      where: { id },
      include: [{ model: DeviceInfo, as: "info" }],
    });
    return res.json(device);
  }
}
const deviceController = new DeviceController();

export default deviceController;
