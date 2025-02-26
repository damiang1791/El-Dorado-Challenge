import { ItemRepository } from "../../db/domain/item.repository";
import { Item } from "../domain/item.dto";
import { UpdateItem } from "../domain/update-item.dto";

export class UpdateItemUseCase {
  constructor(private itemRepo: ItemRepository) {}

  async run(id: number, update: UpdateItem): Promise<Item | null> {
    const item = await this.itemRepo.update(id, update);

    if (!item) return null;

    return {
      id: item.id,
      name: item.name,
      price: item.price,
    };
  }
}
