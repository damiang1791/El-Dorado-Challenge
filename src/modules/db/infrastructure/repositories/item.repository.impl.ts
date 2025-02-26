import { NewItem } from "../../../items/domain/new-item.dto";
import { UpdateItem } from "../../../items/domain/update-item.dto";
import { ItemEntity } from "../../domain/item.entity";
import { ItemRepository } from "../../domain/item.repository";
import { ItemModel } from "../models/item.model";

class ItemRepositoryImpl implements ItemRepository {
  async create({ name, price }: NewItem): Promise<ItemEntity> {
    const newItem = await ItemModel.create({ name, price });
    return newItem.toJSON() as ItemEntity;
  }

  async getAll(): Promise<ItemEntity[]> {
    const items = await ItemModel.findAll();
    return items.map((i) => i.toJSON());
  }

  async getById(id: number): Promise<ItemEntity | null> {
    const item = await ItemModel.findByPk(id);
    return item ? item.toJSON() : null;
  }

  async update(id: number, item: UpdateItem): Promise<ItemEntity | null> {
    const existingItem = await ItemModel.findByPk(id);
    if (!existingItem) return null;

    await existingItem.update(item);
    return existingItem.toJSON();
  }

  async delete(id: number): Promise<void> {
    await ItemModel.destroy({ where: { id } });
  }
}

export default new ItemRepositoryImpl();
