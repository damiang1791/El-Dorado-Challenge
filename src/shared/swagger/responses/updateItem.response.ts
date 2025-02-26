import Joi from "joi";

export const updateItemResponse = {
  status: {
    200: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
      price: Joi.number(),
    }),
    400: Joi.object({
      errors: Joi.array().items(
        Joi.object({
          field: Joi.string().required(),
          message: Joi.string().required(),
        })
      ),
    }),
    404: Joi.object({
      id: Joi.number(),
    }),
  },
};
