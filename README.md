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
global-git-clone/0.1.0 darwin-x64 node-v16.13.0
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

_See code: [dist/commands/hello/index.ts](https://github.com/NatoNathan/global-git-clone/blob/v0.1.0/dist/commands/hello/index.ts)_

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

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.12/src/commands/help.ts)_
<!-- commandsstop -->
