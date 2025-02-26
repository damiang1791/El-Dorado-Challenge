import Boom from "@hapi/boom";
import { Request, ResponseToolkit, Lifecycle } from "@hapi/hapi";

export const handlerError = (
  request: Request,
  h: ResponseToolkit
): Lifecycle.ReturnValue => {
  const response = request.response;

  if (response instanceof Error) {
    const message = response.message || "bad request";
    const errorResponse = Boom.isBoom(response)
      ? response
      : Boom.badRequest(message);

    return h
      .response({
        message: errorResponse.message,
        details: errorResponse.data || null,
      })
      .code(errorResponse.output.statusCode);
  }

  return h.continue;
};
