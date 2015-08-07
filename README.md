# Popsicle Group

[![NPM version][npm-image]][npm-url]
[![NPM Downloads][downloads-image]][downloads-url]
[![Build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

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

[npm-image]: https://img.shields.io/npm/v/popsicle-group.svg?style=flat
[npm-url]: https://npmjs.org/package/popsicle-group
[travis-image]: https://img.shields.io/travis/blakeembrey/popsicle-group.svg?style=flat
[travis-url]: https://travis-ci.org/blakeembrey/popsicle-group
[coveralls-image]: https://img.shields.io/coveralls/blakeembrey/popsicle-group.svg?style=flat
[coveralls-url]: https://coveralls.io/r/blakeembrey/popsicle-group?branch=master
[downloads-image]: https://img.shields.io/npm/dm/popsicle-group.svg?style=flat
[downloads-url]: https://npmjs.org/package/popsicle-group
