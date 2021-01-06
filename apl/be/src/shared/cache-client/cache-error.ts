export class CacheError extends Error {
  constructor(error: any) {
    error.message = `CACHE ERROR: ${error.message}`;
    super(error);
  }
}
