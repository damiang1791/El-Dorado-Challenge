import { Request, ResponseToolkit } from "@hapi/hapi";
import { GetItemByIdUseCase } from "../../application/get-item-by-id.use-case";
import itemRepositoryImpl from "../../../db/infrastructure/repositories/item.repository.impl";

class getItemByIdController {
  constructor(private useCase: GetItemByIdUseCase) {}

  async run(req: Request, res: ResponseToolkit) {
    const { id } = req.params;

    const item = await this.useCase.run(id);

    if (!item) return res.response({ id }).code(404);

    return res.response(item).code(200);
  }
}

export const getItemById = new getItemByIdController(
  new GetItemByIdUseCase(itemRepositoryImpl)
);
