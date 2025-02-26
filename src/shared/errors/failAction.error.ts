import { Request, ResponseToolkit } from "@hapi/hapi";
import { ValidationError } from "joi";

export const failActionError = (
  request: Request,
  h: ResponseToolkit,
  err: Error | undefined
) => {
  if (err instanceof ValidationError && err.details) {
    const errors = err.details.map((detail) => ({
      field: detail.context?.key,
      message: detail.message,
    }));

    return h.response({ errors }).code(400).takeover();
  }

  return h.continue;
};
