import { ItemRepository } from "../../db/domain/item.repository";

export class DeleteItemByIdUseCase {
  constructor(private itemRepo: ItemRepository) {}

  async run(id: number): Promise<void> {
    return await this.itemRepo.delete(id);
  }
}
