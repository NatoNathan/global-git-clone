oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g global-git-clone
$ global-git-clone COMMAND
running command...
$ global-git-clone (--version)
global-git-clone/0.0.0 darwin-x64 node-v16.13.0
$ global-git-clone --help [COMMAND]
USAGE
  $ global-git-clone COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`global-git-clone hello PERSON`](#global-git-clone-hello-person)
* [`global-git-clone hello world`](#global-git-clone-hello-world)
* [`global-git-clone help [COMMAND]`](#global-git-clone-help-command)
* [`global-git-clone plugins`](#global-git-clone-plugins)
* [`global-git-clone plugins:install PLUGIN...`](#global-git-clone-pluginsinstall-plugin)
* [`global-git-clone plugins:inspect PLUGIN...`](#global-git-clone-pluginsinspect-plugin)
* [`global-git-clone plugins:install PLUGIN...`](#global-git-clone-pluginsinstall-plugin-1)
* [`global-git-clone plugins:link PLUGIN`](#global-git-clone-pluginslink-plugin)
* [`global-git-clone plugins:uninstall PLUGIN...`](#global-git-clone-pluginsuninstall-plugin)
* [`global-git-clone plugins:uninstall PLUGIN...`](#global-git-clone-pluginsuninstall-plugin-1)
* [`global-git-clone plugins:uninstall PLUGIN...`](#global-git-clone-pluginsuninstall-plugin-2)
* [`global-git-clone plugins update`](#global-git-clone-plugins-update)

## `global-git-clone hello PERSON`

Say hello

```
USAGE
  $ global-git-clone hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Whom is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/NatoNathan/global-git-clone/blob/v0.0.0/dist/commands/hello/index.ts)_

## `global-git-clone hello world`

Say hello world

```
USAGE
  $ global-git-clone hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ oex hello world
  hello world! (./src/commands/hello/world.ts)
```

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.10/src/commands/help.ts)_

## `global-git-clone plugins`

List installed plugins.

```
USAGE
  $ global-git-clone plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ global-git-clone plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.0.11/src/commands/plugins/index.ts)_

## `global-git-clone plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ global-git-clone plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ global-git-clone plugins add

EXAMPLES
  $ global-git-clone plugins:install myplugin 

  $ global-git-clone plugins:install https://github.com/someuser/someplugin

  $ global-git-clone plugins:install someuser/someplugin
```

## `global-git-clone plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ global-git-clone plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ global-git-clone plugins:inspect myplugin
```

## `global-git-clone plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ global-git-clone plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.

  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.

ALIASES
  $ global-git-clone plugins add

EXAMPLES
  $ global-git-clone plugins:install myplugin 

  $ global-git-clone plugins:install https://github.com/someuser/someplugin

  $ global-git-clone plugins:install someuser/someplugin
```

## `global-git-clone plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ global-git-clone plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.

  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.

EXAMPLES
  $ global-git-clone plugins:link myplugin
```

## `global-git-clone plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ global-git-clone plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ global-git-clone plugins unlink
  $ global-git-clone plugins remove
```

## `global-git-clone plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ global-git-clone plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ global-git-clone plugins unlink
  $ global-git-clone plugins remove
```

## `global-git-clone plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ global-git-clone plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ global-git-clone plugins unlink
  $ global-git-clone plugins remove
```

## `global-git-clone plugins update`

Update installed plugins.

```
USAGE
  $ global-git-clone plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
