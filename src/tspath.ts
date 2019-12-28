/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */

import { log, getTSPathPackage, getTSConfig } from './config'

interface PathAliasInterface {
  [key: string]: string
}

class TSPath {
  private readonly _npm: any

  constructor() {
    this._npm = getTSPathPackage()
    log.notice(`TSPath Fix version ${this._npm.version} has been loaded`)
  }

  public async process() {
    // todo: parse command line (--path)
    const directory = process.cwd()

    const aliases = await this.getAliases(directory)
    if (aliases == undefined) {
      return
    }

    console.log(aliases)
  }

  private async getAliases(directory: string): Promise<PathAliasInterface | undefined> {
    const config = await getTSConfig(directory)
    return config == undefined
      ? undefined
      : config.compilerOptions.paths
  }
}

(new TSPath()).process()
.then(() => {})
.catch(err => log.critical(`${err}`))
