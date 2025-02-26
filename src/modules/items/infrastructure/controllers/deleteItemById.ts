import { Request, ResponseToolkit } from "@hapi/hapi";
import itemRepositoryImpl from "../../../db/infrastructure/repositories/item.repository.impl";
import { DeleteItemByIdUseCase } from "../../application/delete-item-by-id.use-case";

class deleteItemByIdController {
  constructor(private useCase: DeleteItemByIdUseCase) {}

  async run(req: Request, res: ResponseToolkit) {
    const { id } = req.params;

    await this.useCase.run(id);

    return res.response().code(204);
  }
}

export const deleteItemById = new deleteItemByIdController(
  new DeleteItemByIdUseCase(itemRepositoryImpl)
);
