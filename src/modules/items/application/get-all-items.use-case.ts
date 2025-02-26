import { ItemRepository } from "../../db/domain/item.repository";
import { Item } from "../domain/item.dto";

export class GetAllItemsUseCase {
  constructor(private itemRepo: ItemRepository) {}

  async run(): Promise<Item[]> {
    const items = await this.itemRepo.getAll();

    return items.map((item) => ({
      id: item.id,
      name: item.name,
      price: item.price,
    }));
  }
}
