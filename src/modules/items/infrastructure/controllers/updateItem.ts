import { Request, ResponseToolkit } from "@hapi/hapi";
import itemRepositoryImpl from "../../../db/infrastructure/repositories/item.repository.impl";
import { UpdateItemUseCase } from "../../application/update-item.use-case";
import { UpdateItem } from "../../domain/update-item.dto";

class UpdateItemController {
  constructor(private useCase: UpdateItemUseCase) {}

  async run(req: Request, res: ResponseToolkit) {
    try {
      const { id } = req.params;
      const { name, price } = req.payload as UpdateItem;

      const item = await this.useCase.run(id, { name, price });

      if (!item) return res.response({ id }).code(404);

      return res.response(item).code(200);
    } catch (error) {
      console.error({ error });
      throw error;
    }
  }
}

export const updateItem = new UpdateItemController(
  new UpdateItemUseCase(itemRepositoryImpl)
);
