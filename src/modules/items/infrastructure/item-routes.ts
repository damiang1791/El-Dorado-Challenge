import { ServerRoute } from "@hapi/hapi";
import { getAllItems } from "./controllers/getAllItems";
import { getItemById } from "./controllers/getItemById";
import { createItem } from "./controllers/createItem";
import { updateItem } from "./controllers/updateItem";
import { deleteItemById } from "./controllers/deleteItemById";
import { itemSchemas } from "./validations/itemValidationByJoi";
import { failActionError } from "../../../shared/errors/failAction.error";
import { getAllItemsResponse } from "../../../shared/swagger/responses/getAllItems.response";
import { getItemByIdResponse } from "../../../shared/swagger/responses/getItemById.response";
import { createItemResponse } from "../../../shared/swagger/responses/createItem.response";
import { updateItemResponse } from "../../../shared/swagger/responses/updateItem.response";
import { deleteItemResponse } from "../../../shared/swagger/responses/deleteItem.response";

export const itemRoutes: ServerRoute[] = [
  {
    method: "GET",
    path: "/items",
    handler: getAllItems.run.bind(getAllItems),
    options: {
      tags: ["api", "items"],
      description: "Get all items",
      notes: "Returns a list of all items",
      validate: {
        failAction: failActionError,
      },
      response: getAllItemsResponse,
    },
  },
  {
    method: "GET",
    path: "/items/{id}",
    handler: getItemById.run.bind(getItemById),
    options: {
      tags: ["api", "items"],
      description: "Get an item by ID",
      notes: "Returns a specific item based on the ID",
      validate: {
        params: itemSchemas.idParam,
        failAction: failActionError,
      },
      response: getItemByIdResponse,
    },
  },
  {
    method: "POST",
    path: "/items",
    handler: createItem.run.bind(createItem),
    options: {
      tags: ["api", "items"],
      description: "Create a new item",
      notes: "Creates a new item and returns the created object",
      validate: {
        payload: itemSchemas.create,
        failAction: failActionError,
      },
      response: createItemResponse,
    },
  },
  {
    method: "PUT",
    path: "/items/{id}",
    handler: updateItem.run.bind(updateItem),
    options: {
      tags: ["api", "items"],
      description: "Update an existing item",
      notes: "Updates an item by ID and returns the updated object",
      validate: {
        params: itemSchemas.idParam,
        payload: itemSchemas.update,
        failAction: failActionError,
      },
      response: updateItemResponse,
    },
  },
  {
    method: "DELETE",
    path: "/items/{id}",
    handler: deleteItemById.run.bind(deleteItemById),
    options: {
      tags: ["api", "items"],
      description: "Delete an item by ID",
      notes: "Deletes an item and returns a success message",
      validate: {
        params: itemSchemas.idParam,
        failAction: failActionError,
      },
      response: deleteItemResponse,
    },
  },
];
