import * as bcrypt from 'bcrypt';

export class UtilService {
  /**
   * generate hash from password or string
   * @param {string} password
   * @returns {string}
   */
  static generateSalt(rounds: number): string {
    return bcrypt.genSaltSync(rounds);
  }

  /**
   * generate hash from password or string
   * @param {string} password
   * @returns {string}
   */
  static generateHash(password: string): string {
    return bcrypt.hashSync(password, this.generateSalt(10));
  }

  /**
   * generate random string
   * @param length
   */
  static generateRandomString(length: number): string {
    return Math.random()
      .toString(36)
      .replace(/[^a-zA-Z0-9]+/g, '')
      .substr(0, length);
  }

  /**
   * validate text with hash
   * @param {string} password
   * @param {string} hash
   * @returns {boolean}
   */
  static validateHash(password: string, hash: string): boolean {
    return bcrypt.compareSync(password, hash);
  }
}
