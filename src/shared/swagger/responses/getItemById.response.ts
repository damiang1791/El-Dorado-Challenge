import Joi from "joi";

export const getItemByIdResponse = {
  status: {
    200: Joi.object({
      id: Joi.number(),
      name: Joi.string(),
      price: Joi.number(),
    }),
    404: Joi.object({
      id: Joi.number(),
    }),
  },
};
