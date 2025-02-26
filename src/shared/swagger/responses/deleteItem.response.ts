import Joi from "joi";

export const deleteItemResponse = {
  status: {
    204: Joi.object(),
  },
};
