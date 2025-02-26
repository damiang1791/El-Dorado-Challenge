import { ItemEntity } from "../../db/domain/item.entity";
import { ItemRepository } from "../../db/domain/item.repository";
import { GetItemByIdUseCase } from "../application/get-item-by-id.use-case";


describe("GetItemByIdUseCase", () => {
  let itemRepo: jest.Mocked<ItemRepository>;
  let getItemByIdUseCase: GetItemByIdUseCase;

  beforeEach(() => {
    itemRepo = {
      getById: jest.fn(),
    } as unknown as jest.Mocked<ItemRepository>;

    getItemByIdUseCase = new GetItemByIdUseCase(itemRepo);
  });

  it("✅ debe obtener un item por ID correctamente", async () => {
    const itemMock: ItemEntity = { id: 1, name: "Item 1", price: 100 };
    itemRepo.getById.mockResolvedValueOnce(itemMock);

    const result = await getItemByIdUseCase.run(1);

    expect(itemRepo.getById).toHaveBeenCalledWith(1);
    expect(itemRepo.getById).toHaveBeenCalledTimes(1);
    expect(result).toEqual(itemMock);
  });

  it("✅ debe devolver null si el item no existe", async () => {
    itemRepo.getById.mockResolvedValueOnce(null);

    const result = await getItemByIdUseCase.run(999);

    expect(itemRepo.getById).toHaveBeenCalledWith(999);
    expect(itemRepo.getById).toHaveBeenCalledTimes(1);
    expect(result).toBeNull();
  });

  it("❌ debe lanzar un error si la obtención falla", async () => {
    const errorMessage = "Error obteniendo el item";
    itemRepo.getById.mockRejectedValueOnce(new Error(errorMessage));

    await expect(getItemByIdUseCase.run(1)).rejects.toThrow(errorMessage);
    expect(itemRepo.getById).toHaveBeenCalledWith(1);
    expect(itemRepo.getById).toHaveBeenCalledTimes(1);
  });
});
