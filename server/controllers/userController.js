import ApiError from "../error/ApiError.js";

class UserController {
  async registration(req, res) {}

  async login(req, res) {}

  async check(req, res, next) {
    const { id } = req.query;
    if (!id) {
      return next(ApiError.badRequest("Не задан id"));
    }
    res.json(id);
  }
}
const userController = new UserController();

export default userController;
