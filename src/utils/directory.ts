/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */

import path                         from 'path'
import { promises as fs }           from 'fs'
import { DirectoryParserInterface } from './../../lib/utils/directory.interface'

export const hasExtensions = (file: string, extension: string) =>
  file.indexOf(extension) === file.length - extension.length

export const parseDirectory = async (options: DirectoryParserInterface, directories?: string[]): Promise<string[]> => {
  const { directory, recursive, extensions } = options

  const list: string[]  = directories != undefined ? directories : []
  const files: string[] = await fs.readdir(directory)

  for (const file of files) {
    if (file === '.git' || file === 'node_modules') {
      continue
    }

    const filepath = path.join(directory, file)
    const stats    = await fs.stat(filepath)

    if (stats.isDirectory() && recursive === true) {
      await parseDirectory({
        directory: filepath,
        recursive, extensions
      }, list)
    } else {
      for (const extension of extensions) {
        if (hasExtensions(filepath, extension)) {
          list.push(filepath)
          break
        }
      }
    }
  }
  return list
}
