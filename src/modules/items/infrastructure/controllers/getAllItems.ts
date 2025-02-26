import { Request, ResponseToolkit } from "@hapi/hapi";
import { GetAllItemsUseCase } from "../../application/get-all-items.use-case";
import itemRepositoryImpl from "../../../db/infrastructure/repositories/item.repository.impl";

class getAllItemsController {
  constructor(private useCase: GetAllItemsUseCase) {}

  async run(req: Request, res: ResponseToolkit) {
    const Items = await this.useCase.run();

    return res.response(Items).code(200);
  }
}

export const getAllItems = new getAllItemsController(
  new GetAllItemsUseCase(itemRepositoryImpl)
);
