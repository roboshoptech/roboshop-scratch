/**
 * Is the given string a number (includes negative and decimals).
 *
 * @param str Input string.
 * @returns True if number, false otherwise.
 */
export function isNumber(str: string): boolean {
  return /^\s*-?\d+(\.\d+)?\s*$/.test(str);
}
