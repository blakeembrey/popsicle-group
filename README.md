# Popsicle Group

[![NPM version](https://img.shields.io/npm/v/popsicle-group.svg?style=flat)](https://npmjs.org/package/popsicle-group)
[![NPM Downloads](https://img.shields.io/npm/dm/popsicle-group.svg?style=flat)](https://npmjs.org/package/popsicle-group)
[![Build status](https://img.shields.io/travis/blakeembrey/popsicle-group.svg?style=flat)](https://travis-ci.org/blakeembrey/popsicle-group)
[![Test coverage](https://img.shields.io/coveralls/blakeembrey/popsicle-group.svg?style=flat)](https://coveralls.io/r/blakeembrey/popsicle-group?branch=master)
[![Greenkeeper badge](https://badges.greenkeeper.io/blakeembrey/popsicle-group.svg)](https://greenkeeper.io/)

> Group [Popsicle](https://github.com/blakeembrey/popsicle) requests and perform operations on them all at once.

## Installation

```
npm install popsicle-group --save
```

## Usage

```js
var popsicle = require('popsicle')
var group = require('popsicle-group')

var pageGroup = group()

popsicle('/users').use(pageGroup)
popsicle('/users/123').use(pageGroup)
popsicle('/users/456').use(pageGroup)

pageGroup.abort() // Aborts all active and future requests.
```

### API

* **abort** Abort current and future requests in the group
* **active** Get the number of active requests in the group

## License

MIT license
