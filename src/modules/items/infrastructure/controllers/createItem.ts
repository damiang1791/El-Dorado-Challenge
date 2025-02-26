import { Request, ResponseToolkit } from "@hapi/hapi";
import { CreateItemUseCase } from "../../application/create-item.use-case";
import itemRepositoryImpl from "../../../db/infrastructure/repositories/item.repository.impl";
import { NewItem } from "../../domain/new-item.dto";

class CreateItemController {
  constructor(private useCase: CreateItemUseCase) {}

  async run(req: Request, res: ResponseToolkit) {
    const { name, price } = req.payload as NewItem;

    const resp = await this.useCase.run({ name, price });

    return res.response(resp).code(201);
  }
}

export const createItem = new CreateItemController(
  new CreateItemUseCase(itemRepositoryImpl)
);
