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
