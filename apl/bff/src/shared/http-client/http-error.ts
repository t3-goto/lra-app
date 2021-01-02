export class HttpError extends Error {
  constructor(error: any) {
    error.message = `HTTP ERROR: ${error.message}`;
    super(error);
  }
}
