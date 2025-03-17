import ApiError from "../error/ApiError";
import { Type } from "../model/models";

class TypeController {
  async create(req, res) {
    const { name } = req.body;
    const type = await Type.create({ name });
    return res.json(type);
  }

  async getAll(req, res) {
    return res.json(await Type.findAll());
  }
}

const typeController = new TypeController();

export default typeController;
