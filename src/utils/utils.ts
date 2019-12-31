/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */

export const stripWildcard = (path: string): string => {
  if (path.endsWith('/*')) {
    path = path.substr(0, path.length - 2)
  }
  return path
}
