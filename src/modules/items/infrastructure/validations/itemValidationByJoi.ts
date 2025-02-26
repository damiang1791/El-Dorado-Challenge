import Joi from "joi";

export const itemSchemas = {
  create: Joi.object({
    name: Joi.string().required().messages({
      "any.required": `Field "name" is required`,
      "string.base": `Field "name" must be a string`,
    }),
    price: Joi.number().required().positive().messages({
      "any.required": `Field "price" is required`,
      "number.base": `Field "price" must be a number`,
      "number.positive": `Field "price" cannot be negative`,
    }),
  }),
  update: Joi.object({
    name: Joi.string().messages({
      "any.required": `Field "name" is required`,
      "string.base": `Field "name" must be a string`,
    }),
    price: Joi.number().positive().messages({
      "any.required": `Field "price" is required`,
      "number.base": `Field "price" must be a number`,
      "number.positive": `Field "price" cannot be negative`,
    }),
  }),
  idParam: Joi.object({
    id: Joi.number().integer().positive().required(),
  }),
};
