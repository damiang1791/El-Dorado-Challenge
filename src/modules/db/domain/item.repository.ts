import { ItemEntity } from "./item.entity";
import { NewItem } from "../../items/domain/new-item.dto";
import { UpdateItem } from "../../items/domain/update-item.dto";

export interface ItemRepository {
  create(newItem: NewItem): Promise<ItemEntity>;
  getAll(): Promise<ItemEntity[]>;
  getById(id: number): Promise<ItemEntity | null>;
  update(id: number, update: UpdateItem): Promise<ItemEntity | null>;
  delete(id: number): Promise<void>;
}
