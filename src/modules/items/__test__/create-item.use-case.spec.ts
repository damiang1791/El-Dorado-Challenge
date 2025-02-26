import { ItemRepository } from "../../db/domain/item.repository";
import { NewItem } from "../../items/domain/new-item.dto";
import { ItemEntity } from "../../db/domain/item.entity";
import { CreateItemUseCase } from "../application/create-item.use-case";

describe("CreateItemUseCase", () => {
  let itemRepo: jest.Mocked<ItemRepository>;
  let createItemUseCase: CreateItemUseCase;

  beforeEach(() => {
    itemRepo = {
      create: jest.fn(),
      getAll: jest.fn(),
      getById: jest.fn(),
      update: jest.fn(),
      delete: jest.fn(),
    };

    createItemUseCase = new CreateItemUseCase(itemRepo);
  });

  it("✅ Debe crear un item correctamente", async () => {
    const newItem: NewItem = { name: "Producto X", price: 99.99 };
    const createdItem: ItemEntity = { id: 123, ...newItem };

    itemRepo.create.mockResolvedValue(createdItem);

    const result = await createItemUseCase.run(newItem);

    expect(result).toEqual(createdItem);

    expect(itemRepo.create).toHaveBeenCalledWith(newItem);
    expect(itemRepo.create).toHaveBeenCalledTimes(1);
  });

  it("❌ Debe lanzar un error si la creación falla", async () => {
    // Datos de entrada
    const newItem: NewItem = { name: "Producto X", price: 99.99 };

    itemRepo.create.mockRejectedValue(new Error("Error al crear el item"));

    await expect(createItemUseCase.run(newItem)).rejects.toThrow(
      "Error al crear el item"
    );

    expect(itemRepo.create).toHaveBeenCalledWith(newItem);
    expect(itemRepo.create).toHaveBeenCalledTimes(1);
  });
});
