import Joi from "joi";

export const getAllItemsResponse = {
  status: {
    200: Joi.object({
      items: Joi.array().items(
        Joi.object({
          id: Joi.number(),
          name: Joi.string(),
          price: Joi.number(),
        })
      ),
    }),
  },
};
