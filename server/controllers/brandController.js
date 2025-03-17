import { Brand } from "../model/models";

class BrandController {
  async create(req, res) {
    const { name } = req.body;
    const brand = await Brand.create({ name });
    return res.json(brand);
  }

  async getAll(req, res) {
    return res.json(await Brand.findAll());
  }
}
const brandController = new BrandController();

export default brandController;
