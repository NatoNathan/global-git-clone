# global-git-clone

global-git-clone is a command line tool that allows you to clone git repositories to your projects directory following a specific naming convention.

<!-- toc -->
* [global-git-clone](#global-git-clone)
<!-- tocstop -->
## Usage
<!-- usage -->
```sh-session
$ npm install -g global-git-clone
$ global-git-clone COMMAND
running command...
$ global-git-clone (--version)
global-git-clone/0.1.0 darwin-x64 node-v16.13.0
$ global-git-clone --help [COMMAND]
USAGE
  $ global-git-clone COMMAND
...
```
<!-- usagestop -->
## Commands
<!-- commands -->
* [`global-git-clone clone <repo>`](#global-git-clone-clone-repo)
* [`global-git-clone config`](#global-git-clone-config)
* [`global-git-clone help [COMMAND]`](#global-git-clone-help-command)
* [`global-git-clone template`](#global-git-clone-template)
* [`global-git-clone template add [NAME]`](#global-git-clone-template-add-name)
* [`global-git-clone template list`](#global-git-clone-template-list)
* [`global-git-clone template ls`](#global-git-clone-template-ls)
* [`global-git-clone template remove [NAME]`](#global-git-clone-template-remove-name)
* [`global-git-clone template rm [NAME]`](#global-git-clone-template-rm-name)

## `global-git-clone clone <repo>`

Clone a repository from a remote url, to your local projects directory.

```
USAGE
  $ global-git-clone clone <repo>
  $ global-git-clone clone <repo> --template <template>

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -t, --template=<value>                  [default: default] template name or string
  -v, --verbose                           verbose output

DESCRIPTION
  Clone a repository from a remote url, to your local projects directory.

EXAMPLES
  $ global-git-clone clone git@gtihub.com:natonathan/global-git-clone.git

  $ global-git-clone clone https://github.com/natonathan/global-git-clone.git --template sdk

  $ global-git-clone clone git@gtihub.com:natonathan/global-git-clone.git --template "~/git/{provider}/{owner}/{repo}"
```

_See code: [dist/commands/clone.ts](https://github.com/NatoNathan/global-git-clone/blob/v0.1.0/dist/commands/clone.ts)_

## `global-git-clone config`

Prints the current config file

```
USAGE
  $ global-git-clone config [-l debug|info|warn|error] [-v] [-c <value>] [-d]

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -v, --verbose                           verbose output

DESCRIPTION
  Prints the current config file

EXAMPLES
  $ global-git-clone config
```

_See code: [dist/commands/config/index.ts](https://github.com/NatoNathan/global-git-clone/blob/v0.1.0/dist/commands/config/index.ts)_

## `global-git-clone help [COMMAND]`

Display help for global-git-clone.

```
USAGE
  $ global-git-clone help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for global-git-clone.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_

## `global-git-clone template`

List all available templates

```
USAGE
  $ global-git-clone template [-l debug|info|warn|error] [-v] [-c <value>] [-d] [--columns <value> | -x]
    [--sort <value>] [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -v, --verbose                           verbose output
  -x, --extended                          show extra columns
  --columns=<value>                       only show provided columns (comma-separated)
  --csv                                   output is csv format [alias: --output=csv]
  --filter=<value>                        filter property by partial string matching, ex: name=foo
  --no-header                             hide table header from output
  --no-truncate                           do not truncate output to fit screen
  --output=<option>                       output in a more machine friendly format
                                          <options: csv|json|yaml>
  --sort=<value>                          property to sort by (prepend '-' for descending)

DESCRIPTION
  List all available templates

ALIASES
  $ global-git-clone template ls
  $ global-git-clone template list

EXAMPLES
  $ global-git-clone template
```

_See code: [dist/commands/template/index.ts](https://github.com/NatoNathan/global-git-clone/blob/v0.1.0/dist/commands/template/index.ts)_

## `global-git-clone template add [NAME]`

Add a new template

```
USAGE
  $ global-git-clone template add [NAME] [-l debug|info|warn|error] [-v] [-c <value>] [-d] [-f] [-n <value>] [-t
    <value>]

ARGUMENTS
  NAME  template name

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -f, --force
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -n, --name=<value>                      template name
  -t, --template=<value>                  template string
  -v, --verbose                           verbose output

DESCRIPTION
  Add a new template

EXAMPLES
  $ global-git-clone template add
```

## `global-git-clone template list`

List all available templates

```
USAGE
  $ global-git-clone template list [-l debug|info|warn|error] [-v] [-c <value>] [-d] [--columns <value> | -x]
    [--sort <value>] [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -v, --verbose                           verbose output
  -x, --extended                          show extra columns
  --columns=<value>                       only show provided columns (comma-separated)
  --csv                                   output is csv format [alias: --output=csv]
  --filter=<value>                        filter property by partial string matching, ex: name=foo
  --no-header                             hide table header from output
  --no-truncate                           do not truncate output to fit screen
  --output=<option>                       output in a more machine friendly format
                                          <options: csv|json|yaml>
  --sort=<value>                          property to sort by (prepend '-' for descending)

DESCRIPTION
  List all available templates

ALIASES
  $ global-git-clone template ls
  $ global-git-clone template list

EXAMPLES
  $ global-git-clone template list
```

## `global-git-clone template ls`

List all available templates

```
USAGE
  $ global-git-clone template ls [-l debug|info|warn|error] [-v] [-c <value>] [-d] [--columns <value> | -x]
    [--sort <value>] [--filter <value>] [--output csv|json|yaml |  | [--csv | --no-truncate]] [--no-header | ]

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -v, --verbose                           verbose output
  -x, --extended                          show extra columns
  --columns=<value>                       only show provided columns (comma-separated)
  --csv                                   output is csv format [alias: --output=csv]
  --filter=<value>                        filter property by partial string matching, ex: name=foo
  --no-header                             hide table header from output
  --no-truncate                           do not truncate output to fit screen
  --output=<option>                       output in a more machine friendly format
                                          <options: csv|json|yaml>
  --sort=<value>                          property to sort by (prepend '-' for descending)

DESCRIPTION
  List all available templates

ALIASES
  $ global-git-clone template ls
  $ global-git-clone template list

EXAMPLES
  $ global-git-clone template ls
```

## `global-git-clone template remove [NAME]`

Remove a template

```
USAGE
  $ global-git-clone template remove [NAME] [-l debug|info|warn|error] [-v] [-c <value>] [-d] [-n <value>]

ARGUMENTS
  NAME  template name

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -n, --name=<value>                      template name
  -v, --verbose                           verbose output

DESCRIPTION
  Remove a template

ALIASES
  $ global-git-clone template rm

EXAMPLES
  $ global-git-clone template remove
```

## `global-git-clone template rm [NAME]`

Remove a template

```
USAGE
  $ global-git-clone template rm [NAME] [-l debug|info|warn|error] [-v] [-c <value>] [-d] [-n <value>]

ARGUMENTS
  NAME  template name

FLAGS
  -c, --config=<value>                    custom config file
  -d, --dry-run                           dry run
  -l, --loglevel=(debug|info|warn|error)  [default: info] log level
  -n, --name=<value>                      template name
  -v, --verbose                           verbose output

DESCRIPTION
  Remove a template

ALIASES
  $ global-git-clone template rm

EXAMPLES
  $ global-git-clone template rm
```
<!-- commandsstop -->
