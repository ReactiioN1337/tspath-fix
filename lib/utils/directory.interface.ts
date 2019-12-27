/**
 * @author    ReactiioN
 * @copyright 2019, https://github.com/ReactiioN1337
 * @license   MIT
 */

export interface DirectoryParserInterface {
  /**
   * Specifies the current work directory (CWD).
   */
  directory: string
  /**
   * Enables/disables recursive parsing.
   */
  recursive: boolean
  /**
   * Specifies the wanted file extensions (e.g. '.json').
   */
  extensions: string[]
}
