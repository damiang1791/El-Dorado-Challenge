import { ItemRepository } from "../../db/domain/item.repository";
import { UpdateItemUseCase } from "../application/update-item.use-case";
import { UpdateItem } from "../domain/update-item.dto";

describe("UpdateItemUseCase", () => {
  let itemRepo: jest.Mocked<ItemRepository>;
  let updateItemUseCase: UpdateItemUseCase;

  beforeEach(() => {
    itemRepo = {
      update: jest.fn(),
    } as unknown as jest.Mocked<ItemRepository>;

    updateItemUseCase = new UpdateItemUseCase(itemRepo);
  });

  it("✅ debe actualizar un item correctamente", async () => {
    const id = 1;
    const updateData: UpdateItem = { name: "Item actualizado", price: 150 };
    const updatedItem = { id, ...updateData };

    itemRepo.update.mockResolvedValueOnce(updatedItem);

    const result = await updateItemUseCase.run(id, updateData);

    expect(itemRepo.update).toHaveBeenCalledWith(id, updateData);
    expect(itemRepo.update).toHaveBeenCalledTimes(1);
    expect(result).toEqual(updatedItem);
  });

  it("✅ debe devolver null si el item no existe", async () => {
    const id = 999;
    const updateData: UpdateItem = { name: "Item no existente", price: 200 };

    itemRepo.update.mockResolvedValueOnce(null);

    const result = await updateItemUseCase.run(id, updateData);

    expect(itemRepo.update).toHaveBeenCalledWith(id, updateData);
    expect(itemRepo.update).toHaveBeenCalledTimes(1);
    expect(result).toBeNull();
  });

  it("❌ debe lanzar un error si la actualización falla", async () => {
    const id = 1;
    const updateData: UpdateItem = { name: "Error Item", price: 300 };
    const errorMessage = "Error actualizando el item";

    itemRepo.update.mockRejectedValueOnce(new Error(errorMessage));

    await expect(updateItemUseCase.run(id, updateData)).rejects.toThrow(errorMessage);
    expect(itemRepo.update).toHaveBeenCalledWith(id, updateData);
    expect(itemRepo.update).toHaveBeenCalledTimes(1);
  });
});

