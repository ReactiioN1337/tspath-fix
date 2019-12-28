/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */
import { Log, LogLevel }  from 'node-psr-log'
import { parseDirectory } from './utils/directory'

export const log = new Log(LogLevel.Everything, 'TSPath Fix', undefined, '')

export const getTSPathPackage = () =>
  require('./../package.json')

export const getTSConfig = async (directory: string) => {
  const files = await parseDirectory({ directory, recursive: false, extensions: [ 'tsconfig.json' ] })
  if (files.length === 0) {
    log.error(`could not find tsconfig.json in '${directory}'`)
    return undefined
  }

  const tsconfig = require(files[0])
  if (tsconfig == undefined) {
    log.error('failed to read tsconfig.json')
    return undefined
  }

  const { compilerOptions } = tsconfig
  if (compilerOptions == undefined) {
    log.error('missing compiler options')
    return undefined
  }

  if (compilerOptions.paths == undefined) {
    log.error('missing paths in tsconfig.json')
    return undefined
  }

  return tsconfig
}
