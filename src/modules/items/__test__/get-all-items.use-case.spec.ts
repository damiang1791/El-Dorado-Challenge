import { ItemEntity } from "../../db/domain/item.entity";
import { ItemRepository } from "../../db/domain/item.repository";
import { GetAllItemsUseCase } from "../application/get-all-items.use-case";


describe("GetAllItemsUseCase", () => {
  let itemRepo: jest.Mocked<ItemRepository>;
  let getAllItemsUseCase: GetAllItemsUseCase;

  beforeEach(() => {
    itemRepo = {
      getAll: jest.fn(),
    } as unknown as jest.Mocked<ItemRepository>;

    getAllItemsUseCase = new GetAllItemsUseCase(itemRepo);
  });

  it("✅ debe obtener todos los items correctamente", async () => {
    const itemsMock: ItemEntity[] = [
      { id: 1, name: "Item 1", price: 100 },
      { id: 2, name: "Item 2", price: 200 },
    ];
    itemRepo.getAll.mockResolvedValueOnce(itemsMock);

    const result = await getAllItemsUseCase.run();

    expect(itemRepo.getAll).toHaveBeenCalledTimes(1);
    expect(result).toEqual(itemsMock);
  });

  it("❌ debe lanzar un error si la obtención falla", async () => {
    const errorMessage = "Error obteniendo los items";
    itemRepo.getAll.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getAllItemsUseCase.run()).rejects.toThrow(errorMessage);
    expect(itemRepo.getAll).toHaveBeenCalledTimes(1);
  });
});
