import { ItemRepository } from "../../db/domain/item.repository";
import { Item } from "../domain/item.dto";

export class GetItemByIdUseCase {
  constructor(private itemRepo: ItemRepository) {}

  async run(id: number): Promise<Item | null> {
    const item = await this.itemRepo.getById(id);

    if (!item) return null;

    return {
      id: item.id,
      name: item.name,
      price: item.price,
    };
  }
}
