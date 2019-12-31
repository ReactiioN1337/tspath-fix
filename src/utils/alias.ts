/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */

import { AliasCache }         from './../../lib/utils/alias.interface'
import { PathAliasInterface } from './../../lib/tspath.interface'
import { stripWildcard }      from './utils'

export class Alias {
  private readonly _cache: AliasCache = {}

  public parse(paths: PathAliasInterface) {
    for (const key of Object.keys(paths)) {
      // todo: add support for fallback, but not in 1.0
      // todo: I never used something else than "@src/*" => "src/*", maybe I should note this in readme...
      this._cache[stripWildcard(key)] = stripWildcard(paths[key][0])
    }
  }

  public findAliasMapping(alias: string): string | undefined
  public findAliasMapping(pathSplit: string[]): string | undefined
  public findAliasMapping(needle: string | string[]): string | undefined {
    if (typeof(needle) === 'object') {
      needle = needle[0]
    }
    return this._cache[needle]
  }
}
