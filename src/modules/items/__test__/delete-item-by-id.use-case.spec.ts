import { ItemRepository } from "../../db/domain/item.repository";
import { DeleteItemByIdUseCase } from "../application/delete-item-by-id.use-case";

describe("DeleteItemByIdUseCase", () => {
  let itemRepo: jest.Mocked<ItemRepository>;
  let deleteItemByIdUseCase: DeleteItemByIdUseCase;

  beforeEach(() => {
    itemRepo = {
      delete: jest.fn(),
    } as unknown as jest.Mocked<ItemRepository>;

    deleteItemByIdUseCase = new DeleteItemByIdUseCase(itemRepo);
  });

  it("✅ debe eliminar un item correctamente", async () => {
    const itemId = 123;
    itemRepo.delete.mockResolvedValueOnce(undefined);

    await deleteItemByIdUseCase.run(itemId);

    expect(itemRepo.delete).toHaveBeenCalledWith(itemId);
    expect(itemRepo.delete).toHaveBeenCalledTimes(1);
  });

  it("❌ debe lanzar un error si la eliminación falla", async () => {
    const itemId = 123;
    const errorMessage = "Error eliminando el item";
    itemRepo.delete.mockRejectedValueOnce(new Error(errorMessage));

    await expect(deleteItemByIdUseCase.run(itemId)).rejects.toThrow(
      errorMessage
    );
    expect(itemRepo.delete).toHaveBeenCalledWith(itemId);
    expect(itemRepo.delete).toHaveBeenCalledTimes(1);
  });
});
