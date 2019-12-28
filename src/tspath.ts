/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */

import { log, getTSPathPackage, getTSConfig }  from './config'
import { PathAliasInterface, TSPathInterface } from './../lib/tspath.interface'

class TSPath
  implements TSPathInterface {
  private readonly _npm: any

  constructor() {
    this._npm = getTSPathPackage()
    log.notice(`TSPath Fix version ${this._npm.version} has been loaded`)
  }

  public async process(): Promise<void> {
    // todo: parse command line (--path)
    const directory = process.cwd()

    const aliases = await this.getTSPaths(directory)
    if (aliases == undefined) {
      return
    }

    console.log(aliases)
  }

  private async getTSPaths(directory: string): Promise<PathAliasInterface | undefined> {
    const config = await getTSConfig(directory)
    return config == undefined
      ? undefined
      : config.compilerOptions.paths
  }
}

(new TSPath()).process()
.then(() => {})
.catch(err => log.critical(`${err}`))
