import Boom from "@hapi/boom";
import { ItemRepository } from "../../db/domain/item.repository";
import { NewItem } from "../domain/new-item.dto";

export class CreateItemUseCase {
  constructor(private itemRepo: ItemRepository) {}

  async run(newItem: NewItem) {
    const item = await this.itemRepo.create(newItem);

    return {
      id: item.id,
      name: item.name,
      price: item.price,
    };
  }
}
