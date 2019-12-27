/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */

import { log } from './config'

class TSPath {
  private readonly _npm: any

  constructor() {
    this._npm = require('./../package.json')
    log.notice(`TSPath Fix version ${this._npm.version} has been loaded`)
  }
}
